// ============================================
// Google Apps Script - Recepcion de Datos
// ============================================
// Este script recibe datos de ambos cuestionarios:
// - Nivel 1: Quiz con respuestas correctas
// - Nivel 2: Assessment de madurez organizacional

function doPost(e) {
  try {
    // Obtener datos del POST
    const datos = JSON.parse(e.postData.contents);

    // Identificar el tipo de evaluacion
    const tipo = datos.tipo || 'nivel1'; // Por defecto nivel1 para retrocompatibilidad

    // Obtener la hoja de calculo activa
    const ss = SpreadsheetApp.getActiveSpreadsheet();

    if (tipo === 'nivel2') {
      // Procesamiento para Nivel 2 - Assessment de Madurez
      procesarNivel2(ss, datos);
    } else {
      // Procesamiento para Nivel 1 - Quiz PMBOK
      procesarNivel1(ss, datos);
    }

    return ContentService.createTextOutput(JSON.stringify({
      result: 'success',
      message: 'Datos guardados exitosamente'
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    Logger.log('Error: ' + error.toString());
    return ContentService.createTextOutput(JSON.stringify({
      result: 'error',
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

// ============================================
// Procesar Nivel 1 - Quiz PMBOK
// ============================================
function procesarNivel1(ss, datos) {
  // Obtener o crear la hoja para Nivel 1
  let sheet = ss.getSheetByName('Nivel 1 - Quiz PMBOK');
  if (!sheet) {
    sheet = ss.insertSheet('Nivel 1 - Quiz PMBOK');

    // Crear encabezados
    const headers = [
      'Timestamp',
      'Nombre',
      'Correo',
      'Puntaje Total (%)',
      'Tiempo (minutos)',
      'Total Preguntas',
      'Preguntas Correctas',
      'Filtro Aplicado',

      // Puntajes por categoria
      'Scope Management',
      'Time Management',
      'Cost Management',
      'Quality Management',
      'Risk Management',
      'HR Management',
      'Communications Management',
      'Procurement Management',

      // Respuestas detalladas (JSON)
      'Respuestas Detalladas'
    ];

    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold');

    // Ajustar ancho de columnas
    sheet.setColumnWidth(1, 150);  // Timestamp
    sheet.setColumnWidth(2, 200);  // Nombre
    sheet.setColumnWidth(3, 200);  // Correo
    sheet.setColumnWidth(17, 300); // Respuestas Detalladas
  }

  // Preparar datos de categorias
  const categorias = [
    formatearCategoria(datos.scopeManagement),
    formatearCategoria(datos.timeManagement),
    formatearCategoria(datos.costManagement),
    formatearCategoria(datos.qualityManagement),
    formatearCategoria(datos.riskManagement),
    formatearCategoria(datos.hrManagement),
    formatearCategoria(datos.communicationsManagement),
    formatearCategoria(datos.procurementManagement)
  ];

  // Preparar fila de datos
  const fila = [
    datos.timestamp,
    datos.nombre,
    datos.correo,
    datos.puntajeTotal,
    datos.tiempoMinutos,
    datos.totalPreguntas,
    datos.preguntasCorrectas,
    datos.filtroAplicado,
    ...categorias,
    datos.respuestasDetalladas
  ];

  // Agregar datos
  sheet.appendRow(fila);
}

// ============================================
// Procesar Nivel 2 - Assessment de Madurez
// ============================================
function procesarNivel2(ss, datos) {
  // Obtener o crear la hoja para Nivel 2
  let sheet = ss.getSheetByName('Nivel 2 - Madurez');
  if (!sheet) {
    sheet = ss.insertSheet('Nivel 2 - Madurez');

    // Crear encabezados
    const headers = [
      'Timestamp',
      'Nombre',
      'Correo',
      'Empresa',

      // Puntuaciones
      'Puntaje Total',
      'Puntaje Promedio',
      'Puntaje Maximo Posible',
      'Puntaje Minimo Posible',

      // Nivel de Madurez
      'Nivel de Madurez',
      'Descripcion',

      // Estadisticas
      'Tiempo (minutos)',
      'Total Preguntas',
      'Respuestas Positivas (+1 a +3)',
      'Respuestas Neutrales (0)',
      'Respuestas Negativas (-1 a -3)',

      // Respuestas detalladas (JSON)
      'Respuestas Detalladas'
    ];

    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold');

    // Ajustar ancho de columnas
    sheet.setColumnWidth(1, 150);  // Timestamp
    sheet.setColumnWidth(2, 200);  // Nombre
    sheet.setColumnWidth(3, 200);  // Correo
    sheet.setColumnWidth(4, 200);  // Empresa
    sheet.setColumnWidth(9, 200);  // Nivel de Madurez
    sheet.setColumnWidth(10, 400); // Descripcion
    sheet.setColumnWidth(16, 300); // Respuestas Detalladas
  }

  // Preparar fila de datos
  const fila = [
    datos.timestamp,
    datos.nombre,
    datos.correo,
    datos.empresa,
    datos.puntajeTotal,
    datos.puntajePromedio,
    datos.puntajeMaximo,
    datos.puntajeMinimo,
    datos.nivelMadurez,
    datos.descripcionNivel,
    datos.tiempoMinutos,
    datos.totalPreguntas,
    datos.respuestasPositivas,
    datos.respuestasNeutrales,
    datos.respuestasNegativas,
    datos.respuestasDetalladas
  ];

  // Agregar datos
  sheet.appendRow(fila);
}

// ============================================
// Funciones Auxiliares
// ============================================
function formatearCategoria(categoria) {
  if (!categoria) return '0/0';
  return categoria.correct + '/' + categoria.total;
}

// Funcion para manejar GET requests (opcional)
function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({
    result: 'success',
    message: 'Servicio funcionando correctamente'
  })).setMimeType(ContentService.MimeType.JSON);
}

// ============================================
// Funcion de Prueba (Opcional)
// ============================================
// Ejecuta esta funcion para verificar que el script tiene permisos
function testearConfiguracion() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  Logger.log('Spreadsheet ID: ' + ss.getId());
  Logger.log('Spreadsheet Name: ' + ss.getName());
  Logger.log('Configuracion correcta!');
  return 'OK';
}
