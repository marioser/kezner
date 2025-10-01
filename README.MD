# Sistema de Evaluación de Gestión de Proyectos PMBOK

## 📋 Descripción General

Sistema web de evaluación interactivo diseñado para evaluar conocimientos en gestión de proyectos basado en los estándares del PMBOK. La aplicación permite a los usuarios completar una evaluación de 80 preguntas distribuidas en 8 áreas de conocimiento, con almacenamiento automático de resultados en Google Sheets.

## 🎯 Características Principales

- **Evaluación completa**: 80 preguntas de opción múltiple
- **8 áreas de conocimiento PMBOK**:
  - Scope Management (Gestión del Alcance)
  - Time Management (Gestión del Tiempo)
  - Cost Management (Gestión de Costos)
  - Quality Management (Gestión de Calidad)
  - Risk Management (Gestión de Riesgos)
  - Human Resources Management (Gestión de RRHH)
  - Communications Management (Gestión de Comunicaciones)
  - Procurement Management (Gestión de Adquisiciones)
- **Filtrado por categorías**: Posibilidad de evaluar áreas específicas
- **Registro de usuarios**: Captura nombre y correo antes de iniciar
- **Calificación automática**: Resultados instantáneos con desglose por categoría
- **Modo de revisión**: Permite revisar respuestas correctas e incorrectas
- **Almacenamiento en Google Sheets**: Sin necesidad de backend tradicional
- **Backup local**: Almacenamiento en localStorage si falla el envío

## 🏗️ Arquitectura Técnica

### Frontend (Cliente)
```
├── index.html          # Archivo único con toda la aplicación
├── CSS inline          # Estilos integrados en el HTML
├── JavaScript vanilla  # Sin dependencias externas
└── LocalStorage API    # Backup de datos
```

### Backend (Google Apps Script)
```
├── doPost()           # Recepción de datos del formulario
├── setupHeaders()     # Configuración inicial de la hoja
├── formatCategoryScore() # Formateo de puntuaciones
└── createDashboard()  # Dashboard opcional de estadísticas
```

### Flujo de Datos
```
Usuario → HTML Form → JavaScript → Google Apps Script → Google Sheets
                          ↓
                    LocalStorage (backup)
```

## 🎨 Decisiones de Diseño y Estilos

### Sistema de Diseño: shadcn/ui Inspired

La interfaz utiliza un sistema de diseño minimalista y profesional inspirado en shadcn/ui, caracterizado por:

#### Paleta de Colores (CSS Variables)
```css
--background: #ffffff        /* Fondo principal */
--foreground: #0a0a0a        /* Texto principal */
--primary: #18181b           /* Color primario (negro suave) */
--secondary: #f4f4f5         /* Grises neutros */
--muted: #f4f4f5            /* Elementos secundarios */
--border: #e4e4e7           /* Bordes sutiles */
--destructive: #ef4444      /* Errores */
--success: #22c55e          /* Éxito */
```

#### Principios de Diseño

1. **Minimalismo Funcional**
   - Interfaz limpia sin elementos decorativos innecesarios
   - Enfoque en la legibilidad y usabilidad
   - Espaciado generoso para mejorar la experiencia

2. **Jerarquía Visual Clara**
   - Uso consistente de tamaños de fuente
   - Peso de fuente para establecer importancia
   - Contraste adecuado para accesibilidad (WCAG AA)

3. **Componentes Modulares**
   - Cards con bordes sutiles (1px solid)
   - Border radius consistente (0.5rem)
   - Sombras mínimas o inexistentes

4. **Microinteracciones**
   - Transiciones suaves (0.2s - 0.3s)
   - Estados hover discretos
   - Feedback visual inmediato

5. **Tipografía Sistema**
   ```css
   font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 
                'Helvetica Neue', Arial, sans-serif;
   ```
   - Fuente nativa del sistema para mejor rendimiento
   - Sin fuentes web externas

#### Componentes UI Principales

- **Botones**: Diseño plano con estados bien definidos
- **Cards**: Fondo blanco con borde gris claro
- **Inputs**: Bordes sutiles con focus visible
- **Badges**: Pequeños, informativos, no intrusivos
- **Progress Bar**: Indicador visual minimalista

### Responsive Design

- **Mobile First**: Optimizado para dispositivos móviles
- **Breakpoint único**: 640px para simplificar
- **Grid flexible**: Adaptación automática de columnas

## 📊 Datos Almacenados

### En Google Sheets
| Campo | Descripción | Formato |
|-------|-------------|---------|
| Fecha | Fecha de evaluación | DD/MM/YYYY |
| Hora | Hora de finalización | HH:MM:SS |
| Nombre | Nombre completo | Texto |
| Correo | Email del usuario | Email |
| Puntaje Total | Porcentaje obtenido | XX% |
| Preguntas Correctas | Ratio de aciertos | XX/80 |
| Tiempo | Duración en minutos | XX min |
| Filtro Aplicado | Categoría evaluada | Texto |
| [8 Categorías] | Desglose por área | X/Y (Z%) |
| Respuestas JSON | Detalle completo | JSON |

### En LocalStorage (Backup)
```javascript
{
  timestamp: ISO 8601,
  userData: {nombre, correo},
  scores: {total, byCategory},
  answers: Array,
  timeSpent: minutes
}
```

## 🚀 Instalación y Configuración

### Requisitos Previos
- Cuenta de Google
- Navegador web moderno
- Editor de texto

### Pasos de Instalación

1. **Configurar Google Sheets**
   - Crear nueva hoja en Google Sheets
   - Abrir Apps Script (Extensiones → Apps Script)
   - Pegar código del archivo `google-apps-script.js`
   - Ejecutar `setupHeaders()`
   - Implementar como aplicación web

2. **Configurar Frontend**
   - Editar `index.html`
   - Reemplazar `GOOGLE_SHEETS_URL` con la URL de tu script
   - Guardar archivo

3. **Desplegar**
   - Abrir `index.html` en navegador
   - O subir a cualquier servidor web estático

## 🔒 Seguridad

- **Sin credenciales expuestas**: No hay API keys en el frontend
- **Validación de datos**: Verificación de email y campos requeridos
- **CORS manejado**: Uso de `mode: 'no-cors'` para Google Apps Script
- **Permisos de Google**: Solo el propietario puede ver los datos
- **Backup automático**: LocalStorage como respaldo

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Variables CSS, Flexbox, Grid
- **JavaScript ES6+**: Async/await, Arrow functions, Template literals
- **Google Apps Script**: JavaScript en el servidor de Google
- **Google Sheets API**: Almacenamiento de datos
- **LocalStorage API**: Persistencia local

## 📈 Rendimiento

- **Carga inicial**: < 100KB (sin dependencias externas)
- **Sin frameworks**: JavaScript vanilla para máximo rendimiento
- **CSS inline**: Evita solicitudes HTTP adicionales
- **Lazy loading**: Preguntas se cargan según necesidad

## 🔄 Flujo de Usuario

1. Usuario accede a la aplicación
2. Completa formulario de registro (nombre y correo)
3. Selecciona categoría (opcional) o evalúa todas
4. Responde las preguntas navegando con Anterior/Siguiente
5. Finaliza la evaluación
6. Ve resultados inmediatos con desglose
7. Datos se envían automáticamente a Google Sheets
8. Opción de revisar respuestas o iniciar nueva evaluación

## 🐛 Solución de Problemas

### Datos no aparecen en Google Sheets
- Verificar URL del script está correcta
- Confirmar permisos de la aplicación web
- Revisar consola del navegador para errores

### Error CORS
- Asegurar uso de `mode: 'no-cors'` en fetch
- Verificar configuración de acceso "Cualquier persona"

### LocalStorage lleno
- Limpiar datos antiguos periódicamente
- Implementar límite de reintentos

## 📝 Mantenimiento

### Actualizar preguntas
1. Editar array `questions` en el HTML
2. Mantener estructura: pregunta, opciones, respuesta_correcta, subcategoria

### Modificar categorías
1. Actualizar filtros en HTML
2. Ajustar encabezados en Google Sheets
3. Modificar mapeo en Apps Script

### Cambiar estilos
1. Modificar variables CSS en `:root`
2. Mantener consistencia con sistema de diseño

## 🤝 Contribuciones

Para contribuir al proyecto:
1. Identificar mejoras o errores
2. Mantener el estilo de código existente
3. Probar cambios antes de implementar
4. Documentar nuevas características

## 📄 Licencia

Este proyecto es de código abierto con fines educativos. Úsalo libremente para evaluaciones internas o educativas.

## 👥 Créditos

- Diseño inspirado en shadcn/ui
- Preguntas basadas en estándares PMBOK
- Desarrollado como herramienta de evaluación educativa

## 📞 Soporte

Para problemas o consultas:
- Revisar documentación incluida en el código
- Verificar configuración de Google Apps Script
- Consultar logs en Google Apps Script Editor

---

**Versión**: 1.0.0  
**Última actualización**: Noviembre 2024  
**Compatibilidad**: Navegadores modernos (Chrome, Firefox, Safari, Edge)