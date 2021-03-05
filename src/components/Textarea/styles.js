import styled from 'styled-components';

export const TextareaBlock = styled.div`
  & > label,
  & > textarea {
    display: block;
  }

  & > label {
    color: var(--support-color-1);
    margin-bottom: var(--gap);
  }

  & > textarea {
    margin-bottom: var(--gap-sm);
    outline-color: none;
  }

  & > input:focus,
  & > textarea:focus {
    outline: none;
  }

  & > textarea {
    width: 100%;
    padding: var(--gap);
    background: var(--support-color-1);
    color: var(--secondary-color-3);
    border: none;
    border-radius: 0.25rem;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.12),
      0px 0px 2px rgba(0, 0, 0, 0.14);
  }

  & > textarea {
    height: 9.375rem;
  }
`;
