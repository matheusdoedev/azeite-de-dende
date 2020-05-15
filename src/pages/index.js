import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO
      title="Inicio"
      lang="pt-br"
      description="Restaurante Azeite de Dênde"
    />
    <h1>Hello World</h1>
  </Layout>
);

export default IndexPage;
