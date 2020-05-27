import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Col } from 'react-bootstrap';
import {
  HeaderWrapper,
  NavItem,
  Brand,
  NavWrapper,
  NavMenu,
  NavLink,
  MobileMenu,
} from './styles';
import { menuMobile } from '../../scripts/menu-mobile';

const Header = ({ siteTitle }) => {
  return (
    <HeaderWrapper id="inicio">
      <Col xs="8" lg="4">
        <Brand href="#inicio">{siteTitle}</Brand>
      </Col>
      <Col xs="4" lg="8">
        <NavWrapper>
          <MobileMenu onClick={menuMobile}></MobileMenu>
          <NavMenu data-anime="menu-mobile">
            <NavItem>
              <NavLink href="#inicio">Inicio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#restaurante">Restaurante</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#menu">Menu</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#sobre">Sobre</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#contato">Contato</NavLink>
            </NavItem>
          </NavMenu>
        </NavWrapper>
      </Col>
    </HeaderWrapper>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
