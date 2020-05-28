import styled from 'styled-components';
import mainImg from '../../assets/desktop/imgs/bg-main.png';
import mainImgMobile from '../../assets/mobile/imgs/bg-main-mobile.jpg';

export const Hero = styled.section`
  & {
    background: url(${mainImg}) no-repeat;
    background-size: cover;
    height: 663px;

    @media (max-width: 767.98px) {
      & {
        height: auto;
        background: url(${mainImgMobile});
        padding-bottom: var(--gap-lg);
      }
    }
  }
`;

export const Title = styled.h1`
  & {
    margin-top: 9.3125rem;
    margin-bottom: var(--gap);
    color: var(--support-color-1);
    text-align: center;

    @media (max-width: 767.98px) {
      margin-top: var(--gap-lg);
    }
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

    @media (max-width: 767.98px) {
      font-size: 1.125rem;
    }
  }
`;

export const Button = styled.a`
  & {
    padding: 1rem var(--gap-sm);
    background: var(--base-color);
    color: var(--secondary-color);
    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.2), 0px 4px 5px rgba(0, 0, 0, 0.12),
      0px 2px 4px rgba(0, 0, 0, 0.14);
    border-radius: 4px;
    margin: 0 auto;
  }
`;
