// ============================================
// CONFIGURACIÓN DE GOOGLE SHEETS
// ============================================

const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbw54DLF2TEbAwyFezBfwvQgMIkZ2RGHpWwC7C_xHXoBq8FNM7xkF_DGP0l_Ujz0uf51zw/exec';

// ============================================
// VARIABLES GLOBALES
// ============================================

let currentQuestion = 0;
let userAnswers = [];
let reviewMode = false;
let startTime = null;
let userData = {};

// ============================================
// FUNCIONES DE INICIO Y REGISTRO
// ============================================

function startAssessment() {
    const userName = document.getElementById('userName').value.trim();
    const userEmail = document.getElementById('userEmail').value.trim();
    const userCompany = document.getElementById('userCompany').value.trim();

    if (!userName || !userEmail || !userCompany) {
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
        correo: userEmail,
        empresa: userCompany
    };

    // Mostrar datos del usuario en el assessment
    document.getElementById('displayUserName').textContent = userName;
    document.getElementById('displayUserEmail').textContent = userEmail;
    document.getElementById('displayUserCompany').textContent = userCompany;

    // Ocultar formulario de registro y mostrar assessment
    document.getElementById('registrationForm').style.display = 'none';
    document.getElementById('assessmentWrapper').classList.add('active');

    // Inicializar tiempo de inicio
    startTime = new Date();

    // Inicializar assessment
    initAssessment();
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// ============================================
// FUNCIONES DEL ASSESSMENT
// ============================================

function initAssessment() {
    renderQuestion();
    updateProgress();
    updateStats();
}

function renderQuestion() {
    const container = document.getElementById('questionContainer');
    const q = questions[currentQuestion];

    container.innerHTML = `
        <div class="question-card active">
            <div class="question-header">
                <span class="question-number">Pregunta ${currentQuestion + 1}</span>
                <span class="category-badge">${q.subcategoria}</span>
            </div>
            <div class="question-text">${q.pregunta}</div>
            <div class="likert-scale">
                ${likertScale.map((option) => `
                    <div class="likert-option ${userAnswers[currentQuestion] === option.value ? 'selected' : ''}"
                         onclick="selectAnswer(${option.value})">
                        <div class="likert-value ${option.value < 0 ? 'negative' : option.value > 0 ? 'positive' : 'neutral'}">${option.value > 0 ? '+' : ''}${option.value}</div>
                        <div class="likert-label">${option.label}</div>
                    </div>
                `).join('')}
            </div>
            ${userAnswers[currentQuestion] !== undefined ? `
                <div class="selected-answer">
                    Has seleccionado: <strong>${userAnswers[currentQuestion] > 0 ? '+' : ''}${userAnswers[currentQuestion]}</strong>
                </div>
            ` : ''}
        </div>
    `;

    updateNavigation();
}

function selectAnswer(value) {
    if (!reviewMode) {
        userAnswers[currentQuestion] = value;
        updateStats();
        renderQuestion();
    }
}

function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
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

    if (currentQuestion === questions.length - 1 && !reviewMode) {
        nextBtn.textContent = 'Finalizar';
    } else if (currentQuestion === questions.length - 1 && reviewMode) {
        nextBtn.disabled = true;
    } else {
        nextBtn.textContent = 'Siguiente';
        nextBtn.disabled = false;
    }

    indicator.textContent = `Pregunta ${currentQuestion + 1} de ${questions.length}`;
}

function updateProgress() {
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    document.getElementById('progressFill').style.width = `${progress}%`;
}

function updateStats() {
    const answered = userAnswers.filter(a => a !== undefined).length;
    const progress = Math.round((answered / questions.length) * 100);

    document.getElementById('totalQuestions').textContent = questions.length;
    document.getElementById('answeredCount').textContent = answered;
    document.getElementById('progressPercent').textContent = `${progress}%`;
}

// ============================================
// FUNCIONES DE RESULTADOS Y GOOGLE SHEETS
// ============================================

function calculateScore() {
    const totalScore = userAnswers.reduce((sum, answer) => sum + (answer || 0), 0);
    const maxPossibleScore = questions.length * 3; // +3 por cada pregunta
    const minPossibleScore = questions.length * -3; // -3 por cada pregunta

    return {
        total: totalScore,
        max: maxPossibleScore,
        min: minPossibleScore,
        average: totalScore / questions.length
    };
}

function getMaturityLevel(score) {
    const avgScore = score.average;

    if (avgScore >= 2.5) {
        return {
            nivel: "Nivel 2 - Alto",
            descripcion: "Su organización demuestra un alto nivel de madurez en procesos comunes. Los procesos están bien establecidos, documentados y se utilizan consistentemente en toda la organización."
        };
    } else if (avgScore >= 1.5) {
        return {
            nivel: "Nivel 2 - Medio-Alto",
            descripcion: "Su organización muestra buenos indicadores de madurez en procesos comunes. La mayoría de los procesos están definidos y se utilizan regularmente, aunque hay áreas de mejora."
        };
    } else if (avgScore >= 0.5) {
        return {
            nivel: "Nivel 2 - Medio",
            descripcion: "Su organización está en desarrollo de procesos comunes. Algunos procesos están establecidos, pero la consistencia y estandarización pueden mejorar significativamente."
        };
    } else if (avgScore >= -0.5) {
        return {
            nivel: "Nivel 2 - Medio-Bajo",
            descripcion: "Su organización muestra un nivel básico de procesos comunes. Se requiere trabajo considerable para establecer y estandarizar procesos en toda la organización."
        };
    } else {
        return {
            nivel: "Nivel 2 - Bajo",
            descripcion: "Su organización necesita desarrollar procesos comunes de gestión de proyectos. Se recomienda iniciar con la definición y documentación de procesos básicos."
        };
    }
}

async function showResults() {
    const results = document.getElementById('results');
    const score = calculateScore();
    const maturityLevel = getMaturityLevel(score);

    // Update score display
    document.getElementById('finalScore').textContent = score.total;

    // Update maturity level
    document.getElementById('maturityLevel').innerHTML = `
        <h3>${maturityLevel.nivel}</h3>
        <p>${maturityLevel.descripcion}</p>
    `;

    // Display detailed analysis
    const categoryResultsHTML = `
        <div class="category-item">
            <span class="category-name">Puntuación Total</span>
            <span class="category-score">${score.total} puntos</span>
        </div>
        <div class="category-item">
            <span class="category-name">Puntuación Promedio</span>
            <span class="category-score">${score.average.toFixed(2)}</span>
        </div>
        <div class="category-item">
            <span class="category-name">Respuestas Positivas (+1 a +3)</span>
            <span class="category-score">${userAnswers.filter(a => a > 0).length}</span>
        </div>
        <div class="category-item">
            <span class="category-name">Respuestas Neutrales (0)</span>
            <span class="category-score">${userAnswers.filter(a => a === 0).length}</span>
        </div>
        <div class="category-item">
            <span class="category-name">Respuestas Negativas (-1 a -3)</span>
            <span class="category-score">${userAnswers.filter(a => a < 0).length}</span>
        </div>
    `;

    document.getElementById('categoryResults').innerHTML = categoryResultsHTML;

    results.classList.add('show');

    // Hide question container
    document.getElementById('questionContainer').style.display = 'none';
    document.querySelector('.navigation').style.display = 'none';

    // Enviar resultados a Google Sheets
    await sendToGoogleSheets(score, maturityLevel);
}

async function sendToGoogleSheets(score, maturityLevel) {
    // Mostrar indicador de carga
    document.getElementById('loadingIndicator').classList.add('active');

    // Calcular tiempo total
    const endTime = new Date();
    const tiempoMinutos = Math.round((endTime - startTime) / 60000);

    // Preparar datos detallados de respuestas
    const respuestasDetalladas = questions.map((q, i) => ({
        id: q.id,
        pregunta: q.pregunta,
        respuesta: userAnswers[i] !== undefined ? userAnswers[i] : 'Sin responder',
        categoria: q.subcategoria
    }));

    // Datos a enviar
    const datos = {
        tipo: 'nivel2',
        timestamp: new Date().toISOString(),
        nombre: userData.nombre,
        correo: userData.correo,
        empresa: userData.empresa,

        // Puntuaciones
        puntajeTotal: score.total,
        puntajePromedio: score.average.toFixed(2),
        puntajeMaximo: score.max,
        puntajeMinimo: score.min,

        // Nivel de madurez
        nivelMadurez: maturityLevel.nivel,
        descripcionNivel: maturityLevel.descripcion,

        // Estadísticas
        tiempoMinutos: tiempoMinutos,
        totalPreguntas: questions.length,
        respuestasPositivas: userAnswers.filter(a => a > 0).length,
        respuestasNeutrales: userAnswers.filter(a => a === 0).length,
        respuestasNegativas: userAnswers.filter(a => a < 0).length,

        // Respuestas detalladas (como JSON string)
        respuestasDetalladas: JSON.stringify(respuestasDetalladas)
    };

    try {
        const response = await fetch(GOOGLE_SHEETS_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'text/plain',
            },
            body: JSON.stringify(datos)
        });

        console.log('Datos enviados a Google Sheets');

        // Ocultar loading y mostrar éxito
        document.getElementById('loadingIndicator').classList.remove('active');
        document.getElementById('successMessage').classList.add('show');

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

        setTimeout(() => {
            document.getElementById('errorMessage').classList.remove('show');
        }, 5000);
    }
}

function saveToLocalStorage(datos) {
    const evaluacionesPendientes = JSON.parse(localStorage.getItem('evaluacionesNivel2Pendientes') || '[]');
    evaluacionesPendientes.push(datos);
    localStorage.setItem('evaluacionesNivel2Pendientes', JSON.stringify(evaluacionesPendientes));
    console.log('Datos guardados localmente para reintento posterior');
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

function restartAssessment() {
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
    document.getElementById('assessmentWrapper').classList.remove('active');
    document.getElementById('registrationForm').style.display = 'block';

    // Limpiar campos del formulario
    document.getElementById('userName').value = '';
    document.getElementById('userEmail').value = '';
    document.getElementById('userCompany').value = '';
}

// ============================================
// REINTENTO DE ENVÍO DE DATOS PENDIENTES
// ============================================

window.addEventListener('load', async () => {
    const evaluacionesPendientes = JSON.parse(localStorage.getItem('evaluacionesNivel2Pendientes') || '[]');

    if (evaluacionesPendientes.length > 0) {
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

        localStorage.setItem('evaluacionesNivel2Pendientes', '[]');
    }
});
