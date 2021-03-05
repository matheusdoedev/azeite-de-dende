import styled from 'styled-components';

export const SitemapWrapper = styled.nav`
  & li {
    margin-bottom: var(--gap);
  }

  & a {
    padding-left: 0;
    color: var(--support-color-2);
  }

  & a:hover {
    color: var(--base-color);
  }
`;
