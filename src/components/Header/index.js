import PropTypes from 'prop-types';
import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import {
  HeaderWrapper,
  NavItem,
  Brand,
  NavWrapper,
  NavMenu,
  NavLink,
} from './styles';

const Header = ({ siteTitle }) => (
  <HeaderWrapper id="inicio">
    <Col xs="12" sm="4">
      <Brand>{siteTitle}</Brand>
    </Col>
    <Col xs="12" sm="8">
      <NavWrapper>
        <NavMenu>
          <NavItem>
            <NavLink href="#inicio">Inicio</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Sobre</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Menu</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">FAQ</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Contatos</NavLink>
          </NavItem>
        </NavMenu>
      </NavWrapper>
    </Col>
  </HeaderWrapper>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;