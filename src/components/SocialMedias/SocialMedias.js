import React from 'react';

import withData from './withData';

import * as S from './styles';

function SocialMedias({ socialMedias }) {
  return (
    <S.SocialMediasWrapper title="Redes Sociais">
      {socialMedias.map(({ href, alt, image }, index) => (
        <li key={index}>
          <a href={href} alt={alt} target="BLANK">
            <img src={image} alt={alt} />
          </a>
        </li>
      ))}
    </S.SocialMediasWrapper>
  );
}

export default withData(SocialMedias);
