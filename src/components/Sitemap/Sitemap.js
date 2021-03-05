import React from 'react';

import withData from './withData';

import * as S from './styles';

function Sitemap({ sitemapLinks }) {
  return (
    <S.SitemapWrapper title="Mapa do Site">
      <ul>
        {sitemapLinks.map(({ href, label }, index) => (
          <li key={index}>
            <a href={href}>{label}</a>
          </li>
        ))}
      </ul>
    </S.SitemapWrapper>
  );
}

export default withData(Sitemap);
