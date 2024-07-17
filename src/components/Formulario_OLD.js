import React, { useState } from 'react';
import axios from 'axios'; // Você precisa instalar axios para as requisições HTTP
import './Formulario.css';

const Formulario = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    resposta1: '',
    resposta2: '',
    resposta3: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNextStep = () => {
    // Verifica se os campos nome e email foram preenchidos antes de avançar
    if (formData.nome && formData.email) {
      // Envia os dados iniciais para o servidor
      axios.post('http://localhost:3001/register', {
        nome: formData.nome,
        email: formData.email,
      }).then(response => {
        console.log('Usuário registrado com sucesso:', response.data);
        setStep(step + 1);
      }).catch(error => {
        console.error('Erro ao registrar o usuário:', error);
      });
    } else {
      alert('Por favor, preencha seu nome e e-mail.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode enviar as respostas ao servidor ou realizar outra ação
    console.log('Respostas enviadas:', formData);
    // Você pode adicionar lógica para enviar essas respostas ao servidor, se necessário
    // Após enviar, você pode mostrar uma mensagem de conclusão ou reiniciar o formulário
    alert('Formulário enviado com sucesso!');
    setFormData({
      nome: '',
      email: '',
      resposta1: '',
      resposta2: '',
      resposta3: '',
      resposta4: '',
      resposta5: '',
      resposta6: '',
      resposta7: '',
      resposta8: '',
      resposta9: '',
      resposta10: '',
    });
    setStep(1);
  };

  return (
    <div className="formulario-container">
      {step === 1 && (
        <div className="initial-form">
          <label>
            Nome:
            <input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              placeholder="Digite seu nome"
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Digite seu e-mail"
            />
          </label>
          <button onClick={handleNextStep}>Seguir</button>
        </div>
      )}
      {step === 2 && (
        <form className="questionnaire-form" onSubmit={handleSubmit}>
          <label>
            Pergunta 1:
            <input
              type="text"
              name="resposta1"
              value={formData.resposta1}
              onChange={handleChange}
              placeholder="Resposta para a pergunta 1"
            />
          </label>
          <label>
            Pergunta 2:
            <input
              type="text"
              name="resposta2"
              value={formData.resposta2}
              onChange={handleChange}
              placeholder="Resposta para a pergunta 2"
            />
          </label>
          <label>
            Pergunta 3:
            <input
              type="text"
              name="resposta3"
              value={formData.resposta3}
              onChange={handleChange}
              placeholder="Resposta para a pergunta 3"
            />
          </label>
          <label>
            Pergunta 4:
            <input
              type="text"
              name="resposta4"
              value={formData.resposta4}
              onChange={handleChange}
              placeholder="Resposta para a pergunta 4"
            />
          </label>
          <label>
            Pergunta 5:
            <input
              type="text"
              name="resposta5"
              value={formData.resposta5}
              onChange={handleChange}
              placeholder="Resposta para a pergunta 5"
            />
          </label>
          <label>
            Pergunta 6:
            <input
              type="text"
              name="resposta6"
              value={formData.resposta6}
              onChange={handleChange}
              placeholder="Resposta para a pergunta 6"
            />
          </label>
          <label>
            Pergunta 7:
            <input
              type="text"
              name="resposta7"
              value={formData.resposta7}
              onChange={handleChange}
              placeholder="Resposta para a pergunta 7"
            />
          </label>
          <label>
            Pergunta 8:
            <input
              type="text"
              name="resposta8"
              value={formData.resposta8}
              onChange={handleChange}
              placeholder="Resposta para a pergunta 8"
            />
          </label>
          <label>
            Pergunta 9:
            <input
              type="text"
              name="resposta9"
              value={formData.resposta9}
              onChange={handleChange}
              placeholder="Resposta para a pergunta 9"
            />
          </label>
          <label>
            Pergunta 10:
            <input
              type="text"
              name="resposta10"
              value={formData.resposta10}
              onChange={handleChange}
              placeholder="Resposta para a pergunta 10"
            />
          </label>
          
          
          <button type="submit">Enviar</button>
        </form>
      )}
    </div>
  );
};

export default Formulario;
