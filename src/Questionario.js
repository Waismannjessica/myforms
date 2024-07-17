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
    
    // Calcula a pontuação total
    const pontuacao = Object.values(formData).reduce((total, resposta) => total + parseInt(resposta), 0);

    console.log('Respostas enviadas:', formData);
    console.log('Pontuação total:', pontuacao);

    alert(`Questionário enviado com sucesso! Sua pontuação é: ${pontuacao}`);

    // Lógica para enviar o e-mail aqui
  };

  return (
    <div className="App2">
      <form className="quest-container" onSubmit={handleSubmit}>
        <h2>Questionário</h2>

        <div className="forms-group">
          <label>1- Você se considera uma pessoa confiante?</label>
          <label>A -<input type="radio" name="resposta1" value="1" onChange={handleChange} required /> Sim</label>
          <label>B -<input type="radio" name="resposta1" value="2" onChange={handleChange} required /> Não</label>
        </div>

        <div className="forms-group">
          <label>2- Qual dessas características mais combina com você?</label>
          <label>A -<input type="radio" name="resposta2" value="1" onChange={handleChange} required /> Preguiça</label>
          <label>B -<input type="radio" name="resposta2" value="2" onChange={handleChange} required /> Impaciência</label>
          <label>C -<input type="radio" name="resposta2" value="3" onChange={handleChange} required /> Timidez</label>
          <label>D -<input type="radio" name="resposta2" value="4" onChange={handleChange} required /> Vaidoso(a)</label>
        </div>

        <div className="forms-group">
          <label>3- Você se considera uma pessoa…</label>
          <label>A -<input type="radio" name="resposta3" value="1" onChange={handleChange} required /> Simpática</label>
          <label>B -<input type="radio" name="resposta3" value="2" onChange={handleChange} required /> Leal</label>
          <label>C -<input type="radio" name="resposta3" value="3" onChange={handleChange} required /> Forte</label>
          <label>D -<input type="radio" name="resposta3" value="4" onChange={handleChange} required /> Inteligente</label>
        </div>

        <div className="forms-group">
          <label>4- Quais dessas circunstâncias você considera desafiadora? </label>
          <label>A -<input type="radio" name="resposta2" value="1" onChange={handleChange} required /> Sentir-se só</label>
          <label>B -<input type="radio" name="resposta2" value="2" onChange={handleChange} required /> Trabalhar com outras pessoas por um longo período</label>
          <label>C -<input type="radio" name="resposta2" value="3" onChange={handleChange} required /> Ficar em um lugar por muito tempo</label>
          <label>D -<input type="radio" name="resposta2" value="4" onChange={handleChange} required /> Trabalhar sob pressão</label>
        </div>

        <div className="forms-group">
          <label>5- Com qual elemento da natureza você sente maior conexão?</label>
          <label>A -<input type="radio" name="resposta2" value="1" onChange={handleChange} required /> Ar</label>
          <label>B -<input type="radio" name="resposta2" value="2" onChange={handleChange} required /> Terra</label>
          <label>C -<input type="radio" name="resposta2" value="3" onChange={handleChange} required /> Fogo</label>
          <label>D -<input type="radio" name="resposta2" value="4" onChange={handleChange} required /> Água</label>
        </div>

        <div className="forms-group">
          <label>6- Como prefiro passar meu tempo livre?</label>
          <label>A -<input type="radio" name="resposta2" value="1" onChange={handleChange} required /> Estar ao ar livre fazendo trilhas ou caminhadas no parque</label>
          <label>B -<input type="radio" name="resposta2" value="2" onChange={handleChange} required /> Fazendo algo criativo ou trabalhos manuais</label>
          <label>C -<input type="radio" name="resposta2" value="3" onChange={handleChange} required /> Jogando vídeo game ou assistindo a um filme em casa</label>
          <label>D -<input type="radio" name="resposta2" value="4" onChange={handleChange} required /> Encontrando com amigos e saindo para me divertir</label>
        </div>

        <div className="forms-group">
          <label>7- Qual dessas características mais combina com você?</label>
          <label>A -<input type="radio" name="resposta2" value="1" onChange={handleChange} required /> Ira</label>
          <label>B -<input type="radio" name="resposta2" value="2" onChange={handleChange} required /> Sinceridade</label>
          <label>C -<input type="radio" name="resposta2" value="3" onChange={handleChange} required /> Inveja</label>
          <label>D -<input type="radio" name="resposta2" value="4" onChange={handleChange} required /> Medo</label>
        </div>

        <div className="forms-group">
          <label>8- Se você pudesse se teletransportar a qualquer parte do mundo, aonde você iria?</label>
          <label>A -<input type="radio" name="resposta2" value="1" onChange={handleChange} required /> Floresta Amazônica</label>
          <label>B -<input type="radio" name="resposta2" value="2" onChange={handleChange} required /> Roma</label>
          <label>C -<input type="radio" name="resposta2" value="3" onChange={handleChange} required /> Cancún</label>
          <label>D -<input type="radio" name="resposta2" value="4" onChange={handleChange} required /> Patagônia</label>
        </div>

        

        <div className="forms-group">
          <label>9- Qual adjetivo animal descreve sua vida amorosa?</label>
          <label>A -<input type="radio" name="resposta2" value="1" onChange={handleChange} required /> Selvagem</label>
          <label>B -<input type="radio" name="resposta2" value="2" onChange={handleChange} required /> Divertida</label>
          <label>C -<input type="radio" name="resposta2" value="3" onChange={handleChange} required /> Doméstica</label>
          <label>D -<input type="radio" name="resposta2" value="4" onChange={handleChange} required /> Noturna</label>
        </div>

        <div className="forms-group">
          <label>10- Para você, os animais são…</label>
          <label>A -<input type="radio" name="resposta2" value="1" onChange={handleChange} required /> Incríveis</label>
          <label>B -<input type="radio" name="resposta2" value="2" onChange={handleChange} required /> Aceitáveis</label>
          <label>C - <input type="radio" name="resposta2" value="3" onChange={handleChange} required /> Vale a pena proteger</label>
          <label>D -<input type="radio" name="resposta2" value="4" onChange={handleChange} required /> Assim como nós</label>
        </div>

        {/* Adicione as outras perguntas aqui de forma similar */}

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Questionario;
