import styled from 'styled-components';

export const RestauranteSection = styled.section`
  & {
    padding: var(--gap-lg);
    background: var(--secondary-color-1);
  }

  & h2 {
    margin-bottom: var(--gap-md);
    text-align: center;
    color: var(--support-color-1);
  }

  & h2::after {
    content: '';
    display: block;
    margin: var(--gap) auto var(--gap) auto;
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
    font-size: 1em;
  }

  & .row {
    margin-bottom: var(--gap-sm);
  }
`;
