import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SocialMedias from '../../components/SocialMedias/index';

import { FooterWrapper, FooterNav } from './styles';

export default function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <Row>
          <Col xs="12" sm="4">
            <h3>Mapa do Site</h3>
            <FooterNav>
              <ul>
                <li>
                  <a href="#inicio">Inicio</a>
                </li>
                <li>
                  <a href="#restaurante">Restaurante</a>
                </li>
                <li>
                  <a href="#menu">Menu</a>
                </li>
                <li>
                  <a href="#sobre">Sobre</a>
                </li>
                <li>
                  <a href="#contato">Contato</a>
                </li>
              </ul>
            </FooterNav>
          </Col>
          <Col xs="12" sm="4">
            <h3>Mapa do Site</h3>
            <p>
              - contato@azeitededende.com
              <br />- (71) 99999 - 9999
            </p>
          </Col>
          <Col xs="12" sm="4">
            <h3>Azeite de Dênde</h3>
            <SocialMedias />
          </Col>
        </Row>
      </Container>
    </FooterWrapper>
  );
}
