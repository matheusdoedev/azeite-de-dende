import React from 'react';

export default function withData(Component) {
  const navMenu = [
    { name: 'Restaurante', href: '#restaurante' },
    { name: 'Menu', href: '#menu' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Contato', href: '#contato' },
  ];

  return ({ ...props }) => <Component navMenu={navMenu} {...props} />;
}
