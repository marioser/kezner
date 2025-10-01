# 📚 Guía Completa: Configuración de Google Apps Script

Esta guía te llevará paso a paso para configurar correctamente el sistema de almacenamiento en Google Sheets.

## 🎯 Resumen Rápido

El nuevo script maneja **automáticamente** ambos niveles:
- ✅ Crea las hojas automáticamente si no existen
- ✅ Configura los encabezados automáticamente
- ✅ No necesitas ejecutar funciones de preparación manualmente
- ✅ Un solo script maneja todo

## 📝 Paso 1: Crear Google Sheet

1. Ve a [Google Sheets](https://sheets.google.com)
2. Clic en **+ Blank** (Hoja en blanco)
3. Nombra tu hoja: `Evaluaciones Gestión Proyectos` (o el nombre que prefieras)
4. **NO necesitas crear hojas internas** - el script las creará automáticamente

## ⚙️ Paso 2: Abrir Google Apps Script

1. En tu Google Sheet, ve al menú: **Extensiones → Apps Script**
2. Se abrirá una nueva pestaña con el editor de Apps Script
3. Verás un archivo por defecto con código de ejemplo
4. **Selecciona y borra** todo el código de ejemplo

## 📋 Paso 3: Copiar el Script

1. Abre el archivo `codigo.gs` de tu proyecto
2. **Copia TODO el contenido** del archivo
3. **Pega** en el editor de Apps Script (reemplazando todo)
4. El editor debería mostrar el código completo con las funciones:
   - `doPost(e)`
   - `procesarNivel1(ss, datos)`
   - `procesarNivel2(ss, datos)`
   - `formatearCategoria(categoria)`
   - `doGet(e)`

## 💾 Paso 4: Guardar el Proyecto

1. Clic en el icono de **💾 Guardar** (o Ctrl+S / Cmd+S)
2. Dale un nombre al proyecto: `Sistema Evaluaciones PM`
3. Clic en **Aceptar**

## 🚀 Paso 5: Desplegar como Aplicación Web

### 5.1 Crear Nueva Implementación

1. Clic en el botón **Implementar** (arriba a la derecha)
2. Selecciona **Nueva implementación**
3. Se abrirá un modal

### 5.2 Configurar el Tipo

1. Junto a "Seleccionar tipo", clic en el icono de ⚙️ (engranaje)
2. Selecciona **Aplicación web**

### 5.3 Configurar Opciones

Configura las siguientes opciones:

**Descripción (opcional):**
```
Sistema de Evaluaciones - Nivel 1 y 2
```

**Ejecutar como:**
```
Yo (tu correo electrónico)
```

**Quién tiene acceso:**
```
Cualquier persona
```

⚠️ **IMPORTANTE:** Debe ser "Cualquier persona" para que funcione desde tu aplicación web

### 5.4 Desplegar

1. Clic en **Implementar**
2. La primera vez te pedirá autorizar la aplicación:
   - Clic en **Autorizar acceso**
   - Selecciona tu cuenta de Google
   - Verás una advertencia "Google no ha verificado esta aplicación"
   - Clic en **Avanzado**
   - Clic en **Ir a [nombre del proyecto] (no seguro)**
   - Clic en **Permitir**

### 5.5 Copiar URL

1. Después de autorizar, verás un modal con la URL de implementación
2. **COPIA** la URL completa (se parece a):
```
https://script.google.com/macros/s/AKfycbw...../exec
```
3. ⚠️ **GUARDA ESTA URL** - la necesitarás en el siguiente paso
4. Clic en **Listo**

## 🔧 Paso 6: Actualizar URLs en el Código Web

### 6.1 Actualizar app.js (Nivel 1)

1. Abre el archivo `app.js`
2. Busca la línea 5:
```javascript
const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbw54DLF2TEbAwyFezBfwvQgMIkZ2RGHpWwC7C_xHXoBq8FNM7xkF_DGP0l_Ujz0uf51zw/exec';
```
3. Reemplaza con tu URL copiada
4. Guarda el archivo

### 6.2 Actualizar app-nivel2.js (Nivel 2)

1. Abre el archivo `app-nivel2.js`
2. Busca la línea 5:
```javascript
const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbw54DLF2TEbAwyFezBfwvQgMIkZ2RGHpWwC7C_xHXoBq8FNM7xkF_DGP0l_Ujz0uf51zw/exec';
```
3. Reemplaza con **LA MISMA URL** que en app.js
4. Guarda el archivo

### 6.3 Commit de Cambios

```bash
git add app.js app-nivel2.js
git commit -m "Actualizar URL de Google Apps Script"
git push
```

## ✅ Paso 7: Verificar la Instalación

### 7.1 Prueba Rápida del Script

1. En el editor de Apps Script, selecciona la función `doGet` en el dropdown
2. Clic en **Ejecutar** (▶️)
3. Debe ejecutarse sin errores
4. Revisa los **Logs** - debe decir "Servicio funcionando correctamente"

### 7.2 Prueba con Nivel 1

1. Abre `index.html` en tu navegador
2. Clic en **Comenzar Nivel 1**
3. Completa el formulario de registro
4. Responde al menos 5 preguntas
5. Clic en **Finalizar**
6. Espera el mensaje: "✅ Evaluación guardada exitosamente"

### 7.3 Verificar en Google Sheets

1. Ve a tu Google Sheet
2. Deberías ver una nueva hoja: **"Nivel 1 - Quiz PMBOK"**
3. La fila 1 tendrá los encabezados en negrita
4. La fila 2 tendrá tus datos de prueba

### 7.4 Prueba con Nivel 2

1. Vuelve a `index.html`
2. Clic en **Comenzar Nivel 2**
3. Completa el formulario (incluye campo Empresa)
4. Responde al menos 5 preguntas
5. Clic en **Finalizar**
6. Espera el mensaje: "✅ Evaluación guardada exitosamente"

### 7.5 Verificar Nivel 2 en Google Sheets

1. Ve a tu Google Sheet
2. Deberías ver una nueva hoja: **"Nivel 2 - Madurez"**
3. La fila 1 tendrá los encabezados en negrita
4. La fila 2 tendrá tus datos de prueba

## 📊 Estructura Final de Google Sheets

Tu Google Sheet tendrá 2 hojas:

### Hoja 1: "Nivel 1 - Quiz PMBOK"
Columnas (17 total):
1. Timestamp
2. Nombre
3. Correo
4. Puntaje Total (%)
5. Tiempo (minutos)
6. Total Preguntas
7. Preguntas Correctas
8. Filtro Aplicado
9. Scope Management (X/Y)
10. Time Management (X/Y)
11. Cost Management (X/Y)
12. Quality Management (X/Y)
13. Risk Management (X/Y)
14. HR Management (X/Y)
15. Communications Management (X/Y)
16. Procurement Management (X/Y)
17. Respuestas Detalladas (JSON)

### Hoja 2: "Nivel 2 - Madurez"
Columnas (16 total):
1. Timestamp
2. Nombre
3. Correo
4. Empresa
5. Puntaje Total
6. Puntaje Promedio
7. Puntaje Máximo Posible
8. Puntaje Mínimo Posible
9. Nivel de Madurez
10. Descripción
11. Tiempo (minutos)
12. Total Preguntas
13. Respuestas Positivas (+1 a +3)
14. Respuestas Neutrales (0)
15. Respuestas Negativas (-1 a -3)
16. Respuestas Detalladas (JSON)

## 🔍 Solución de Problemas

### Problema 1: "Error al guardar"

**Síntomas:** Mensaje rojo en la aplicación web

**Soluciones:**
1. Verifica que la URL esté correcta en `app.js` y `app-nivel2.js`
2. Asegúrate de que termina en `/exec`
3. Verifica que "Quién tiene acceso" esté en "Cualquier persona"
4. Revisa la consola del navegador (F12) para ver errores específicos

### Problema 2: Las hojas no se crean

**Síntomas:** Google Sheet permanece vacío

**Soluciones:**
1. En Apps Script, ve a **Ejecuciones** (icono de reloj)
2. Revisa si hay errores en las ejecuciones recientes
3. Verifica que el script tenga permisos para editar el Sheet
4. Intenta ejecutar manualmente `doGet` para verificar permisos

### Problema 3: Datos duplicados

**Síntomas:** Los mismos datos aparecen varias veces

**Soluciones:**
1. Esto es normal si el envío se reintenta
2. El sistema guarda en localStorage como backup
3. Limpia localStorage del navegador si es necesario

### Problema 4: Caracteres raros en los datos

**Síntomas:** Acentos o ñ aparecen mal

**Soluciones:**
1. El script está configurado para UTF-8
2. Asegúrate de que Google Sheets use codificación UTF-8
3. Los datos en JSON están correctos, solo el display puede verse afectado

### Problema 5: "No autorizado"

**Síntomas:** Error de permisos al guardar

**Soluciones:**
1. Re-despliega la aplicación (Implementar → Administrar implementaciones → Editar)
2. Actualiza la URL en los archivos JS
3. Vuelve a autorizar los permisos

## 🔄 Actualizar el Script (Futuro)

Si necesitas actualizar el script en el futuro:

1. Abre Apps Script
2. Modifica el código
3. Guarda (Ctrl+S)
4. Ve a **Implementar → Administrar implementaciones**
5. Clic en el icono de **lápiz** (editar)
6. Cambia "Versión" a **Nueva versión**
7. Agrega descripción del cambio
8. Clic en **Implementar**
9. **NO necesitas cambiar la URL** - se mantiene igual

## 📱 Compartir el Sistema

Para compartir con otros evaluadores:

**Opción 1: Mismo Google Sheet (Recomendado)**
- Todos usan la misma URL de Apps Script
- Todos los datos van al mismo Sheet
- Puedes controlar acceso desde Google Sheets

**Opción 2: Google Sheets Separados**
- Cada usuario crea su propio Sheet
- Cada usuario despliega su propio Apps Script
- Cada usuario configura su propia URL

## 🎓 Buenas Prácticas

1. **Backup Regular:** Exporta Google Sheet periódicamente
2. **Versiones:** Mantén control de versiones en Apps Script
3. **Testing:** Prueba con datos de ejemplo antes de uso real
4. **Documentación:** Guarda la URL del script en lugar seguro
5. **Monitoreo:** Revisa "Ejecuciones" en Apps Script periódicamente

## 🆘 Soporte Adicional

Si sigues teniendo problemas:

1. Revisa los **Logs** en Apps Script (Ver → Logs)
2. Revisa las **Ejecuciones** (icono de reloj ⏱️)
3. Verifica la **Consola del navegador** (F12 → Console)
4. Comprueba que todos los archivos tengan la misma URL

## ✅ Checklist Final

Antes de considerar la instalación completa:

- [ ] Google Sheet creado
- [ ] Apps Script desplegado como Web App
- [ ] URL copiada y guardada
- [ ] `app.js` actualizado con la URL
- [ ] `app-nivel2.js` actualizado con la URL
- [ ] Prueba Nivel 1 completada exitosamente
- [ ] Hoja "Nivel 1 - Quiz PMBOK" creada con datos
- [ ] Prueba Nivel 2 completada exitosamente
- [ ] Hoja "Nivel 2 - Madurez" creada con datos
- [ ] Ambas hojas tienen encabezados en negrita
- [ ] Los datos se ven correctamente formateados

---

**¡Felicidades!** 🎉 Tu sistema está completamente configurado y listo para usar.
