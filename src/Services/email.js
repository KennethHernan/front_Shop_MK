import nodemailer from 'nodemailer';

export async function sendVerificationCode(email, code) {
  // Configura el transporte SMTP (puede ser Gmail, SendGrid, etc)
  let transporter = nodemailer.createTransport({
    service: 'gmail', // o tu proveedor SMTP
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Cuerpo del correo
  let mailOptions = {
    from: '"Tu App" <no-reply@tuapp.com>',
    to: email,
    subject: 'Tu código de seguridad',
    html: `
      <div style="background:#FFD600;padding:20px;text-align:center;">
        <h2 style="color:#000;">Ingresa a tu cuenta con tu código de seguridad</h2>
      </div>
      <div style="padding:20px;font-family:sans-serif;">
        <p>¡No compartas este código!</p>
        <h1>${code}</h1>
        <small>Ten en cuenta que vence en 30 minutos.</small>
      </div>
    `
  };

  // Enviar correo
  try {
    await transporter.sendMail(mailOptions);
    console.log('Correo enviado a:', email);
  } catch (error) {
    console.error('Error enviando correo:', error);
  }
}
