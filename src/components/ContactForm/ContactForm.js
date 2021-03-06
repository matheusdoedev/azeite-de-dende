import React from 'react';

import Input from '../Input/Input';
import Textarea from '../Textarea/Textarea';

import * as F from './styles';

export default function ContactForm() {
  return (
    <F.FormWrapper title="Entre em contato conosco">
      <h3>Entre em contato conosco</h3>

      <Input name="nome" label="Nome" placeholder="Digite seu nome aqui" />
      <Input name="email" label="E-mail" placeholder="Digite seu email aqui" />
      <Textarea
        name="mensagem"
        label="Mensagem"
        placeholder="Digite sua mensagem aqui"
      />

      <button type="submit">Enviar</button>
    </F.FormWrapper>
  );
}
