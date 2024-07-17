import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import './Questionario.css'

import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Questionario from './Questionario';

const Formulario = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/register', { nome, email });
      setMensagem(response.data);
      navigate('/questionario'); // Redireciona para a página de questionário
    } catch (error) {
      setMensagem(error.response.data);
    }
  };

  return (
    <div className="App">
      <form className="form-container" onSubmit={handleSubmit}>
        <h2>Formulário de Registro</h2>
        <div className="form-group">
          <label htmlFor="nome">Nome :</label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <br />
        <button type="submit">Seguir</button>
        {mensagem && <p>{mensagem}</p>}
      </form>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Formulario />} />
        <Route path="/questionario" element={<Questionario />} />
      </Routes>
    </Router>
  );
};

export default App;
