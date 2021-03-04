import React from 'react';
import PropTypes from 'prop-types';

import * as B from './styles';

function Brand({ content }) {
  return <B.BrandWrapper href="#inicio">{content}</B.BrandWrapper>;
}

Brand.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Brand;
