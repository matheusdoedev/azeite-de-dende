import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import SobreImg from '../../assets/sobre-img';

import withData from './withData';

import * as S from './styles';

function SobreSection({ sobreContent }) {
  return (
    <S.SobreWrapper id="sobre" title="Sobre">
      <Container>
        <Row>
          <Col xs="12">
            <h2>Sobre</h2>
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="6">
            {sobreContent.map(({ title, content }, index) => (
              <Row key={index}>
                <Col xs="12">
                  <h3>{title}</h3>
                  <p>{content}</p>
                </Col>
              </Row>
            ))}
          </Col>
          <Col xs="12" sm="6">
            <SobreImg alt="Moqueca de peixe" />
          </Col>
        </Row>
      </Container>
    </S.SobreWrapper>
  );
}

export default withData(SobreSection);
