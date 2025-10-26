# 📧 Auto-Respuesta EmailJS - Guía de Configuración

## ¿Qué es la Auto-Respuesta?

La **auto-respuesta** es un email automático que se envía al usuario cuando completa el formulario de contacto. Este email:

✅ Confirma que su mensaje fue recibido
✅ Muestra la fecha y hora exacta del envío
✅ Incluye una copia de su mensaje
✅ Es una práctica profesional y genera confianza

## 🎯 Beneficios

1. **Tranquilidad para el usuario**: Sabe que su mensaje llegó correctamente
2. **Copia del mensaje**: El usuario tiene un registro de lo que envió
3. **Profesionalismo**: Muestra que tienes un sistema organizado
4. **Timestamp**: El usuario sabe exactamente cuándo envió el mensaje

---

## 🚀 Configuración (5 minutos)

### Paso 1: Crear Segundo Template en EmailJS

1. **Ve a tu dashboard**: https://dashboard.emailjs.com/
2. **Click en "Email Templates"**
3. **Click en "Create New Template"**
4. **Dale un nombre**: "Portfolio Auto-Reply" o "Confirmación de Contacto"

---

### Paso 2: Configurar el Template de Auto-Respuesta

#### **Configuración básica:**

**To email (Destinatario):**
```
{{to_email}}
```
⚠️ **IMPORTANTE**: Usa `{{to_email}}`, NO pongas un email fijo aquí. Esta variable contendrá el email del remitente.

**From name (Remitente):**
```
Emerson Espinoza - Portfolio
```

**Subject (Asunto):**
```
✅ Mensaje recibido - {{subject}}
```

---

### Paso 3: Contenido del Email

#### **Opción 1: Versión Simple (Plain Text)**

Copia y pega esto en el campo "Content":

```
Hola {{to_name}},

¡Gracias por contactarme! He recibido tu mensaje correctamente.

📋 RESUMEN DE TU MENSAJE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Fecha de envío: {{sent_date}}
Hora de envío: {{sent_time}}
Asunto: {{subject}}

Mensaje enviado:
{{message}}

Teléfono: {{phone}}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Te responderé lo antes posible, generalmente en las próximas 24 horas.

Mientras tanto, puedes:
• Visitar mi portafolio: [URL de tu portafolio]
• Conectar en LinkedIn: [Tu LinkedIn]
• Ver mis proyectos en GitHub: [Tu GitHub]

Saludos cordiales,
Emerson Espinoza
Full Stack Developer

---
Este es un mensaje automático. Por favor no respondas a este email.
Para contactarme, responde al email que te enviaré personalmente.
```

---

#### **Opción 2: Versión Profesional (HTML)**

Para un email más moderno con diseño:

```html
<div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f4f7fa; padding: 20px;">

  <!-- Header -->
  <div style="background: linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%); padding: 30px; border-radius: 12px 12px 0 0; text-align: center;">
    <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 600;">✅ Mensaje Recibido</h1>
    <p style="color: #E0E7FF; margin-top: 10px; font-size: 16px;">Gracias por contactarme</p>
  </div>

  <!-- Body -->
  <div style="background-color: white; padding: 30px; border-radius: 0 0 12px 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">

    <p style="font-size: 16px; color: #1F2937; line-height: 1.6;">
      Hola <strong>{{to_name}}</strong>,
    </p>

    <p style="font-size: 16px; color: #4B5563; line-height: 1.6;">
      ¡Gracias por contactarme! He recibido tu mensaje correctamente y te responderé lo antes posible.
    </p>

    <!-- Timestamp Box -->
    <div style="background: linear-gradient(135deg, #EFF6FF 0%, #F3E8FF 100%); padding: 20px; border-radius: 8px; margin: 25px 0; border-left: 4px solid #3B82F6;">
      <p style="margin: 0; color: #6B7280; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
        📅 Enviado el
      </p>
      <p style="margin: 5px 0 0 0; color: #1F2937; font-size: 16px; font-weight: 500;">
        {{sent_date}} a las {{sent_time}}
      </p>
    </div>

    <!-- Message Summary -->
    <div style="background-color: #F9FAFB; padding: 20px; border-radius: 8px; margin: 20px 0;">
      <h3 style="color: #1F2937; margin-top: 0; font-size: 18px; border-bottom: 2px solid #E5E7EB; padding-bottom: 10px;">
        📋 Resumen de tu mensaje
      </h3>

      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 8px 0; color: #6B7280; font-weight: 600; width: 100px;">Asunto:</td>
          <td style="padding: 8px 0; color: #1F2937;">{{subject}}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #6B7280; font-weight: 600;">Teléfono:</td>
          <td style="padding: 8px 0; color: #1F2937;">{{phone}}</td>
        </tr>
      </table>

      <div style="margin-top: 15px;">
        <p style="color: #6B7280; font-weight: 600; margin-bottom: 8px;">Mensaje:</p>
        <p style="color: #374151; background-color: white; padding: 15px; border-radius: 6px; line-height: 1.6; white-space: pre-wrap; border: 1px solid #E5E7EB;">{{message}}</p>
      </div>
    </div>

    <!-- Response Time -->
    <div style="background: linear-gradient(135deg, #ECFDF5 0%, #D1FAE5 100%); padding: 15px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #10B981;">
      <p style="margin: 0; color: #065F46; font-size: 14px; line-height: 1.6;">
        <strong>⏰ Tiempo de respuesta:</strong> Generalmente respondo en las próximas <strong>24 horas</strong>.
      </p>
    </div>

    <!-- Links Section -->
    <div style="margin-top: 30px; padding-top: 20px; border-top: 2px solid #E5E7EB;">
      <p style="color: #6B7280; font-size: 14px; margin-bottom: 15px;">
        Mientras tanto, puedes explorar:
      </p>

      <table style="width: 100%;">
        <tr>
          <td style="padding: 8px 0;">
            <a href="https://tu-portfolio.com" style="color: #3B82F6; text-decoration: none; font-weight: 500;">
              🌐 Mi Portfolio
            </a>
          </td>
        </tr>
        <tr>
          <td style="padding: 8px 0;">
            <a href="https://linkedin.com/in/tu-perfil" style="color: #3B82F6; text-decoration: none; font-weight: 500;">
              💼 LinkedIn
            </a>
          </td>
        </tr>
        <tr>
          <td style="padding: 8px 0;">
            <a href="https://github.com/tu-usuario" style="color: #3B82F6; text-decoration: none; font-weight: 500;">
              💻 GitHub
            </a>
          </td>
        </tr>
      </table>
    </div>

    <!-- Signature -->
    <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #E5E7EB;">
      <p style="margin: 0; color: #1F2937; font-weight: 600; font-size: 16px;">Saludos cordiales,</p>
      <p style="margin: 5px 0; color: #3B82F6; font-weight: 700; font-size: 18px;">Emerson Espinoza</p>
      <p style="margin: 5px 0; color: #6B7280; font-size: 14px;">Full Stack Developer</p>
      <p style="margin: 5px 0; color: #6B7280; font-size: 14px;">📧 xinayespinoza@gmail.com</p>
    </div>

  </div>

  <!-- Footer -->
  <div style="text-align: center; padding: 20px; color: #9CA3AF; font-size: 12px;">
    <p style="margin: 0;">Este es un mensaje automático de confirmación.</p>
    <p style="margin: 5px 0 0 0;">No respondas a este email. Te responderé personalmente pronto.</p>
  </div>

</div>
```

**IMPORTANTE**: Reemplaza los links de portfolio, LinkedIn y GitHub con tus URLs reales.

---

### Paso 4: Verificar Variables del Template

Asegúrate que tu template tenga estas variables configuradas:

- `{{to_email}}` - Email del remitente (quien llenó el formulario)
- `{{to_name}}` - Nombre del remitente
- `{{subject}}` - Asunto del mensaje
- `{{message}}` - Contenido del mensaje
- `{{phone}}` - Teléfono del remitente
- `{{sent_date}}` - Fecha de envío (ej: "miércoles, 25 de octubre de 2025")
- `{{sent_time}}` - Hora de envío (ej: "02:30 PM")

Estas variables se rellenan automáticamente desde el código.

---

### Paso 5: Guardar y Obtener Template ID

1. **Click "Save"**
2. **Copia el Template ID** (ejemplo: `template_abc456`)
3. **Guarda este ID**, lo necesitarás para el siguiente paso

---

### Paso 6: Agregar Template ID al Proyecto

Abre el archivo `.env.development` y agrega:

```env
# Auto-respuesta (email de confirmación al remitente)
VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID=template_abc456
```

⚠️ Reemplaza `template_abc456` con tu **Template ID real**.

---

### Paso 7: Reiniciar el Servidor

```bash
# Detener el servidor (Ctrl+C)
# Iniciar nuevamente
npm run dev
```

---

## ✅ Verificar que Funciona

### 1. Probar el formulario:
   - Llena el formulario de contacto
   - Usa tu email personal para probar
   - Click "Enviar Mensaje"

### 2. Verificar en consola:
   - Deberías ver: `"Auto-reply sent successfully"`
   - Si no está configurado: `"Auto-reply template not configured, skipping"`

### 3. Revisar tu bandeja de entrada:
   - Busca el email en el correo que usaste en el formulario
   - Puede tardar 1-2 minutos
   - Revisa spam si no aparece

### 4. Verificar en EmailJS Dashboard:
   - Ve a History
   - Deberías ver **2 emails enviados**:
     1. Email principal a xinayespinoza@gmail.com
     2. Auto-respuesta al email que pusiste en el formulario

---

## 📊 Ejemplo de lo que verá el Usuario

Cuando alguien te contacte, verá este mensaje de éxito en tu sitio:

```
✅ ¡Mensaje enviado con éxito!

Fecha: 25 de octubre de 2025
Hora: 02:30 PM

📧 Recibirás una copia de confirmación en tu@email.com

Te responderé lo antes posible.

(Te quedan 2 envíos disponibles hoy)
```

Y recibirá un email como este:

```
De: Emerson Espinoza - Portfolio
Para: tu@email.com
Asunto: ✅ Mensaje recibido - Consulta sobre proyecto web

---
Hola Juan,

¡Gracias por contactarme! He recibido tu mensaje correctamente.

📋 RESUMEN DE TU MENSAJE
Fecha de envío: miércoles, 25 de octubre de 2025
Hora de envío: 02:30 PM
Asunto: Consulta sobre proyecto web

Mensaje enviado:
Hola Emerson, me gustaría consultarte sobre...

Te responderé lo antes posible, generalmente en las próximas 24 horas.
```

---

## 🔧 Troubleshooting

### ❌ "Auto-reply template not configured, skipping"

**Causas:**
1. No agregaste `VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID` al `.env.development`
2. El valor sigue siendo `your_autoreply_template_id_here`
3. No reiniciaste el servidor después de agregar la variable

**Solución:**
1. Verifica que `.env.development` tenga el template ID correcto
2. Reinicia el servidor con `npm run dev`

---

### ❌ Email principal llega pero no la auto-respuesta

**Causas:**
1. Template ID incorrecto
2. Variables mal configuradas en el template
3. El campo "To email" no tiene `{{to_email}}`

**Solución:**
1. Verifica el Template ID en EmailJS dashboard
2. Asegúrate que "To email" sea `{{to_email}}` (no un email fijo)
3. Verifica las variables en el template

---

### ❌ Auto-respuesta llega pero el formato está mal

**Causa:** Las variables no están escritas correctamente en el template

**Solución:**
Verifica que uses exactamente estas variables:
- `{{to_email}}` - NO `{{user_email}}` ni `{{email}}`
- `{{to_name}}` - NO `{{user_name}}` ni `{{name}}`
- `{{sent_date}}` y `{{sent_time}}` - Tal cual

---

## 💡 Mejoras Opcionales

### 1. Personalizar por tipo de consulta

Puedes crear múltiples templates de auto-respuesta para diferentes tipos de consulta.

### 2. Agregar imágenes

En el template HTML puedes agregar tu logo o foto:

```html
<img src="https://tu-portfolio.com/logo.png" alt="Logo" style="width: 150px;">
```

### 3. Incluir links a reuniones

Si usas Calendly u otra herramienta:

```html
<a href="https://calendly.com/tu-usuario" style="...">
  📅 Agenda una reunión
</a>
```

---

## 📈 Monitoreo

En el dashboard de EmailJS puedes ver:
- ✅ Cuántos emails de auto-respuesta se enviaron
- ✅ Tasa de éxito de entregas
- ✅ Emails que fallaron
- ✅ Cuota restante (200 emails/mes plan gratuito)

**Importante:** Cada auto-respuesta cuenta como 1 email adicional. Si envías 100 emails principales, se enviarán 100 auto-respuestas = **200 emails totales**.

---

## 🎯 ¿Es Opcional?

**SÍ**, la auto-respuesta es completamente opcional.

Si **NO configuras** `VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID`:
- ✅ El email principal seguirá llegando a xinayespinoza@gmail.com
- ✅ El formulario funcionará normal
- ✅ Solo que el remitente NO recibirá confirmación

El sistema verifica automáticamente si está configurado y solo envía auto-respuesta si existe el template ID.

---

## ✅ Checklist de Configuración

- [ ] Crear segundo template en EmailJS
- [ ] Configurar "To email" como `{{to_email}}`
- [ ] Agregar contenido del email (plain text o HTML)
- [ ] Verificar todas las variables
- [ ] Copiar Template ID
- [ ] Agregar `VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID` en `.env.development`
- [ ] Reiniciar servidor
- [ ] Probar enviando email de prueba
- [ ] Verificar que lleguen ambos emails (principal + auto-respuesta)
- [ ] Revisar formato del email de auto-respuesta

---

**¡Listo!** 🎉

Ahora tus usuarios recibirán una confirmación profesional cada vez que te contacten.
