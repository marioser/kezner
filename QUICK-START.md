# 🚀 Quick Start - 5 Minutos

Guía ultra rápida para poner en funcionamiento el sistema.

## ⚡ Lo que necesitas saber

### ✅ Diferencias clave con el sistema anterior

**ANTES (Sistema anterior):**
- Necesitabas ejecutar manualmente funciones de configuración
- Tenías que crear las hojas manualmente
- Configuración separada para cada nivel

**AHORA (Sistema actual):**
- ✅ **TODO ES AUTOMÁTICO**
- ✅ El script crea las hojas si no existen
- ✅ Un solo script maneja ambos niveles
- ✅ No necesitas ejecutar funciones de preparación

## 📋 Pasos Rápidos

### 1️⃣ Crear Google Sheet (30 segundos)
```
1. Ve a sheets.google.com
2. Crea hoja nueva (en blanco)
3. Nómbrala como quieras
```

### 2️⃣ Abrir Apps Script (10 segundos)
```
1. En Google Sheet: Extensiones → Apps Script
2. Borra el código de ejemplo
```

### 3️⃣ Pegar el Código (20 segundos)
```
1. Abre codigo.gs del proyecto
2. Copia TODO
3. Pega en Apps Script
4. Guarda (Ctrl+S)
```

### 4️⃣ Desplegar (2 minutos)
```
1. Clic en "Implementar" (arriba derecha)
2. Selecciona "Nueva implementación"
3. Tipo: Aplicación web
4. Ejecutar como: Yo
5. Acceso: Cualquier persona
6. Clic en "Implementar"
7. Autoriza permisos
8. COPIA LA URL
```

### 5️⃣ Actualizar URLs (1 minuto)
```
Edita estos archivos:
- app.js línea 5
- app-nivel2.js línea 5

Pega tu URL en GOOGLE_SHEETS_URL
```

### 6️⃣ Probar (1 minuto)
```
1. Abre index.html en navegador
2. Completa una evaluación
3. Revisa Google Sheet
4. ¡Listo! 🎉
```

## 🎯 Lo más importante

### ⚠️ IMPORTANTE #1: No crear hojas manualmente
El script las crea automáticamente:
- "Nivel 1 - Quiz PMBOK"
- "Nivel 2 - Madurez"

### ⚠️ IMPORTANTE #2: La URL debe terminar en /exec
```
✅ CORRECTO:
https://script.google.com/.../exec

❌ INCORRECTO:
https://script.google.com/.../dev
```

### ⚠️ IMPORTANTE #3: Usar LA MISMA URL en ambos archivos
```
app.js → GOOGLE_SHEETS_URL = 'tu-url-aqui'
app-nivel2.js → GOOGLE_SHEETS_URL = 'tu-url-aqui'
```

## 🔍 Verificación Rápida

Después de configurar, verifica:

**En Google Sheet:**
```
□ Existe hoja "Nivel 1 - Quiz PMBOK"
□ Existe hoja "Nivel 2 - Madurez"
□ Primera fila tiene encabezados en negrita
□ Hay datos en fila 2 (tus pruebas)
```

**En la Aplicación:**
```
□ Mensaje verde: "✅ Evaluación guardada exitosamente"
□ No hay errores en consola del navegador (F12)
```

## 🐛 Problemas Comunes (1 minuto cada uno)

### "Error al guardar"
```
→ Verifica URL termine en /exec
→ Verifica acceso sea "Cualquier persona"
```

### "No se crean las hojas"
```
→ Ejecuta doGet en Apps Script para verificar permisos
→ Revisa "Ejecuciones" (icono reloj) para ver errores
```

### "Datos aparecen mal"
```
→ Normal si hay caracteres especiales
→ El JSON tiene los datos correctos
```

## 📚 Documentación Completa

Para instrucciones detalladas ver:
- `INSTRUCCIONES-GOOGLE-SHEETS.md` - Guía completa paso a paso
- `README.MD` - Documentación general del proyecto

## 💡 Tips

1. **Guarda la URL** en un lugar seguro
2. **Prueba primero** con datos de ejemplo
3. **No cierres** Google Sheet mientras hay envíos activos
4. **Revisa "Ejecuciones"** en Apps Script si hay problemas

---

**Tiempo total estimado: 5-7 minutos** ⏱️
