import React from 'react';

import { FormWrapper } from './styles';

export default function ContactForm() {
  return (
    <FormWrapper>
      <label for="nome">Nome</label>
      <input
        type="text"
        name="nome"
        id="nome"
        placeholder="Digite seu nome aqui"
      />

      <label for="email">E-mail</label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Digite seu email aqui"
      />

      <label for="mensagem">Mensagem</label>
      <textarea
        name="mensagem"
        id="mensagem"
        placeholder="Digite sua mensagem aqui"
      ></textarea>

      <button type="submit">Enviar</button>
    </FormWrapper>
  );
}
