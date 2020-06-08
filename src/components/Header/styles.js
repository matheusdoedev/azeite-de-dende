import styled from 'styled-components';

export const Brand = styled.a`
  & {
    font-size: 1.5rem;
    color: var(--support-color-1);
    font-family: var(--primary-font);
    font-weight: 700;

    @media (max-width: 575.98px) {
      font-size: 1.25rem;
    }
  }

  &:hover {
    color: var(--support-color-1);
  }
`;

export const HeaderWrapper = styled.header`
  & {
    padding: var(--gap) 0;
  }
`;

export const NavWrapper = styled.nav`
  & {
    display: flex;
    justify-content: flex-end;
  }
`;

export const NavMenu = styled.ul`
  & {
    display: flex;
    justify-content: flex-end;
  }

  @media (max-width: 991.98px) {
    & {
      display: none;
      position: absolute;
      opacity: 0;
      transform: translate(-20px, 0px);
      background: var(--secondary-color-1);
      width: 280px;
      padding: var(--gap);
      top: 50px;
      z-index: 999;
      text-align: left;
      transition: 0.3s ease;
    }

    &.active {
      display: block;
      opacity: 1;
      transform: translate(0px, 0px);
      transition: 0.3s ease;
    }

    &.active li {
      display: block;
      padding: calc(var(--gap) / 5) 0;
    }

    &.active li:last-child {
      margin-bottom: 0;
    }

    &.active a {
      padding-left: 0;
    }

    &.active:hover {
      color: var(--base-color);
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

  @media (max-width: 991.98px) {
    & {
      margin-left: 0;
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

export const MobileMenu = styled.div`
  & {
    display: none;
  }

  @media (max-width: 991.98px) {
    & {
      display: block;
      width: 40px;
      height: 30px;
      padding: 5px 0;
      box-sizing: border-box;
      cursor: pointer;
    }

    &:before,
    &:after {
      content: '';
      display: block;
      height: 4px;
      transition: 0.3s;
    }

    &:before {
      background: var(--support-color-1);
      margin-bottom: 8px;
    }

    &:after {
      box-shadow: 0 4px 0 0 var(--support-color-1),
        0 -4px 0 0 var(--support-color-1);
    }

    &.active:before,
    &.active:after {
      width: 80%;
      background: var(--support-color-1);
      box-shadow: none;
    }

    &.active::before {
      transform: rotate(45deg) translate(7px, 4px);
    }

    &.active::after {
      transform: rotate(-225deg) translate(-4px, 1px);
    }

    ${props => {
      props.onClick = event => {
        const menu = document.querySelector('ul[data-anime="menu-mobile"]');

        event.currentTarget.classList.toggle('active');
        menu.classList.toggle('active');
      };
    }}
  }
`;
