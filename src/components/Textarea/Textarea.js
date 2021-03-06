import React from 'react';

import * as T from './styles';

export default function Textarea({ name, label, ...props }) {
  return (
    <T.TextareaBlock>
      <label htmlFor={name}>{label}</label>
      <textarea type="text" name={name} id={name} {...props} />
    </T.TextareaBlock>
  );
}
