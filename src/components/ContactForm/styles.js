import styled from 'styled-components';

export const FormWrapper = styled.form`
  @media (max-width: 767.98px) {
    & h3 {
      margin-top: var(--gap-md);
    }
  }

  & label,
  & input,
  & textarea {
    display: block;
  }

  & label {
    color: var(--support-color-1);
    margin-bottom: var(--gap);
  }

  & input,
  & textarea {
    margin-bottom: var(--gap-sm);
    outline-color: none;
  }

  & input:focus,
  & textarea:focus {
    outline: none;
  }

  & input,
  & textarea {
    width: 100%;
    padding: var(--gap);
    background: var(--support-color-1);
    color: var(--secondary-color-3);
    border: none;
    border-radius: 0.25rem;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.12),
      0px 0px 2px rgba(0, 0, 0, 0.14);
  }

  & textarea {
    height: 9.375rem;
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
