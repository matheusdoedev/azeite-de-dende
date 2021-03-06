import styled from 'styled-components';

export const ContatoWrapper = styled.section`
  padding: var(--gap-xl) 0;
  background: var(--secondary-color-2);

  & h2 {
    text-align: center;
    color: var(--support-color-1);
  }

  & h2::after {
    content: '';
    display: block;
    margin: var(--gap) auto var(--gap-lg) auto;
    width: 1.875rem;
    height: 0.25rem;
    background: var(--base-color);
    opacity: 40%;
  }

  & h3 {
    margin-bottom: var(--gap-md);
    color: var(--support-color-1);
  }

  & p {
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
