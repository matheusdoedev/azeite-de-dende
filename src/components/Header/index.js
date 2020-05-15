import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { HeaderWrapper, NavItem, Brand } from './styles';

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <Container>
      <Row>
        <Col xs="4">
          <Brand>{siteTitle}</Brand>
        </Col>
        <Col xs="4">
          <nav>
            <ul>
              <NavItem>
                <a href="#">Inicio</a>
              </NavItem>
              <NavItem>
                <a href="#">Sobre</a>
              </NavItem>
              <NavItem>
                <a href="#">Menu</a>
              </NavItem>
              <NavItem>
                <a href="#">FAQ</a>
              </NavItem>
              <NavItem>
                <a href="#">Contatos</a>
              </NavItem>
            </ul>
          </nav>
        </Col>
      </Row>
    </Container>
  </HeaderWrapper>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
