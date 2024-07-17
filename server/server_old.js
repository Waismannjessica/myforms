const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

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
  user: 'root', // substitua pelo seu usuário do MySQL
  password: '6tioKFUsba*.anna', // substitua pela sua senha do MySQL
  database: 'meu_banco_de_dados', // substitua pelo nome do seu banco de dados
});

db.connect((err) => {
  if (err) throw err;
  console.log('Conectado ao banco de dados');
});

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

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
