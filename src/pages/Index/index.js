import React from 'react';
import Layout from '../../components/Layout/index';
import SEO from '../../components/seo';
import { Container, Col, Row } from 'react-bootstrap';
import { RestauranteSection } from './styles';

// imgs
import RestauranteImg1 from '../../assets/desktop/restaurante-img-1';
import RestauranteImg2 from '../../assets/desktop/restaurante-img-2';

const IndexPage = () => {
  return (
    <Layout>
      <SEO
        title="Inicio"
        lang="pt-br"
        description="Restaurante Azeite de Dênde"
      />

      {/* content */}
      <RestauranteSection>
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
                O restaurante Azeite de Dênde conta com uma grande
                infraestrutura para atender bem seu cliente. <br />
                Contamos com um enorme espaço para acomodação, bem decorado, e
                uma cozinha sofisticada.
              </p>
            </Col>
            <Col xs="12" sm="5">
              <RestauranteImg1 alt="Imagem do restaurante" />
            </Col>
          </Row>
          <Row>
            <Col xs="12" sm="7">
              <h3>No centro histórico de Salvador</h3>
              <p>
                O restaurante Azeite de Dênde conta com uma grande
                infraestrutura para atender bem seu cliente. <br />
                Contamos com um enorme espaço para acomodação, bem decorado, e
                uma cozinha sofisticada.
              </p>
            </Col>
            <Col xs="12" sm="5">
              <RestauranteImg2 alt="Imagem do restaurante" />
            </Col>
          </Row>
          <Row></Row>
        </Container>
      </RestauranteSection>

      <section>
        <Row>
          <Col xs="12">
            <h2>Menu</h2>
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="4"></Col>
          <Col xs="12" sm="4"></Col>
          <Col xs="12" sm="4"></Col>
        </Row>
      </section>
    </Layout>
  );
};

export default IndexPage;
