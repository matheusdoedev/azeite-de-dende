import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  & {
    padding: var(--gap-md) 0;
    background: var(--secondary-color-4);
  }

  & h3 {
    margin-bottom: var(--gap);
    color: var(--support-color-1);
  }

  & p {
    color: var(--support-color-2);
    line-height: 2.14rem;
  }
`;

export const FooterNav = styled.nav`
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
