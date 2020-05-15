import styled, { createGlobalStyle } from 'styled-components';
import { Link } from 'gatsby';

export const Brand = styled(Link)`
  & {
    font-size: 1.5rem;
    color: var(--support-color-1);
    font-family: var(--primary-font);
    font-weight: 700;
  }

  &:hover {
    color: var(--support-color-1);
  }
`;

export const HeaderWrapper = styled.header`
  & {
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
    padding: var(--gap) 0;
  }
`;

export const NavWrapper = styled.nav`
  & {
    justify-self: flex-end;
  }
`;

export const NavMenu = styled.ul`
  & {
    display: flex;
    justify-content: flex-end;
  }

  @media (max-width: 768px) {
    & {
      display: block;
    }
  }
`;

export const NavItem = styled.li`
  & {
    display: inline;
    align-self: flex-end;
    margin-left: var(--gap);
  }

  &:last-child a {
    padding-right: 0;
  }

  &:first-child a {
    padding-left: 0;
  }

  @media (max-width: 768px) {
    & {
      display: block;
      padding: 0px;
      margin: 0px;
      border-top: 2px solid;
    }
  }
`;

export const NavLink = styled.a`
  & {
    letter-spacing: 0.05em;
    color: var(--support-color-1);
    transition: 0.2s;
  }

  &:hover {
    color: var(--base-color);
    transition: 0.2s;
  }
`;
