// libs/email.js
import nodemailer from 'nodemailer';

export function generarClaveAcceso() {
    return Math.floor(1000 + Math.random() * 9000).toString();
}

// Función para enviar un correo con la clave de acceso
export async function enviarCorreo(email, claveAcceso) {
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'cesargabrieltorresflorez@gmail.com',
                pass: 'dayk zwjk ugsj ygem'
            }
        });

        const info = await transporter.sendMail({
            from: '"Sistema de Autenticación" <tuCorreo@gmail.com>',
            to: email,
            subject: "Clave de acceso para cambio de contraseña",
            text: `Tu clave de acceso es: ${claveAcceso}`,
        });

        console.log('Mensaje enviado: %s', info.messageId);
    } catch (error) {
        console.error('Error al enviar el correo:', error);
    }
}