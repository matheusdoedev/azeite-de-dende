import styled from 'styled-components';

export const Button = styled.a`
  & {
    display: block;
    padding: 1rem var(--gap);
    background: var(--base-color);
    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.2), 0px 4px 5px rgba(0, 0, 0, 0.12),
      0px 2px 4px rgba(0, 0, 0, 0.14);
    border-radius: 4px;
    max-width: 12rem;
    margin: 0 auto;
    text-align: center;
    transition: filter 0.2s;
  }

  &:hover {
    filter: brightness(80%);
    transition: filter 0.2s;
    cursor: pointer;
  }
`;
