import React from 'react';

import * as N from './styles';

import useMenuMobile from '../../hooks/useMenuMobile';

import withData from './withData';

function Nav({ navMenu }) {
  useMenuMobile();

  return (
    <N.NavWrapper>
      <N.MobileMenu data-anime="menu-mobile-toggle"></N.MobileMenu>
      <N.NavMenu data-anime="menu-mobile">
        {navMenu.map(({ name, href }, index) => (
          <N.NavItem key={index}>
            <N.NavLink href={href}>{name}</N.NavLink>
          </N.NavItem>
        ))}
      </N.NavMenu>
    </N.NavWrapper>
  );
}

export default withData(Nav);
