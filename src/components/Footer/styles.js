import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  padding: var(--gap-md) 0;
  background: var(--secondary-color-4);

  & h3 {
    margin: var(--gap-sm) 0 var(--gap) 0;
    color: var(--support-color-1);
  }

  @media (max-width: 767.98px) {
    & * {
      text-align: center;
    }

    & h3:last-child {
      margin-top: var(--gap);
    }
  }

  & p {
    color: var(--support-color-2);
    line-height: 2.14rem;
  }
`;

export const Copy = styled.p`
  margin-top: var(--gap-sm);
  max-width: 100%;
  filter: brightness(70%);
  transition: 0.3s;

  & a {
    color: var(--base-color);

    :hover {
      filter: brightness(85%);
      transition: 0.3s;
    }
  }
`;
