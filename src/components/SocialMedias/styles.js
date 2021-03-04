import styled from 'styled-components';

export const SocialMediasWrapper = styled.ul`
  & li {
    display: inline;
    margin-right: calc(var(--gap) / 2);
  }

  & a {
    padding: 0;
    transition: filter 0.2s;
  }

  & a:hover {
    filter: brightness(80%);
    transition: filter 0.2s;
    cursor: pointer;
  }

  & img {
    display: inline-block;
    width: 43px;
    height: 43px;
    border-radius: 4px;
    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.2), 0px 4px 5px rgba(0, 0, 0, 0.12),
      0px 2px 4px rgba(0, 0, 0, 0.14);
  }
`;
