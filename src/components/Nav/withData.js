import React from 'react';

export default function withData(Component) {
  const navMenu = [
    { name: 'Restaurante', href: '#restaurante' },
    { name: 'Menu', href: '#Menu' },
    { name: 'Sobre', href: '#Sobre' },
    { name: 'Contato', href: '#Contato' },
  ];

  return ({ ...props }) => <Component navMenu={navMenu} {...props} />;
}
