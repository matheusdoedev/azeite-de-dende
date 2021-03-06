import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import SocialMedias from '../SocialMedias/SocialMedias';
import ContactForm from '../ContactForm/ContactForm';

import * as C from './styles';

export default function ContatoSection() {
  return (
    <C.ContatoWrapper id="contato" title="Contato">
      <Container>
        <Row>
          <Col xs="12">
            <h2>Contato</h2>
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="7">
            <Row>
              <Col xs="12">
                <h3>Entre em contato conosco</h3>
                <p>
                  - (71) 99999 - 9999
                  <br />- contato@azeitededende.com
                </p>
              </Col>
            </Row>
            <Row>
              <Col xs="12">
                <h3>Endereço</h3>
                <p>
                  - Rua Alfredo de Brito, Pelourinho
                  <br />- Salvador/BA, Brasil
                </p>
              </Col>
            </Row>
            <Row>
              <Col xs="12">
                <h3>Redes Sociais</h3>
                <SocialMedias />
              </Col>
            </Row>
          </Col>
          <Col xs="12" sm="5">
            <ContactForm />
          </Col>
        </Row>
      </Container>
    </C.ContatoWrapper>
  );
}
