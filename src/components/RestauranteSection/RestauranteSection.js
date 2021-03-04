import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import RestauranteImg1 from '../../assets/restaurante-img-1';
import RestauranteImg2 from '../../assets/restaurante-img-2';
import RestauranteImg3 from '../../assets/restaurante-img-3';
import RestauranteImg4 from '../../assets/restaurante-img-4';
import RestauranteImg5 from '../../assets/restaurante-img-5';

import * as R from './styles';

export default function RestauranteSection() {
  return (
    <R.RestauranteSection id="restaurante">
      <Container>
        <Row>
          <Col xs="12">
            <h2>Restaurante</h2>
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="7">
            <h3>Infraestrutura</h3>
            <p>
              O restaurante Azeite de Dênde conta com uma grande infraestrutura
              para atender bem seu cliente. <br />
              Contamos com um enorme espaço para acomodação, bem decorado, e uma
              cozinha sofisticada.
            </p>
          </Col>
          <Col xs="12" sm="5">
            <RestauranteImg1 alt="Espaço interno do restaurante" />
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="7">
            <h3>No centro histórico de Salvador</h3>
            <p>
              O restaurante Azeite de Dênde conta com uma grande infraestrutura
              para atender bem seu cliente. <br />
              Contamos com um enorme espaço para acomodação, bem decorado, e uma
              cozinha sofisticada.
            </p>
          </Col>
          <Col xs="12" sm="5">
            <RestauranteImg2 alt="Pelourinho" />
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="4">
            <RestauranteImg3 alt="Pelourinho" />
          </Col>
          <Col xs="12" sm="4">
            <RestauranteImg4 alt="Interior do restaurante, area principal" />
          </Col>
          <Col xs="12" sm="4">
            <RestauranteImg5 alt="Interior do restaurante, area premium" />
          </Col>
        </Row>
      </Container>
    </R.RestauranteSection>
  );
}
