// ============================================
// CONFIGURACIÓN DE GOOGLE SHEETS
// ============================================

const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbw54DLF2TEbAwyFezBfwvQgMIkZ2RGHpWwC7C_xHXoBq8FNM7xkF_DGP0l_Ujz0uf51zw/exec';

// ============================================
// VARIABLES GLOBALES
// ============================================

let currentQuestion = 0;
let userAnswers = [];
let filteredQuestions = [...questions];
let currentFilter = 'all';
let reviewMode = false;
let startTime = null;
let userData = {};

// ============================================
// FUNCIONES DE INICIO Y REGISTRO
// ============================================

function startQuiz() {
    const userName = document.getElementById('userName').value.trim();
    const userEmail = document.getElementById('userEmail').value.trim();

    if (!userName || !userEmail) {
        alert('Por favor completa todos los campos requeridos.');
        return;
    }

    if (!validateEmail(userEmail)) {
        alert('Por favor ingresa un correo electrónico válido.');
        return;
    }

    // Guardar datos del usuario
    userData = {
        nombre: userName,
        correo: userEmail
    };

    // Mostrar datos del usuario en el quiz
    document.getElementById('displayUserName').textContent = userName;
    document.getElementById('displayUserEmail').textContent = userEmail;

    // Ocultar formulario de registro y mostrar quiz
    document.getElementById('registrationForm').style.display = 'none';
    document.getElementById('quizWrapper').classList.add('active');

    // Inicializar tiempo de inicio
    startTime = new Date();

    // Inicializar quiz
    initQuiz();
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// ============================================
// FUNCIONES DEL QUIZ
// ============================================

function initQuiz() {
    renderQuestion();
    updateProgress();
    updateStats();
}

function renderQuestion() {
    const container = document.getElementById('questionContainer');
    const q = filteredQuestions[currentQuestion];

    container.innerHTML = `
        <div class="question-card active">
            <div class="question-header">
                <span class="question-number">Pregunta ${currentQuestion + 1}</span>
                <span class="category-badge">${q.subcategoria}</span>
            </div>
            <div class="question-text">${q.pregunta}</div>
            <div class="options-container">
                ${q.opciones.map((option, index) => `
                    <div class="option ${userAnswers[currentQuestion] === index ? 'selected' : ''}
                           ${reviewMode && index === q.respuesta_correcta ? 'correct' : ''}
                           ${reviewMode && userAnswers[currentQuestion] === index && index !== q.respuesta_correcta ? 'incorrect' : ''}"
                           onclick="selectAnswer(${index})">
                        <input type="radio" name="answer" value="${index}"
                               ${userAnswers[currentQuestion] === index ? 'checked' : ''}
                               ${reviewMode ? 'disabled' : ''}>
                        <span class="option-text">${option}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    updateNavigation();
}

function selectAnswer(index) {
    if (!reviewMode) {
        userAnswers[currentQuestion] = index;
        updateStats();
        renderQuestion();
    }
}

function nextQuestion() {
    if (currentQuestion < filteredQuestions.length - 1) {
        currentQuestion++;
        renderQuestion();
        updateProgress();
    } else if (!reviewMode) {
        showResults();
    }
}

function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        renderQuestion();
        updateProgress();
    }
}

function updateNavigation() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const indicator = document.getElementById('questionIndicator');

    prevBtn.disabled = currentQuestion === 0;

    if (currentQuestion === filteredQuestions.length - 1 && !reviewMode) {
        nextBtn.textContent = 'Finalizar';
    } else if (currentQuestion === filteredQuestions.length - 1 && reviewMode) {
        nextBtn.disabled = true;
    } else {
        nextBtn.textContent = 'Siguiente';
        nextBtn.disabled = false;
    }

    indicator.textContent = `Pregunta ${currentQuestion + 1} de ${filteredQuestions.length}`;
}

function updateProgress() {
    const progress = ((currentQuestion + 1) / filteredQuestions.length) * 100;
    document.getElementById('progressFill').style.width = `${progress}%`;
}

function updateStats() {
    const answered = userAnswers.filter(a => a !== undefined).length;
    const correct = userAnswers.filter((a, i) => a === filteredQuestions[i]?.respuesta_correcta).length;
    const score = answered > 0 ? Math.round((correct / answered) * 100) : 0;

    document.getElementById('totalQuestions').textContent = filteredQuestions.length;
    document.getElementById('answeredCount').textContent = answered;
    document.getElementById('currentScore').textContent = `${score}%`;
}

function filterByCategory(category) {
    currentFilter = category;
    currentQuestion = 0;
    userAnswers = [];
    reviewMode = false;

    if (category === 'all') {
        filteredQuestions = [...questions];
    } else {
        filteredQuestions = questions.filter(q => q.subcategoria === category);
    }

    // Update filter buttons
    document.querySelectorAll('.btn').forEach(btn => {
        if (btn.textContent.includes('Todas') ||
            btn.textContent.includes(category.split(' ')[0])) {
            btn.classList.toggle('active', true);
        } else if (!btn.classList.contains('btn-primary') && !btn.classList.contains('btn-secondary')) {
            btn.classList.remove('active');
        }
    });

    // Hide results if shown
    document.getElementById('results').classList.remove('show');

    initQuiz();
}

// ============================================
// FUNCIONES DE RESULTADOS Y GOOGLE SHEETS
// ============================================

async function showResults() {
    const results = document.getElementById('results');
    const correct = userAnswers.filter((a, i) => a === filteredQuestions[i].respuesta_correcta).length;
    const score = Math.round((correct / filteredQuestions.length) * 100);

    // Update score circle
    const circle = document.getElementById('scoreCircle');
    const circumference = 2 * Math.PI * 65;
    const offset = circumference - (score / 100) * circumference;

    setTimeout(() => {
        circle.style.strokeDashoffset = offset;
    }, 100);

    document.getElementById('finalScore').textContent = `${score}%`;

    // Calculate category scores
    const categoryScores = {};
    filteredQuestions.forEach((q, i) => {
        if (!categoryScores[q.subcategoria]) {
            categoryScores[q.subcategoria] = { correct: 0, total: 0 };
        }
        categoryScores[q.subcategoria].total++;
        if (userAnswers[i] === q.respuesta_correcta) {
            categoryScores[q.subcategoria].correct++;
        }
    });

    // Display category results
    const categoryResultsHTML = Object.entries(categoryScores).map(([cat, scores]) => `
        <div class="category-item">
            <span class="category-name">${cat}</span>
            <span class="category-score">${scores.correct}/${scores.total}</span>
        </div>
    `).join('');

    document.getElementById('categoryResults').innerHTML = categoryResultsHTML;

    results.classList.add('show');

    // Hide question container
    document.getElementById('questionContainer').style.display = 'none';
    document.querySelector('.navigation').style.display = 'none';

    // Enviar resultados a Google Sheets
    await sendToGoogleSheets(score, categoryScores);
}

async function sendToGoogleSheets(puntajeFinal, categoryScores) {
    // Verificar si la URL está configurada
    if (GOOGLE_SHEETS_URL === 'TU_URL_DE_GOOGLE_APPS_SCRIPT_AQUI') {
        console.warn('Por favor configura la URL de Google Apps Script');
        showLocalStorageMessage();
        return;
    }

    // Mostrar indicador de carga
    document.getElementById('loadingIndicator').classList.add('active');

    // Calcular tiempo total
    const endTime = new Date();
    const tiempoMinutos = Math.round((endTime - startTime) / 60000);

    // Preparar datos detallados de respuestas
    const respuestasDetalladas = filteredQuestions.map((q, i) => ({
        pregunta: q.pregunta,
        respuestaSeleccionada: userAnswers[i] !== undefined ? q.opciones[userAnswers[i]] : 'Sin responder',
        respuestaCorrecta: q.opciones[q.respuesta_correcta],
        esCorrecta: userAnswers[i] === q.respuesta_correcta,
        categoria: q.subcategoria
    }));

    // Datos a enviar
    const datos = {
        timestamp: new Date().toISOString(),
        nombre: userData.nombre,
        correo: userData.correo,
        puntajeTotal: puntajeFinal,
        tiempoMinutos: tiempoMinutos,
        totalPreguntas: filteredQuestions.length,
        preguntasCorrectas: userAnswers.filter((a, i) => a === filteredQuestions[i].respuesta_correcta).length,
        filtroAplicado: currentFilter,

        // Puntajes por categoría
        scopeManagement: categoryScores['Scope Management'] || {correct: 0, total: 0},
        timeManagement: categoryScores['Time Management'] || {correct: 0, total: 0},
        costManagement: categoryScores['Cost Management'] || {correct: 0, total: 0},
        qualityManagement: categoryScores['Quality Management'] || {correct: 0, total: 0},
        riskManagement: categoryScores['Risk Management'] || {correct: 0, total: 0},
        hrManagement: categoryScores['Human Resources Management'] || {correct: 0, total: 0},
        communicationsManagement: categoryScores['Communications Management'] || {correct: 0, total: 0},
        procurementManagement: categoryScores['Procurement Management'] || {correct: 0, total: 0},

        // Respuestas detalladas (como JSON string)
        respuestasDetalladas: JSON.stringify(respuestasDetalladas)
    };

    try {
        const response = await fetch(GOOGLE_SHEETS_URL, {
            method: 'POST',
            mode: 'no-cors', // Importante para Google Apps Script
            headers: {
                'Content-Type': 'text/plain',
            },
            body: JSON.stringify(datos)
        });

        // Con no-cors no podemos leer la respuesta, pero asumimos éxito
        console.log('Datos enviados a Google Sheets');

        // Ocultar loading y mostrar éxito
        document.getElementById('loadingIndicator').classList.remove('active');
        document.getElementById('successMessage').classList.add('show');

        // Ocultar mensaje después de 5 segundos
        setTimeout(() => {
            document.getElementById('successMessage').classList.remove('show');
        }, 5000);

    } catch (error) {
        console.error('Error enviando datos:', error);

        // Guardar en localStorage como backup
        saveToLocalStorage(datos);

        // Ocultar loading y mostrar error
        document.getElementById('loadingIndicator').classList.remove('active');
        document.getElementById('errorMessage').classList.add('show');

        // Ocultar mensaje después de 5 segundos
        setTimeout(() => {
            document.getElementById('errorMessage').classList.remove('show');
        }, 5000);
    }
}

function saveToLocalStorage(datos) {
    const evaluacionesPendientes = JSON.parse(localStorage.getItem('evaluacionesPendientes') || '[]');
    evaluacionesPendientes.push(datos);
    localStorage.setItem('evaluacionesPendientes', JSON.stringify(evaluacionesPendientes));
    console.log('Datos guardados localmente para reintento posterior');
}

function showLocalStorageMessage() {
    const datos = {
        timestamp: new Date().toISOString(),
        nombre: userData.nombre,
        correo: userData.correo,
        puntajeTotal: userAnswers.filter((a, i) => a === filteredQuestions[i].respuesta_correcta).length,
        respuestas: userAnswers,
        preguntas: filteredQuestions.map(q => q.pregunta)
    };

    saveToLocalStorage(datos);

    document.getElementById('errorMessage').innerHTML = `
        ⚠️ La URL de Google Sheets no está configurada.
        Los datos se guardaron localmente.
        <br>Para configurar Google Sheets, sigue las instrucciones en el código.
    `;
    document.getElementById('errorMessage').classList.add('show');
}

function reviewAnswers() {
    reviewMode = true;
    currentQuestion = 0;
    document.getElementById('results').classList.remove('show');
    document.getElementById('questionContainer').style.display = 'block';
    document.querySelector('.navigation').style.display = 'flex';
    renderQuestion();
    updateProgress();
}

function restartQuiz() {
    // Resetear todas las variables
    currentQuestion = 0;
    userAnswers = [];
    reviewMode = false;
    userData = {};
    startTime = null;

    // Ocultar resultados y mostrar formulario de registro
    document.getElementById('results').classList.remove('show');
    document.getElementById('questionContainer').style.display = 'block';
    document.querySelector('.navigation').style.display = 'flex';
    document.getElementById('quizWrapper').classList.remove('active');
    document.getElementById('registrationForm').style.display = 'block';

    // Limpiar campos del formulario
    document.getElementById('userName').value = '';
    document.getElementById('userEmail').value = '';
}

// ============================================
// REINTENTO DE ENVÍO DE DATOS PENDIENTES
// ============================================

// Intentar enviar evaluaciones pendientes cuando se carga la página
window.addEventListener('load', async () => {
    const evaluacionesPendientes = JSON.parse(localStorage.getItem('evaluacionesPendientes') || '[]');

    if (evaluacionesPendientes.length > 0 && GOOGLE_SHEETS_URL !== 'TU_URL_DE_GOOGLE_APPS_SCRIPT_AQUI') {
        console.log(`Intentando enviar ${evaluacionesPendientes.length} evaluaciones pendientes...`);

        for (let i = 0; i < evaluacionesPendientes.length; i++) {
            try {
                await fetch(GOOGLE_SHEETS_URL, {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: {
                        'Content-Type': 'text/plain',
                    },
                    body: JSON.stringify(evaluacionesPendientes[i])
                });

                console.log(`Evaluación pendiente ${i + 1} enviada exitosamente`);
            } catch (error) {
                console.error(`Error enviando evaluación pendiente ${i + 1}:`, error);
            }
        }

        // Limpiar las evaluaciones pendientes después de intentar enviarlas
        localStorage.setItem('evaluacionesPendientes', '[]');
    }
});
