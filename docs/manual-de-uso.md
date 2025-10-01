# Manual de Uso - Aplicación de Evaluación de Gestión de Proyectos

## Descripción General

La Aplicación de Evaluación de Gestión de Proyectos es una herramienta web interactiva que permite evaluar las competencias en gestión de proyectos a través de un cuestionario de 80 preguntas organizadas por categorías.

## Estructura de Archivos

La aplicación está separada en los siguientes archivos:

- **index.html**: Estructura HTML principal de la aplicación
- **styles.css**: Estilos CSS para la interfaz de usuario
- **script.js**: Lógica JavaScript de la aplicación
- **docs/**: Carpeta de documentación

## Funcionalidades Principales

### 1. Registro de Usuario
- Formulario inicial para capturar información del evaluado
- Campos: Nombre, Apellido, Email, Teléfono, Empresa, Cargo

### 2. Sistema de Evaluación
- **80 preguntas** organizadas en categorías:
  - Iniciación del Proyecto
  - Planificación del Proyecto
  - Ejecución del Proyecto
  - Monitoreo y Control
  - Cierre del Proyecto
  - Gestión de la Integración
  - Gestión del Alcance
  - Gestión del Cronograma
  - Gestión de Costos
  - Gestión de la Calidad
  - Gestión de Recursos
  - Gestión de las Comunicaciones
  - Gestión de Riesgos
  - Gestión de Adquisiciones
  - Gestión de Interesados
  - Liderazgo y Habilidades Interpersonales

### 3. Navegación y Filtros
- **Navegación por preguntas**: Botones "Anterior" y "Siguiente"
- **Filtro por categorías**: Permite mostrar solo preguntas de una categoría específica
- **Barra de progreso**: Muestra el avance en tiempo real
- **Estadísticas**: Contador de preguntas respondidas y pendientes

### 4. Sistema de Resultados
- **Puntuación total**: Cálculo automático del puntaje obtenido
- **Resultados por categoría**: Desglose detallado por área de conocimiento
- **Nivel de competencia**: Clasificación basada en el puntaje:
  - Excelente (90-100%)
  - Muy Bueno (80-89%)
  - Bueno (70-79%)
  - Regular (60-69%)
  - Necesita Mejorar (<60%)

### 5. Integración con Google Sheets
- **Envío automático**: Los resultados se envían a Google Sheets
- **Almacenamiento local**: Respaldo local en caso de problemas de conectividad
- **Reintento automático**: Sistema para enviar evaluaciones pendientes

### 6. Funciones Adicionales
- **Revisión de respuestas**: Posibilidad de revisar todas las respuestas antes de finalizar
- **Reinicio de evaluación**: Opción para comenzar una nueva evaluación
- **Almacenamiento local**: Persistencia de datos en el navegador

## Cómo Usar la Aplicación

### Paso 1: Iniciar la Aplicación
1. Abrir `index.html` en un navegador web
2. Completar el formulario de registro con la información personal

### Paso 2: Realizar la Evaluación
1. Hacer clic en "Comenzar Evaluación"
2. Responder las preguntas seleccionando la opción más apropiada
3. Usar los botones de navegación para moverse entre preguntas
4. Opcional: Usar filtros de categoría para enfocarse en áreas específicas

### Paso 3: Revisar y Finalizar
1. Revisar el progreso en la barra superior
2. Opcional: Usar "Revisar Respuestas" para verificar las selecciones
3. Hacer clic en "Finalizar Evaluación" cuando todas las preguntas estén respondidas

### Paso 4: Ver Resultados
1. Revisar la puntuación total y por categorías
2. Analizar las áreas de fortaleza y oportunidades de mejora
3. Los resultados se guardan automáticamente

## Configuración Técnica

### Requisitos del Sistema
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Conexión a internet (para integración con Google Sheets)
- JavaScript habilitado

### Configuración de Google Sheets
La aplicación está configurada para enviar datos a Google Sheets a través de Google Apps Script. La URL está definida en `script.js`:

```javascript
const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbw54DLF2TEbAwyFezBfwvQgMIkZ2RGHpWwC7C_xHXoBq8FNM7xkF_DGP0l_Ujz0uf51zw/exec';
```

### Servidor Local
Para ejecutar la aplicación localmente:
```bash
python3 -m http.server 8000
```
Luego acceder a `http://localhost:8000`

## Solución de Problemas

### Error de Conectividad
- Si hay problemas con Google Sheets, los datos se guardan localmente
- La aplicación intentará enviar los datos pendientes automáticamente

### Problemas de Navegación
- Verificar que JavaScript esté habilitado
- Actualizar la página si hay comportamientos inesperados

### Pérdida de Datos
- Los datos se guardan automáticamente en el almacenamiento local del navegador
- No cerrar la pestaña hasta completar la evaluación

## Mantenimiento y Actualizaciones

### Modificación de Preguntas
Las preguntas están definidas en el array `questions` en `script.js`. Para agregar o modificar preguntas:

1. Localizar el array `questions` en `script.js`
2. Seguir el formato existente para nuevas preguntas
3. Actualizar este manual si se agregan nuevas categorías

### Actualización de Estilos
Los estilos están centralizados en `styles.css`. Modificar este archivo para cambios visuales.

### Cambios en la Funcionalidad
La lógica principal está en `script.js`. Cualquier modificación funcional debe realizarse en este archivo.

---

**Versión**: 1.0  
**Última actualización**: Enero 2025  
**Desarrollado para**: Evaluación de Competencias en Gestión de Proyectos