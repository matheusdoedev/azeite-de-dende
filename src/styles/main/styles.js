import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Colors from './../settings/colors';
import Gaps from './../settings/gaps';
import Fonts from './../settings/fonts';
import Normalize from './../generic/normalize';
import Reset from './../generic/reset';
import Elements from './../base/elements';

const GlobalStyles = () => {
  return (
    <>
      <Colors />
      <Gaps />
      <Fonts />
      <Normalize />
      <Reset />
      <Elements />
    </>
  );
};

export default GlobalStyles;
