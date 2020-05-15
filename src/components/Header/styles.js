import styled, { createGlobalStyle } from 'styled-components';
import { Link } from 'gatsby';

export const Brand = styled(Link)`
  & {
    font-size: 1.5rem;
    color: var(--support-color-1);
    font-family: var(--primary-font);
  }
`;

export const HeaderWrapper = styled.header`
  & {
    padding: var(--gap) 0;
    align-items: center;
  }
`;

export const NavItem = styled.li`
  & {
    display: inline;
  }
`;
