// sendEmail.js
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = async (email, subject, text) => {
  const msg = {
    to: email,
    from: 'seu_email@example.com', // Substitua pelo seu e-mail verificado no SendGrid
    subject: subject,
    text: text,
  };

  try {
    await sgMail.send(msg);
    console.log('Email enviado com sucesso');
  } catch (error) {
    console.error('Erro ao enviar e-mail', error);
  }
};

module.exports = sendEmail;
