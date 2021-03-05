import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import MenuImg1 from '../../assets/menu-img-1';
import MenuImg2 from '../../assets/menu-img-2';
import MenuImg3 from '../../assets/menu-img-3';
import MenuImg4 from '../../assets/menu-img-4';
import MenuImg5 from '../../assets/menu-img-5';
import MenuImg6 from '../../assets/menu-img-6';
import MenuImg7 from '../../assets/menu-img-7';
import MenuImg8 from '../../assets/menu-img-8';
import MenuImg9 from '../../assets/menu-img-9';

import * as M from './styles';

export default function MenuSection() {
  return (
    <M.MenuWrapper id="menu" title="Menu">
      <Container>
        <Row>
          <Col xs="12">
            <h2>Menu</h2>
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="4">
            <MenuImg1 alt="Muqueca de peixe" />
          </Col>
          <Col xs="12" sm="4">
            <MenuImg2 alt="Vatapá" />
          </Col>
          <Col xs="12" sm="4">
            <MenuImg3 alt="Dobradinha" />
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="4">
            <MenuImg4 alt="Acarajé" />
          </Col>
          <Col xs="12" sm="4">
            <MenuImg5 alt="Sarapatél" />
          </Col>
          <Col xs="12" sm="4">
            <MenuImg6 alt="Feijoada" />
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="4">
            <MenuImg7 alt="Feijão Fradinho" />
          </Col>
          <Col xs="12" sm="4">
            <MenuImg8 alt="Xinxim de Galinha" />
          </Col>
          <Col xs="12" sm="4">
            <MenuImg9 alt="Carurú" />
          </Col>
        </Row>
      </Container>
    </M.MenuWrapper>
  );
}
