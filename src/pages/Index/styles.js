import styled from 'styled-components';

export const RestauranteSection = styled.section`
  & {
    padding: var(--gap-lg);
    background: var(--secondary-color-1);

    @media (max-width: 767.98px) {
      .row:last-child div {
        margin-bottom: var(--gap);

        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }

  & h2 {
    text-align: center;
    color: var(--support-color-1);
  }

  & h2::after {
    content: '';
    display: block;
    margin: var(--gap) auto 0 auto;
    width: 1.875rem;
    height: 0.25rem;
    background: var(--base-color);
    opacity: 40%;
  }

  & h3 {
    margin-bottom: var(--gap-sm);
    color: var(--support-color-1);
  }

  & p {
    color: var(--support-color-1);

    @media (max-width: 767.98px) {
      margin-bottom: var(--gap);
    }
  }

  & .row {
    margin-bottom: var(--gap-md);
  }

  & .row:last-child {
    margin-bottom: 0;
  }
`;

export const MenuSection = styled.section`
  & {
    padding: var(--gap-lg);
    background: var(--support-color-2);
  }

  & h2 {
    text-align: center;
    color: var(--secondary-color-1);
  }

  & h2::after {
    content: '';
    display: block;
    margin: var(--gap) auto 0 auto;
    width: 1.875rem;
    height: 0.25rem;
    background: var(--secondary-color-1);
    opacity: 40%;
  }

  & .row {
    margin-bottom: 1.875rem;

    &:first-child {
      margin-bottom: var(--gap-md);
    }

    @media (max-width: 767.98px) {
      margin-bottom: 0;
    }
  }

  & .row:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 767.98px) {
    & div.col-sm-4 {
      margin-bottom: var(--gap);
    }

    & .row:last-child div:last-child.col-sm-4 {
      margin-bottom: 0;
    }
`;

export const SobreSection = styled.section`
  & {
    padding: var(--gap-lg);
    background: var(--secondary-color-3);
  }

  & h2 {
    text-align: center;
    color: var(--support-color-1);
  }

  & h2::after {
    content: '';
    display: block;
    margin: var(--gap) auto 0 auto;
    width: 1.875rem;
    height: 0.25rem;
    background: var(--base-color);
    opacity: 40%;
  }

  & h3 {
    margin-bottom: var(--gap);
    color: var(--support-color-1);
  }

  & p {
    color: var(--support-color-2);
  }

  & .row {
    margin-bottom: 1.875rem;
  }

  & .row:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 767.98px) {
    & div.col-sm-5 {
      margin-top: var(--gap-md);
    }
  }
`;

export const ContatoSection = styled.section`
  & {
    padding: var(--gap-lg);
    background: var(--secondary-color-2);
  }

  & h2 {
    text-align: center;
    color: var(--support-color-1);
  }

  & h2::after {
    content: '';
    display: block;
    margin: var(--gap) auto 0 auto;
    width: 1.875rem;
    height: 0.25rem;
    background: var(--base-color);
    opacity: 40%;
  }

  & h3 {
    margin-bottom: var(--gap);
    color: var(--support-color-1);
  }

  & li {
    color: var(--support-color-1);
    line-height: 2.14rem;
  }

  & .row {
    margin-bottom: var(--gap-md);
  }

  & .row:last-child {
    margin-bottom: 0;
  }
`;
