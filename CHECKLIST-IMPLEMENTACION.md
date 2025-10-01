# ✅ Checklist de Implementación Completa

Usa esta lista para verificar que todo está correctamente configurado.

## 📝 Antes de Comenzar

- [ ] Tengo una cuenta de Google
- [ ] Tengo acceso a Google Sheets
- [ ] Tengo acceso a Google Apps Script
- [ ] He descargado/clonado el proyecto completo
- [ ] Tengo un editor de código para modificar archivos

## 🔧 Paso 1: Configurar Google Apps Script

### Crear Google Sheet

- [ ] Abrí [Google Sheets](https://sheets.google.com)
- [ ] Creé una nueva hoja en blanco
- [ ] Le di un nombre descriptivo a la hoja
- [ ] **NO creé hojas internas manualmente** (el script las crea)

### Configurar Apps Script

- [ ] Abrí la hoja en Google Sheets
- [ ] Fui a: `Extensiones → Apps Script`
- [ ] Se abrió el editor de Apps Script en nueva pestaña
- [ ] Borré el código de ejemplo que viene por defecto

### Copiar el Código

- [ ] Abrí el archivo `codigo.gs` del proyecto
- [ ] Copié **TODO** el contenido del archivo
- [ ] Pegué en el editor de Apps Script
- [ ] Guardé el proyecto (Ctrl+S o Cmd+S)
- [ ] Di un nombre al proyecto (ej: "Sistema Evaluaciones PM")

### Desplegar como Web App

- [ ] Hice clic en `Implementar` (botón arriba a la derecha)
- [ ] Seleccioné `Nueva implementación`
- [ ] Hice clic en el engranaje ⚙️ junto a "Seleccionar tipo"
- [ ] Seleccioné `Aplicación web`

### Configurar Opcción de Despliegue

- [ ] En "Descripción" escribí algo descriptivo (opcional)
- [ ] En "Ejecutar como" seleccioné: `Yo (mi correo)`
- [ ] En "Quién tiene acceso" seleccioné: `Cualquier persona`
- [ ] **IMPORTANTE**: Debe ser "Cualquier persona" ⚠️

### Autorizar Permisos

- [ ] Hice clic en `Implementar`
- [ ] Apareció pantalla de autorización
- [ ] Hice clic en `Autorizar acceso`
- [ ] Seleccioné mi cuenta de Google
- [ ] Vi advertencia "Google no ha verificado esta aplicación"
- [ ] Hice clic en `Avanzado`
- [ ] Hice clic en `Ir a [nombre proyecto] (no seguro)`
- [ ] Hice clic en `Permitir`

### Copiar URL de Despliegue

- [ ] Apareció modal con la URL de implementación
- [ ] La URL termina en `/exec` (no en `/dev`)
- [ ] Copié la URL completa
- [ ] Guardé la URL en un lugar seguro (¡la necesitaré!)
- [ ] Hice clic en `Listo`

### Verificar Configuración

- [ ] En Apps Script, seleccioné función `doGet` en el dropdown
- [ ] Hice clic en `Ejecutar` (▶️)
- [ ] Se ejecutó sin errores
- [ ] Revisé los `Logs` - dice "Servicio funcionando correctamente"

## 💻 Paso 2: Actualizar Archivos del Proyecto

### Actualizar app.js (Nivel 1)

- [ ] Abrí el archivo `app.js` en mi editor
- [ ] Busqué la línea 5: `const GOOGLE_SHEETS_URL = '...'`
- [ ] Reemplacé la URL con mi URL copiada
- [ ] La URL termina en `/exec`
- [ ] Guardé el archivo

### Actualizar app-nivel2.js (Nivel 2)

- [ ] Abrí el archivo `app-nivel2.js` en mi editor
- [ ] Busqué la línea 5: `const GOOGLE_SHEETS_URL = '...'`
- [ ] Reemplacé con **LA MISMA URL** que en app.js
- [ ] La URL termina en `/exec`
- [ ] Guardé el archivo

### Verificar URLs

- [ ] Ambas URLs son **EXACTAMENTE iguales**
- [ ] Ambas URLs terminan en `/exec`
- [ ] No hay espacios al inicio o final
- [ ] Las URLs están entre comillas simples

## 🧪 Paso 3: Pruebas

### Prueba del Nivel 1

- [ ] Abrí `index.html` en mi navegador
- [ ] Hice clic en el card "Nivel 1"
- [ ] Completé el formulario de registro:
  - [ ] Nombre completo
  - [ ] Correo electrónico válido
- [ ] Hice clic en "Comenzar Evaluación"
- [ ] Se mostró la primera pregunta
- [ ] Respondí al menos 5 preguntas
- [ ] Hice clic en "Finalizar"
- [ ] Vi mensaje verde: "✅ Evaluación guardada exitosamente"
- [ ] **NO** vi mensaje de error rojo

### Verificar Datos en Google Sheet - Nivel 1

- [ ] Abrí mi Google Sheet
- [ ] Veo una nueva hoja llamada: `Nivel 1 - Quiz PMBOK`
- [ ] La fila 1 tiene encabezados en **negrita**
- [ ] La fila 1 tiene 17 columnas
- [ ] La fila 2 tiene mis datos de prueba
- [ ] Los datos se ven correctos (nombre, correo, puntaje)

### Prueba del Nivel 2

- [ ] Volví a `index.html`
- [ ] Hice clic en el card "Nivel 2"
- [ ] Completé el formulario de registro:
  - [ ] Nombre completo
  - [ ] Correo electrónico
  - [ ] Empresa/Organización
- [ ] Hice clic en "Comenzar Evaluación"
- [ ] Se mostró la primera pregunta con escala Likert (-3 a +3)
- [ ] Respondí al menos 5 preguntas
- [ ] Hice clic en "Finalizar"
- [ ] Vi mensaje verde: "✅ Evaluación guardada exitosamente"
- [ ] Vi el nivel de madurez calculado

### Verificar Datos en Google Sheet - Nivel 2

- [ ] Abrí mi Google Sheet
- [ ] Veo una nueva hoja llamada: `Nivel 2 - Madurez`
- [ ] La fila 1 tiene encabezados en **negrita**
- [ ] La fila 1 tiene 16 columnas
- [ ] La fila 2 tiene mis datos de prueba
- [ ] Los datos incluyen: puntaje, nivel de madurez, descripción

### Prueba del Flujo Completo

- [ ] Volví a `index.html`
- [ ] Hice clic en "Nivel 1"
- [ ] Completé una evaluación completa (todas las preguntas)
- [ ] En resultados, hice clic en "Continuar a Nivel 2"
- [ ] Se abrió Nivel 2 con mi nombre y correo **autocompletados**
- [ ] Vi mensaje de bienvenida verde
- [ ] Solo agregué el campo "Empresa"
- [ ] Completé la evaluación Nivel 2
- [ ] Ambas evaluaciones se guardaron en Google Sheets

## 🔍 Paso 4: Verificación Final

### Estructura de Google Sheets

- [ ] Mi Google Sheet tiene exactamente 2 hojas:
  - [ ] "Nivel 1 - Quiz PMBOK"
  - [ ] "Nivel 2 - Madurez"
- [ ] **NO** hay hojas llamadas "Sheet1", "Hoja 1", etc.
- [ ] Las hojas se crearon automáticamente (no las creé yo)

### Datos en Nivel 1

- [ ] Columna A: Timestamp (fecha y hora ISO)
- [ ] Columna B: Nombre (texto)
- [ ] Columna C: Correo (email válido)
- [ ] Columna D: Puntaje Total (número con %)
- [ ] Columnas I-P: Categorías PMBOK (formato X/Y)
- [ ] Columna Q: JSON con respuestas detalladas

### Datos en Nivel 2

- [ ] Columna A: Timestamp (fecha y hora ISO)
- [ ] Columna B: Nombre (texto)
- [ ] Columna C: Correo (email válido)
- [ ] Columna D: Empresa (texto)
- [ ] Columna E: Puntaje Total (número)
- [ ] Columna I: Nivel de Madurez (texto descriptivo)
- [ ] Columna J: Descripción del nivel (texto largo)
- [ ] Columna P: JSON con respuestas detalladas

### Funcionalidad de la Aplicación

- [ ] Puedo navegar entre preguntas (Anterior/Siguiente)
- [ ] El progreso se actualiza correctamente
- [ ] Las estadísticas se calculan bien
- [ ] Los filtros por categoría funcionan (Nivel 1)
- [ ] La escala Likert se ve correctamente (Nivel 2)
- [ ] Los resultados se muestran al finalizar
- [ ] Puedo revisar mis respuestas
- [ ] Los botones de navegación funcionan correctamente

## 🚀 Paso 5: Preparar para Producción

### Seguridad

- [ ] La URL de Apps Script está guardada en lugar seguro
- [ ] He probado el sistema con datos reales
- [ ] Los datos sensibles no están expuestos
- [ ] El acceso a Google Sheet está controlado

### Documentación

- [ ] He leído `README.MD`
- [ ] He leído `QUICK-START.md`
- [ ] He leído `INSTRUCCIONES-GOOGLE-SHEETS.md`
- [ ] Sé dónde buscar si hay problemas

### Respaldo

- [ ] He hecho un backup del Google Sheet (Archivo → Descargar)
- [ ] Tengo copia de la URL de Apps Script
- [ ] He guardado una copia del código de `codigo.gs`

### Comunicación

- [ ] He preparado instrucciones para los usuarios finales
- [ ] Los usuarios saben qué esperar
- [ ] Hay un canal de soporte definido

## 🎓 Conocimientos Verificados

- [ ] Entiendo que el script crea las hojas automáticamente
- [ ] Sé que NO debo crear hojas manualmente
- [ ] Comprendo que ambos niveles usan la misma URL
- [ ] Sé cómo ver logs en Apps Script si hay errores
- [ ] Sé cómo ver "Ejecuciones" en Apps Script
- [ ] Sé cómo actualizar el script en el futuro

## 📞 Si Algo Falla

### Consultar Documentación

- [ ] Revisé `INSTRUCCIONES-GOOGLE-SHEETS.md` sección "Solución de Problemas"
- [ ] Revisé la consola del navegador (F12 → Console)
- [ ] Revisé "Ejecuciones" en Apps Script (icono ⏱️)
- [ ] Revisé "Logs" en Apps Script (Ver → Logs)

### Verificar Configuración

- [ ] La URL de Apps Script es correcta
- [ ] La URL termina en `/exec`
- [ ] El acceso está en "Cualquier persona"
- [ ] Los permisos están autorizados

### Errores Comunes

- [ ] Si dice "Error al guardar" → Verificar URL y permisos
- [ ] Si las hojas no se crean → Ejecutar `doGet` para verificar
- [ ] Si los datos se duplican → Normal, reintento automático
- [ ] Si hay caracteres raros → Normal en display, JSON está bien

---

## ✅ Estado Final

Si has marcado TODAS las casillas:

**🎉 ¡FELICITACIONES! Tu sistema está completamente configurado y listo para usar.**

**Fecha de implementación:** _______________

**Implementado por:** _______________

**URL de Google Apps Script:**
```
_________________________________________________________________________
```

**Link a Google Sheet:**
```
_________________________________________________________________________
```

**Notas adicionales:**
```
_________________________________________________________________________
_________________________________________________________________________
_________________________________________________________________________
```
