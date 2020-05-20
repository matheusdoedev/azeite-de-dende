import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Colors from './../../styles/settings/colors';
import Gaps from './../../styles/settings/gaps';
import Fonts from './../../styles/settings/fonts';
import Normalize from './../../styles/generic/normalize';
import Reset from './../../styles/generic/reset';
import Elements from './../../styles/base/elements';
import { Button } from './../../styles/objects/buttons';
import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
import { Hero, Title, Tagline } from './styles';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Colors />
      <Gaps />
      <Fonts />
      <Normalize />
      <Reset />
      <Elements />

      <Hero>
        <Container>
          <Header siteTitle={data.site.siteMetadata.title} />
          <Row>
            <Col xs="12">
              <Title>{data.site.siteMetadata.title}</Title>
              <Tagline>
                Restaurante de comida baiana no Pelourinho, centro
                <br /> histórico da cidade de Salvador.
              </Tagline>
              <Button>Veja mais sobre</Button>
            </Col>
          </Row>
        </Container>
      </Hero>
      <main>{children}</main>
      <Footer />

      <script
        src="https://unpkg.com/react/umd/react.production.min.js"
        crossorigin
      ></script>

      <script
        src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
        crossorigin
      ></script>

      <script
        src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
        crossorigin
      ></script>

      <script>var Alert = ReactBootstrap.Alert;</script>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
