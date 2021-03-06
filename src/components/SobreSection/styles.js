import styled from 'styled-components';

export const SobreWrapper = styled.section`
  padding: var(--gap-xl) 0;
  background: var(--secondary-color-3);

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
    margin-bottom: var(--gap);
    color: var(--support-color-1);
  }

  & p {
    color: var(--support-color-2);
  }

  & img {
    border-radius: 4px;
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
