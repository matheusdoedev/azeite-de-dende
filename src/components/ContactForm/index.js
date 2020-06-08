import React from 'react';

import { FormWrapper } from './styles';

const ContactForm = () => {
  return (
    <FormWrapper>
      <h3>Entre em contato conosco</h3>
      <label htmlFor="nome">Nome</label>
      <input
        type="text"
        name="nome"
        id="nome"
        placeholder="Digite seu nome aqui"
      />

      <label htmlFor="email">E-mail</label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Digite seu email aqui"
      />

      <label htmlFor="mensagem">Mensagem</label>
      <textarea
        nameme="mensagem"
        id="mensagem"
        placeholder="Digite sua mensagem aqui"
      ></textarea>

      <button type="submit">Enviar</button>
    </FormWrapper>
  );
};

export default ContactForm;
