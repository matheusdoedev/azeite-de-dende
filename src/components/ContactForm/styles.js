import styled from 'styled-components';

export const FormWrapper = styled.form`
  @media (max-width: 767.98px) {
    & h3 {
      margin-top: var(--gap-md);
    }
  }

  & button {
    background: var(--base-color);
    color: var(--secondary-color-1);
    border: none;
    border-radius: 0.25rem;
    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.2), 0px 4px 5px rgba(0, 0, 0, 0.12),
      0px 2px 4px rgba(0, 0, 0, 0.14);
    width: 10.875rem;
    padding: 0.9375rem;
    transition: filter 0.2s;
  }

  & button:hover {
    filter: brightness(80%);
    transition: filter 0.2s;
    cursor: pointer;
  }
`;
