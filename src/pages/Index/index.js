import React from 'react';
import Layout from '../../components/Layout/index';
import SEO from '../../components/seo';
import { Container, Col, Row } from 'react-bootstrap';
import {
  RestauranteSection,
  MenuSection,
  SobreSection,
  ContatoSection,
} from './styles';
import SocialMedias from './../../components/SocialMedias/index';
import ContactForm from './../../components/ContactForm/index';

// imgs
import RestauranteImg1 from '../../assets/desktop/restaurante-img-1';
import RestauranteImg2 from '../../assets/desktop/restaurante-img-2';
import RestauranteImg3 from '../../assets/desktop/restaurante-img-3';
import RestauranteImg4 from '../../assets/desktop/restaurante-img-4';
import RestauranteImg5 from '../../assets/desktop/restaurante-img-5';
import MenuImg1 from '../../assets/desktop/menu-img-1';
import MenuImg2 from '../../assets/desktop/menu-img-2';
import MenuImg3 from '../../assets/desktop/menu-img-3';
import MenuImg4 from '../../assets/desktop/menu-img-4';
import MenuImg5 from '../../assets/desktop/menu-img-5';
import MenuImg6 from '../../assets/desktop/menu-img-6';
import MenuImg7 from '../../assets/desktop/menu-img-7';
import MenuImg8 from '../../assets/desktop/menu-img-8';
import MenuImg9 from '../../assets/desktop/menu-img-9';
import SobreImg from '../../assets/desktop/sobre-img';

const IndexPage = () => {
  return (
    <Layout>
      <SEO
        title="Inicio"
        lang="pt-br"
        description="Restaurante Azeite de Dênde"
      />

      {/* content */}
      <RestauranteSection id="restaurante">
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
              <RestauranteImg1 alt="Espaço interno do restaurante" />
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
      </RestauranteSection>

      <MenuSection id="menu">
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
      </MenuSection>

      <SobreSection id="sobre">
        <Container>
          <Row>
            <Col xs="12">
              <h2>Sobre</h2>
            </Col>
          </Row>
          <Row>
            <Col xs="12" sm="7">
              <Row>
                <Col xs="12">
                  <h3>Nossa história</h3>
                  <p>
                    Lorem Ipsum é simplesmente uma simulação de texto da
                    indústria tipográfica e de impressos, e vem sendo utilizado
                    desde o século XVI, quando um impressor desconhecido pegou
                    uma bandeja de tipos e os embaralhou para fazer um livro de
                    modelos de tipos. Lorem Ipsum sobreviveu não só a cinco
                    séculos,
                  </p>
                </Col>
              </Row>
              <Row>
                <Col xs="12">
                  <h3>Nossos valores</h3>
                  <p>
                    Lorem Ipsum é simplesmente uma simulação de texto da
                    indústria tipográfica e de impressos, e vem sendo utilizado
                    desde o século XVI, quando um impressor desconhecido pegou
                    uma bandeja de tipos e os embaralhou para fazer um livro de
                    modelos de tipos. Lorem Ipsum sobreviveu não só a cinco
                    séculos,
                  </p>
                </Col>
              </Row>
            </Col>
            <Col xs="12" sm="5">
              <SobreImg alt="Moqueca de peixe"></SobreImg>
            </Col>
          </Row>
        </Container>
      </SobreSection>

      <ContatoSection>
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
                  <ul>
                    <li>- (71) 99999 - 9999</li>
                    <li>- contato@azeitededende.com</li>
                  </ul>
                </Col>
              </Row>
              <Row>
                <Col xs="12">
                  <h3>Endereço</h3>
                  <ul>
                    <li>- Rua Alfredo de Brito, Pelourinho</li>
                    <li>- Salvador/BA, Brasil</li>
                  </ul>
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
      </ContatoSection>
    </Layout>
  );
};

export default IndexPage;
