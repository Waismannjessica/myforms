import React, { useState } from 'react';
import './Questionario.css';

const Questionario = () => {
  const [formData, setFormData] = useState({
    resposta1: '',
    resposta2: '',
    resposta3: '',
    resposta4: '',
    resposta5: '',
    resposta6: '',
    resposta7: '',
    resposta8: '',
    resposta9: '',
    resposta10: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Respostas enviadas:', formData);
    alert('Questionário enviado com sucesso!');
    // Redirecionar ou reiniciar formulário conforme necessário
  };

  return (
    <div className="App2">
      <form className="quest-container" onSubmit={handleSubmit}>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br /> 
        <br />
        <br /> 
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        
        <h2>Questionário</h2>
        <div className="forms-group">
          <label htmlFor="resposta1">1- Você se considera uma pessoa confiante?</label>
          <label htmlFor="resposta">Escolha uma das opções:</label>
          <label htmlFor="resposta">A ( ) Sim</label>
          <label htmlFor="resposta">Não</label>
          <input
            type="text"
            id="resposta1"
            name="resposta1"
            value={formData.resposta1}
            onChange={handleChange}
            placeholder="Resposta para a pergunta 1"
            required
          />
        </div>
        <br />
        <div className="forms-group">
          <label htmlFor="resposta2">2- Qual dessas características mais combina com você?</label>
          <label htmlFor="resposta"> - Preguiça </label>
          <label htmlFor="resposta"> - Impaciência  </label>
          <label htmlFor="resposta"> - Timidez </label>
          <label htmlFor="resposta"> - Vaidoso (a) </label>
          <input
            type="text"
            id="resposta2"
            name="resposta2"
            value={formData.resposta2}
            onChange={handleChange}
            placeholder="Resposta para a pergunta 2"
            required
          />
        </div>
        <br />
        <div className="forms-group">
          <label htmlFor="resposta3">3- Você se considera uma pessoa…</label>
          <label htmlFor="resposta"> - Simpática</label>
          <label htmlFor="resposta"> - Leal </label>
          <label htmlFor="resposta"> - Forte </label>
          <label htmlFor="resposta"> - Inteligente </label>
          <input
            type="text"
            id="resposta3"
            name="resposta3"
            value={formData.resposta3}
            onChange={handleChange}
            placeholder="Resposta para a pergunta 3"
            required
          />
        </div>
        <div className="forms-group">
          <label htmlFor="resposta4"> 4- Quais dessas circunstâncias você considera desafiadora?</label>
          <label htmlFor="resposta"> - Trabalhar com outras pessoas por um longo período</label>
          <label htmlFor="resposta"> - Ficar em um lugar por muito tempo</label>
          <label htmlFor="resposta"> - Trabalhar sob pressão</label>
          <input
            type="text"
            id="resposta4"
            name="resposta4"
            value={formData.resposta4}
            onChange={handleChange}
            placeholder="Resposta para a pergunta 4"
            required
          />
        </div>
        <div className="forms-group">
          <label htmlFor="resposta5">5- Com qual elemento da natureza você sente maior conexão?</label>
          <label htmlFor="resposta"> - Ar  </label>
          <label htmlFor="resposta"> - Fogo </label>
          <label htmlFor="resposta"> - Terra </label>
          <label htmlFor="resposta"> - Água </label>
          <input
            type="text"
            id="resposta5"
            name="resposta5"
            value={formData.resposta5}
            onChange={handleChange}
            placeholder="Resposta para a pergunta 5"
            required
          />
        </div>
        <div className="forms-group">
          <label htmlFor="resposta6">6- Como prefiro passar meu tempo livre?</label>
          <label htmlFor="resposta"> - Estar ao ar livre fazendo trilhas ou caminhadas no parque </label>
          <label htmlFor="resposta"> - Fazendo algo criativo ou trabalhos manuais </label>
          <label htmlFor="resposta"> - Jogando vídeo game ou assistindo a um filme em casa  </label>
          <label htmlFor="resposta"> - Encontrando com amigos e saindo para me divertir </label>
          <input
            type="text"
            id="resposta6"
            name="resposta6"
            value={formData.resposta6}
            onChange={handleChange}
            placeholder="Resposta para a pergunta 6"
            required
          />
        </div>
        <div className="forms-group">
          <label htmlFor="resposta7">7- Qual desses é o seu maior defeito?</label>
          <label htmlFor="resposta"> - Ira </label>
          <label htmlFor="resposta"> - Sinceridade </label>
          <label htmlFor="resposta"> - Inveja </label>
          <label htmlFor="resposta"> - Medo </label>
          <input
            type="text"
            id="resposta7"
            name="resposta7"
            value={formData.resposta7}
            onChange={handleChange}
            placeholder="Resposta para a pergunta 7"
            required
          />
        </div>
        <div className="forms-group">
          <label htmlFor="resposta8">8- Se você pudesse se teletransportar a qualquer parte do mundo, aonde você iria?</label>
          <label htmlFor="resposta"> - Floresta Amazônica </label>
          <label htmlFor="resposta"> - Roma  </label>
          <label htmlFor="resposta"> - Cancún </label>
          <label htmlFor="resposta"> - Patagônia </label>
          <input
            type="text"
            id="resposta8"
            name="resposta8"
            value={formData.resposta8}
            onChange={handleChange}
            placeholder="Resposta para a pergunta 8"
            required
          />
        </div>
        <div className="forms-group">
          <label htmlFor="resposta9">9- Qual adjetivo animal descreve sua vida amorosa?</label>
          <label htmlFor="resposta"> - Selvagem </label>
          <label htmlFor="resposta"> - Divertida </label>
          <label htmlFor="resposta"> - Doméstica </label>
          <label htmlFor="resposta"> - Noturna </label>
          <input
            type="text"
            id="resposta9"
            name="resposta9"
            value={formData.resposta9}
            onChange={handleChange}
            placeholder="Resposta para a pergunta 9"
            required
          />
        </div>
        <div className="forms-group">
          <label htmlFor="resposta10">10- Para você, os animais são…</label>
          <label htmlFor="resposta"> - Incríveis </label>
          <label htmlFor="resposta"> - Aceitáveis </label>
          <label htmlFor="resposta"> - Vale a pena proteger </label>
          <label htmlFor="resposta"> - Assim como nós </label>
          <input
            type="text"
            id="resposta10"
            name="resposta10"
            value={formData.resposta10}
            onChange={handleChange}
            placeholder="Resposta para a pergunta 10"
            required
          />
        </div>
        <br />
        <button2 type="submit">Enviar</button2>
      </form>   
    </div>
    
  );
  
};

export default Questionario;
