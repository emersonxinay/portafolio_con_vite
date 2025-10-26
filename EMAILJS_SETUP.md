# 📧 Configuración EmailJS - Guía Completa

## ✅ Sistema Implementado

Tu formulario de contacto ya está **100% listo** con:
- ✅ EmailJS integrado
- ✅ Límite de 3 correos cada 24 horas por dispositivo
- ✅ Validación de formulario
- ✅ Mensajes de éxito/error con toast
- ✅ Indicador visual de envíos restantes
- ✅ Formulario se deshabilita al alcanzar límite
- ✅ **Auto-respuesta automática** (email de confirmación al remitente) ⭐ NUEVO
- ✅ Timestamp con fecha y hora exacta del envío

**Solo necesitas configurar tus credenciales de EmailJS (5-10 minutos)**

---

## 📧 Auto-Respuesta (Opcional)

El sistema ahora puede enviar un **email de confirmación automático** a quien llena el formulario, incluyendo:
- ✅ Confirmación de que el mensaje fue recibido
- ✅ Fecha y hora exacta del envío
- ✅ Copia del mensaje enviado
- ✅ Información de tiempo de respuesta

**Configuración:** Ver guía completa en [`EMAILJS_AUTOREPLY_SETUP.md`](./EMAILJS_AUTOREPLY_SETUP.md)

**Es completamente opcional.** Si no lo configuras, el formulario funciona igual pero sin enviar confirmación al remitente.

---

## 🚀 Configuración Rápida (5 pasos)

### **Paso 1: Crear cuenta EmailJS**
1. Ve a https://dashboard.emailjs.com/sign-up
2. Regístrate gratis (con Google o email)
3. Confirma tu email

**Plan gratuito:** 200 emails/mes ✅

---

### **Paso 2: Agregar servicio de email**

1. En el dashboard, ve a **"Email Services"**
2. Click en **"Add New Service"**
3. Selecciona tu proveedor:
   - **Gmail** (recomendado) - Conecta con tu Gmail
   - **Outlook/Hotmail**
   - **Yahoo**
   - Otros

4. Para Gmail:
   - Click "Connect Account"
   - Selecciona tu cuenta **xinayespinoza@gmail.com**
   - Autoriza EmailJS

5. Guarda el **Service ID** (ejemplo: `service_abc123`)

---

### **Paso 3: Crear plantilla de email**

1. En el dashboard, ve a **"Email Templates"**
2. Click **"Create New Template"**
3. Usa esta configuración:

#### **Template Settings:**

**Subject (Asunto):**
```
Nuevo mensaje de contacto: {{subject}}
```

**Content (Contenido del email que recibirás):**
```
Has recibido un nuevo mensaje desde tu portafolio:

De: {{from_name}}
Email: {{from_email}}
Teléfono: {{phone}}

Asunto: {{subject}}

Mensaje:
{{message}}

---
Este mensaje fue enviado desde el formulario de contacto de tu portafolio.
Responder a: {{reply_to}}
```

#### **Variables del template:**

Asegúrate que tenga estas variables (EmailJS las detecta automáticamente):
- `{{from_name}}` - Nombre del remitente
- `{{from_email}}` - Email del remitente
- `{{reply_to}}` - Email para responder
- `{{subject}}` - Asunto del mensaje
- `{{message}}` - Contenido del mensaje
- `{{phone}}` - Teléfono (opcional)
- `{{to_email}}` - Tu email (xinayespinoza@gmail.com)

4. Click **"Save"**
5. Guarda el **Template ID** (ejemplo: `template_xyz789`)

---

### **Paso 4: Obtener Public Key**

1. En el dashboard, ve a **"Account"** (menú superior derecho)
2. En la sección **"API Keys"**
3. Copia tu **Public Key** (ejemplo: `pUbL1cK3y123`)

---

### **Paso 5: Configurar en tu proyecto**

Abre el archivo `.env.development` y agrega tus credenciales:

```env
# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=service_abc123        ← Tu Service ID aquí
VITE_EMAILJS_TEMPLATE_ID=template_xyz789      ← Tu Template ID aquí
VITE_EMAILJS_PUBLIC_KEY=pUbL1cK3y123          ← Tu Public Key aquí
```

**¡Listo!** Reinicia el servidor:
```bash
npm run dev
```

---

## 🎯 Verificar Configuración

### 1. **Abrir consola del navegador**
   - F12 o Click derecho → "Inspeccionar"
   - Pestaña "Console"

### 2. **Enviar email de prueba**
   - Llenar el formulario en tu sitio
   - Click "Enviar Mensaje"

### 3. **Verificar en consola**
   - ✅ Si ves: `"Email sent successfully"`
   - ❌ Si ves error: Revisar credenciales

### 4. **Revisar tu email**
   - Busca en **xinayespinoza@gmail.com**
   - Puede tardar 1-2 minutos
   - Revisa **spam** si no aparece

---

## 🎨 Template Avanzado (Opcional)

Para un email más profesional con HTML:

```html
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f4f4f4;">
  <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">

    <!-- Header -->
    <div style="text-align: center; padding-bottom: 20px; border-bottom: 3px solid #3B82F6;">
      <h1 style="color: #3B82F6; margin: 0;">📧 Nuevo Mensaje de Contacto</h1>
    </div>

    <!-- Body -->
    <div style="padding: 20px 0;">
      <h2 style="color: #1F2937; font-size: 18px;">Detalles del contacto:</h2>

      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 10px; background-color: #F3F4F6; font-weight: bold; width: 120px;">
            👤 Nombre:
          </td>
          <td style="padding: 10px; background-color: #F9FAFB;">
            {{from_name}}
          </td>
        </tr>
        <tr>
          <td style="padding: 10px; background-color: #F3F4F6; font-weight: bold;">
            📧 Email:
          </td>
          <td style="padding: 10px; background-color: #F9FAFB;">
            <a href="mailto:{{from_email}}" style="color: #3B82F6; text-decoration: none;">
              {{from_email}}
            </a>
          </td>
        </tr>
        <tr>
          <td style="padding: 10px; background-color: #F3F4F6; font-weight: bold;">
            📱 Teléfono:
          </td>
          <td style="padding: 10px; background-color: #F9FAFB;">
            {{phone}}
          </td>
        </tr>
        <tr>
          <td style="padding: 10px; background-color: #F3F4F6; font-weight: bold;">
            🏷️ Asunto:
          </td>
          <td style="padding: 10px; background-color: #F9FAFB;">
            {{subject}}
          </td>
        </tr>
      </table>

      <!-- Message -->
      <div style="margin-top: 20px; padding: 20px; background-color: #EFF6FF; border-left: 4px solid #3B82F6; border-radius: 5px;">
        <h3 style="color: #1F2937; margin-top: 0;">💬 Mensaje:</h3>
        <p style="color: #4B5563; line-height: 1.6; white-space: pre-wrap;">{{message}}</p>
      </div>
    </div>

    <!-- Footer -->
    <div style="text-align: center; padding-top: 20px; border-top: 1px solid #E5E7EB; color: #6B7280; font-size: 12px;">
      <p>Enviado desde el formulario de contacto de tu portafolio</p>
      <p style="margin-top: 10px;">
        <a href="mailto:{{reply_to}}" style="display: inline-block; padding: 10px 20px; background-color: #3B82F6; color: white; text-decoration: none; border-radius: 5px; margin-right: 10px;">
          ✉️ Responder
        </a>
      </p>
    </div>
  </div>
</div>
```

---

## 🔍 Troubleshooting

### ❌ Error: "EmailJS not configured"
**Solución:** Verifica que las 3 variables estén en `.env.development`:
```env
VITE_EMAILJS_SERVICE_ID=...
VITE_EMAILJS_TEMPLATE_ID=...
VITE_EMAILJS_PUBLIC_KEY=...
```
**Importante:** Reinicia el servidor después de cambiar `.env`

---

### ❌ Error: "Failed to send email"
**Causas posibles:**
1. Service ID, Template ID o Public Key incorrectos
2. El servicio de email no está conectado en EmailJS
3. Límite de 200 emails/mes alcanzado

**Solución:**
1. Verifica las credenciales en el dashboard de EmailJS
2. Verifica que el servicio esté "Active" (verde)
3. Revisa tu cuota en Account → Usage

---

### ❌ No llegan emails a tu bandeja
**Solución:**
1. Revisa **carpeta de spam**
2. Verifica en EmailJS → History que se envió
3. Verifica que el email de destino sea correcto en el template
4. Espera 1-2 minutos (puede demorar)

---

### ⚠️ Límite alcanzado en el formulario
**Esto es normal:** El sistema limita a 3 emails cada 24 horas por dispositivo

**Para resetear el límite (testing):**
1. Abre consola del navegador (F12)
2. Ejecuta:
```javascript
localStorage.removeItem('portfolio_email_limit')
```
3. Recarga la página

---

## 📊 Monitoreo de Emails

### **Dashboard EmailJS**
Ve a: https://dashboard.emailjs.com/

**Puedes ver:**
- 📧 Emails enviados hoy/mes
- 📈 Historial de envíos
- ✅ Emails exitosos
- ❌ Emails fallidos
- 📊 Cuota restante (200/mes plan gratuito)

---

## 🎯 Testing del Sistema

### **Test 1: Envío exitoso**
1. Llenar el formulario
2. Click "Enviar Mensaje"
3. ✅ Debe aparecer toast: "¡Mensaje enviado con éxito! Te responderé pronto."
4. ✅ El indicador debe mostrar: "Te quedan 2 envíos disponibles hoy"

### **Test 2: Límite de 3 emails**
1. Enviar 3 emails desde el formulario
2. ❌ El 4to intento debe mostrar: "Has alcanzado el límite de 3 mensajes"
3. ❌ El botón debe deshabilitarse
4. ⏰ Debe mostrar hora de reset: "Intenta nuevamente mañana a las XX:XX"

### **Test 3: Validaciones**
1. Intentar enviar formulario vacío
2. ❌ Debe mostrar: "Por favor corrige los errores del formulario"
3. ❌ Cada campo debe mostrar su error específico

---

## 🔒 Seguridad

### **Datos protegidos:**
- ✅ Credenciales en variables de entorno (no en código)
- ✅ Rate limiting en cliente (3 emails/24h)
- ✅ Validación de formularios
- ✅ EmailJS maneja autenticación

### **Limitación actual:**
- ⚠️ El límite es en localStorage (puede borrarse)
- ⚠️ Modo incógnito permite bypass

### **Para más seguridad (futuro):**
- Implementar backend propio con rate limiting por IP
- Agregar Google reCAPTCHA v3
- Verificación de email con OTP

---

## 📱 Ejemplo de Email que Recibirás

```
De: Juan Pérez
Email: juan@ejemplo.com
Teléfono: +51 999 999 999

Asunto: Consulta sobre proyecto web

Mensaje:
Hola Emerson,

Me gustaría consultarte sobre el desarrollo de una
aplicación web para mi empresa. Tienes disponibilidad
para una reunión esta semana?

Saludos,
Juan

---
Enviado desde el formulario de contacto
Responder a: juan@ejemplo.com
```

---

## 🚀 Siguientes Pasos

Una vez configurado EmailJS:

1. **Probar el formulario** en ambiente local
2. **Verificar que lleguen emails** a xinayespinoza@gmail.com
3. **Desplegar** en producción (Vercel/Netlify)
4. **Configurar variables en producción:**
   - En Vercel: Settings → Environment Variables
   - Agregar las 3 variables con prefijo `VITE_`

---

## 📞 Contacto para Soporte

Si tienes problemas:
1. **EmailJS Support:** https://www.emailjs.com/docs/
2. **Dashboard:** https://dashboard.emailjs.com/
3. **Documentación:** Ver este archivo

---

## ✅ Checklist Final

- [ ] Cuenta EmailJS creada
- [ ] Servicio de email conectado (Gmail)
- [ ] Template creado con variables correctas
- [ ] Service ID copiado
- [ ] Template ID copiado
- [ ] Public Key copiado
- [ ] Variables agregadas en `.env.development`
- [ ] Servidor reiniciado
- [ ] Email de prueba enviado
- [ ] Email recibido en xinayespinoza@gmail.com
- [ ] Límite de 3 emails funciona correctamente

---

**¡Tu formulario de contacto está listo!** 🎉

Solo necesitas las credenciales de EmailJS y funcionará perfectamente.
