import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import GlobalStyles from '../../styles/main/styles';
import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
import { Container, Col, Row } from 'react-bootstrap';
import { Button } from './../../styles/objects/buttons';
import { Hero, Title, Tagline } from './styles';
// if (typeof window !== 'undefined') {
//   const { SmoothScroll } = require('../../scripts/smooth-scroll');
// }

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

  useEffect(() => {
    const linksInternos = document.querySelectorAll('a[href^="#"]');

    const scrollToSection = event => {
      event.preventDefault();
      const href = event.currentTarget.getAttribute('href');
      const section = document.querySelector(href);

      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    };

    linksInternos.forEach(link => {
      link.addEventListener('click', scrollToSection);
    });
  });
  // scripts
  // new SmoothScroll('a[href^="#"]');

  return (
    <>
      <GlobalStyles />

      <Hero id="inicio">
        <Container>
          <Row>
            <Col xs="12">
              <Header siteTitle={data.site.siteMetadata.title} />
            </Col>
            <Col xs="12">
              <Title>{data.site.siteMetadata.title}</Title>
              <Tagline>
                Restaurante de comida baiana no Pelourinho, centro histórico da
                cidade de Salvador.
              </Tagline>
              <Button
                href="#restaurante"
                color="var(--secondary-color)"
                background="var(--base-color)"
              >
                Veja mais sobre
              </Button>
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
