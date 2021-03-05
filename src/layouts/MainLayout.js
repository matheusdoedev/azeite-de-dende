import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import withStyles from '../providers/withStyles';

import Hero from '../components/Hero/Hero';
import Footer from '../components/Footer/Footer';

import useSmoothScroll from '../hooks/useSmoothScroll';

function MainLayout({ children }) {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  useSmoothScroll();

  return (
    <>
      <Hero data={data} />
      <main>{children}</main>
      <Footer />
    </>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default withStyles(MainLayout);
