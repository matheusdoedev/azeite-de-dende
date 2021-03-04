import styled from 'styled-components';

export const RestauranteSection = styled.section`
  padding: var(--gap-lg) 0;
  background: var(--secondary-color-1);

  @media (max-width: 767.98px) {
    .row:last-child div {
      margin-bottom: var(--gap);

      &:last-child {
        margin-bottom: 0;
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
