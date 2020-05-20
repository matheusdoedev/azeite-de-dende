import React from 'react';

import { FormWrapper } from './styles';

export default function ContactForm() {
  return (
    <FormWrapper>
      <label>Nome</label>
      <input
        type="text"
        name="nome"
        id="nome"
        placeholder="Digite seu nome aqui"
      />

      <label>Nome</label>
      <input
        type="email"
        name="nome"
        id="nome"
        placeholder="Digite seu email aqui"
      />

      <label>Mensagem</label>
      <textarea
        name="mensagem"
        id="mensagem"
        placeholder="Digite sua mensagem aqui"
      ></textarea>

      <button type="submit">Enviar</button>
    </FormWrapper>
  );
}
