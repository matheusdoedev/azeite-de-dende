import styled from 'styled-components';
import mainImg from '../../assets/desktop/imgs/bg-main.jpg';

export const Hero = styled.section`
  & {
    background: url(${mainImg});
    height: 663px;
  }
`;

export const Title = styled.h1`
  & {
    margin-top: 9.3125rem;
    margin-bottom: var(--gap);
    color: var(--support-color-1);
    text-align: center;
  }

  &::after {
    content: '';
    display: block;
    margin: var(--gap) auto var(--gap) auto;
    width: 1.875rem;
    height: 0.25rem;
    background: var(--base-color);
    opacity: 40%;
  }
`;

export const Tagline = styled.p`
  & {
    color: var(--support-color-1);
    text-align: center;
    margin: 0 auto calc(var(--gap-sm) + 1rem) auto;
    font-size: 1.5rem;
  }
`;

export const Button = styled.a`
  & {
    padding: 1rem var(--gap-sm);
    background: var(--base-color);
    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.2), 0px 4px 5px rgba(0, 0, 0, 0.12),
      0px 2px 4px rgba(0, 0, 0, 0.14);
    border-radius: 4px;
    margin: 0 auto;
  }
`;
