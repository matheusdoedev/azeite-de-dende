import React from 'react';

import * as I from './styles';

export default function Input({ name, label, ...props }) {
  return (
    <I.InputBlock>
      <label htmlFor={name}>{label}</label>
      <input type="text" name={name} id={name} {...props} />
    </I.InputBlock>
  );
}
