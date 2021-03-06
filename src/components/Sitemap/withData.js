import React from 'react';

export default function withData(Component) {
  const sitemapLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Restaurante', href: '#restaurante' },
    { label: 'Menu', href: '#menu' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Contato', href: '#contato' },
  ];

  return ({ ...props }) => <Component sitemapLinks={sitemapLinks} {...props} />;
}
