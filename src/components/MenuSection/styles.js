import styled from 'styled-components';

export const MenuWrapper = styled.section`
  padding: var(--gap-lg) 0;
  background: var(--support-color-2);

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

  & img {
    border-radius: 4px;
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
  }
`;
