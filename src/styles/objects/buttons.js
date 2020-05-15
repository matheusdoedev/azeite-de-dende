import styled from 'styled-components';
import { Button } from 'react-bootstrap';

export const Button = styled(Button)`
  & {
    color: var(--secondary-color);
    background: var(--base-color);
  }
`;
