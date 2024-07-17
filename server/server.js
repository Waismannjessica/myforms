const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');
const sgMail = require('@sendgrid/mail');
require('dotenv').config(); // Carregar variáveis de ambiente

const app = express();
const port = 3001;

// Configurando o CORS para permitir requisições de qualquer origem
app.use(cors({
  origin: '*', // Permite qualquer origem
  methods: 'GET,POST,PUT,DELETE', // Métodos permitidos
  allowedHeaders: 'Content-Type,Authorization' // Cabeçalhos permitidos
}));

app.use(bodyParser.json());

// Configure o banco de dados
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', //  usuário do MySQL
  password: '6tioKFUsba*.anna', // senha do MySQL
  database: 'meu_banco_de_dados', //  nome do banco de dados
});

db.connect((err) => {
  if (err) throw err;
  console.log('Conectado ao banco de dados');
});

// Configurando o SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Função para enviar e-mail
const sendEmail = async (email, subject, text) => {
  const msg = {
    to: email,
    from: 'waismannjessica@gmail.com', //  e-mail verificado no SendGrid
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

// Rota para registrar o usuário
app.post('/register', (req, res) => {
  const { nome, email } = req.body;

  // Verificar se o e-mail já existe
  db.query('SELECT * FROM usuarios WHERE email = ?', [email], (err, result) => {
    if (err) {
      res.status(500).send('Erro ao verificar o e-mail');
      throw err;
    }

    if (result.length > 0) {
      return res.status(400).send('E-mail já registrado');
    }

    // Inserir novo usuário
    db.query('INSERT INTO usuarios (nome, email) VALUES (?, ?)', [nome, email], (err, result) => {
      if (err) {
        res.status(500).send('Erro ao registrar o usuário');
        throw err;
      }
      res.status(201).send(`Usuário registrado com sucesso com ID: ${result.insertId}`);
    });
  });
});

// Rota para enviar o questionário
app.post('/submit-questionnaire', async (req, res) => {
  const { email, formData, pontuacao } = req.body;

  const text = `Aqui estão suas respostas:\n${JSON.stringify(formData, null, 2)}\nSua pontuação total é: ${pontuacao}`;

  try {
    await sendEmail(email, 'Suas respostas do questionário', text);
    res.json('Questionário enviado com sucesso e e-mail enviado');
  } catch (error) {
    res.status(500).json('Erro ao enviar questionário e e-mail');
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
