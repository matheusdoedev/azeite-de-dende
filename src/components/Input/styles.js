import styled from 'styled-components';

export const InputBlock = styled.div`
  & > label,
  & > input {
    display: block;
  }

  & > label {
    color: var(--support-color-1);
    margin-bottom: var(--gap);
  }

  & > input {
    margin-bottom: var(--gap-sm);
    outline-color: none;
  }

  & > input:focus,
  :focus {
    outline: none;
  }

  & > input {
    width: 100%;
    padding: var(--gap);
    background: var(--support-color-1);
    color: var(--secondary-color-3);
    border: none;
    border-radius: 0.25rem;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.12),
      0px 0px 2px rgba(0, 0, 0, 0.14);
  }
`;
