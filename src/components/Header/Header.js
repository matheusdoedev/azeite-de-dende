import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';

import Brand from '../Brand/Brand';
import Nav from '../Nav/Nav';

import * as H from './styles';

const Header = ({ siteTitle }) => {
  return (
    <H.HeaderWrapper>
      <Row>
        <Col xs="8" lg="4">
          <Brand content={siteTitle} />
        </Col>
        <Col xs="4" lg="8">
          <Nav />
        </Col>
      </Row>
    </H.HeaderWrapper>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
