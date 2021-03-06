import React from 'react';

export default function withData(Component) {
  const sobreContent = [
    {
      title: 'Nossa história',
      content:
        'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandejade tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos,',
    },
    {
      title: 'Nossos valores',
      content:
        'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandejade tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos,',
    },
  ];

  return ({ ...props }) => <Component sobreContent={sobreContent} {...props} />;
}
