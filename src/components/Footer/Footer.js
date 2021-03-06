import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Sitemap from '../Sitemap/Sitemap';
import SocialMedias from '../SocialMedias/SocialMedias';

import * as F from './styles';

export default function Footer() {
  return (
    <F.FooterWrapper title="Rodapé">
      <Container>
        <Row>
          <Col xs="12" sm="4">
            <h3>Mapa do Site</h3>
            <Sitemap />
          </Col>
          <Col xs="12" sm="4">
            <h3>Contatos</h3>
            <p>
              - contato@azeitededende.com
              <br />- (71) 99999 - 9999
            </p>
          </Col>
          <Col xs="12" sm="4">
            <h3>Azeite de Dendê</h3>
            <SocialMedias />
          </Col>
        </Row>
        <Row>
          <Col xs="12">
            <F.Copy>
              Made by
              <a href="https://matheusdoe.com" target="BLANK">
                matheusdoedev
              </a>
              <br />
              Azeite de Dendê 2020 @ Todos os direitos reservados
              <sup>&copy;</sup>.
            </F.Copy>
          </Col>
        </Row>
      </Container>
    </F.FooterWrapper>
  );
}
