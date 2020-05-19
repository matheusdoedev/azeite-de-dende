import styled from 'styled-components';

export const RestauranteSection = styled.section`
  & {
    padding: var(--gap-lg);
    background: var(--secondary-color-1);
  }

  & h2 {
    text-align: center;
    color: var(--support-color-1);
  }

  & h2::after {
    content: '';
    display: block;
    margin: var(--gap) auto var(--gap-md) auto;
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
  }

  & .row {
    margin-bottom: var(--gap-sm);
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
    margin: var(--gap) auto var(--gap-md) auto;
    width: 1.875rem;
    height: 0.25rem;
    background: var(--secondary-color-1);
    opacity: 40%;
  }

  & .row {
    margin-bottom: 1.875rem;
  }

  & .row:last-child {
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
    margin: var(--gap) auto var(--gap-md) auto;
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
`;
