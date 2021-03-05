import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Colors from './../styles/settings/colors';
import Gaps from './../styles/settings/gaps';
import Fonts from './../styles/settings/fonts';
import Normalize from './../styles/generic/normalize';
import Reset from './../styles/generic/reset';
import Elements from './../styles/base/elements';

export default function ProvideStyles(Component) {
  return ({ ...props }) => (
    <>
      <Colors />
      <Gaps />
      <Fonts />
      <Normalize />
      <Reset />
      <Elements />

      <Component {...props} />
    </>
  );
}
