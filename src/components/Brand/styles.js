import styled from 'styled-components';

export const BrandWrapper = styled.a`
  font-size: 1.5rem;
  color: var(--support-color-1);
  font-family: var(--primary-font);
  font-weight: 700;

  @media (max-width: 575.98px) {
    font-size: 1.25rem;
  }

  &:hover {
    color: var(--support-color-1);
  }
`;
