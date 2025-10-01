# Sistema de Evaluación de Gestión de Proyectos

Sistema completo de evaluación web para medir conocimientos individuales y madurez organizacional en gestión de proyectos.

## 📋 Características

### Nivel 1: Evaluación de Conocimientos PMBOK
- 80 preguntas tipo test basadas en PMBOK
- 8 áreas de conocimiento
- Sistema de respuestas correctas e incorrectas
- Resultados detallados por categoría
- Filtrado por área de conocimiento

### Nivel 2: Evaluación de Madurez Organizacional
- 20 preguntas de evaluación
- Escala Likert (-3 a +3)
- Evaluación de procesos comunes organizacionales
- Cálculo automático de nivel de madurez
- Análisis detallado de respuestas

## 🗂️ Estructura del Proyecto

```
kezner/
├── index.html                 # Página principal de selección
├── quiz-nivel1.html          # Evaluación Nivel 1 (PMBOK)
├── nivel2.html               # Evaluación Nivel 2 (Madurez)
├── questions.js              # Preguntas Nivel 1
├── app.js                    # Lógica Nivel 1
├── questions-nivel2.js       # Preguntas Nivel 2
├── app-nivel2.js             # Lógica Nivel 2
├── styles.css                # Estilos CSS
├── codigo.gs                 # Google Apps Script
├── preguntas.json            # Preguntas en formato JSON
└── docs/
    └── manual-de-uso.md      # Manual de usuario
```

## 🚀 Uso

### Página Principal
1. Abrir `index.html` en un navegador
2. Seleccionar la evaluación deseada:
   - **Nivel 1**: Conocimientos individuales
   - **Nivel 2**: Madurez organizacional

### Flujo Recomendado
1. Completar Nivel 1 (Conocimientos PMBOK)
2. Al finalizar, hacer clic en "Continuar a Nivel 2"
3. Los datos del usuario se autocompletarán
4. Completar Nivel 2 (Madurez Organizacional)
5. Ver resultados completos

### Características Adicionales
- ✅ Navegación entre preguntas (anterior/siguiente)
- ✅ Revisar respuestas al finalizar
- ✅ Volver al inicio desde cualquier nivel
- ✅ Datos guardados en sessionStorage para continuidad
- ✅ Backup local si falla la conexión a Google Sheets

## 🔧 Configuración de Google Sheets

### 1. Crear el Script
1. Ir a [Google Apps Script](https://script.google.com/)
2. Crear nuevo proyecto
3. Copiar el contenido de `codigo.gs`
4. Guardar el proyecto

### 2. Configurar el Spreadsheet
1. Crear una nueva hoja de cálculo en Google Sheets
2. En Apps Script: `Archivo > Configuración del proyecto`
3. Vincular al spreadsheet

### 3. Desplegar como Web App
1. En Apps Script: `Desplegar > Nueva implementación`
2. Tipo: Aplicación web
3. Ejecutar como: Tu cuenta
4. Acceso: Cualquier persona
5. Copiar la URL de despliegue

### 4. Actualizar las URLs en el código
Actualizar `GOOGLE_SHEETS_URL` en:
- `app.js` (línea 5)
- `app-nivel2.js` (línea 5)

```javascript
const GOOGLE_SHEETS_URL = 'TU_URL_DE_GOOGLE_APPS_SCRIPT_AQUI';
```

## 📊 Estructura de Datos en Google Sheets

### Hoja "Nivel 1 - Quiz PMBOK"
- Timestamp, Nombre, Correo
- Puntaje Total, Tiempo, Preguntas Correctas
- Puntajes por categoría (8 áreas)
- Respuestas detalladas (JSON)

### Hoja "Nivel 2 - Madurez"
- Timestamp, Nombre, Correo, Empresa
- Puntajes (Total, Promedio, Máximo, Mínimo)
- Nivel de Madurez y Descripción
- Estadísticas de respuestas
- Respuestas detalladas (JSON)

## 🎨 Personalización

### Colores
Editar variables CSS en `styles.css`:
```css
:root {
    --primary: #18181b;
    --success: #22c55e;
    --border: #e4e4e7;
    /* ... más variables */
}
```

### Preguntas
- **Nivel 1**: Editar `questions.js`
- **Nivel 2**: Editar `questions-nivel2.js`

## 📱 Responsive Design

El sistema está optimizado para:
- ✅ Desktop (>1024px)
- ✅ Tablet (768px - 1024px)
- ✅ Mobile (<768px)

## 🔒 Seguridad y Privacidad

- Los datos se envían a Google Sheets mediante Apps Script
- Modo `no-cors` para compatibilidad
- Backup local en localStorage si falla el envío
- Reintento automático de envíos pendientes

## 🐛 Solución de Problemas

### Los datos no se guardan en Google Sheets
1. Verificar que la URL de Apps Script esté correcta
2. Verificar que el script esté desplegado como Web App
3. Verificar permisos de acceso en el despliegue

### Los datos del Nivel 1 no se autocompletan en Nivel 2
1. Verificar que el navegador permita sessionStorage
2. No cerrar el navegador entre niveles
3. Usar el botón "Continuar a Nivel 2"

## 📄 Licencia

MIT License - Ver archivo LICENSE para más detalles

## 👥 Contribuir

Las contribuciones son bienvenidas. Por favor:
1. Fork el repositorio
2. Crear una rama para tu feature
3. Commit tus cambios
4. Push a la rama
5. Crear un Pull Request
