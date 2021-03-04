import styled from 'styled-components';

import mainImg from '../../assets/bg-main';
import mainImgMobile from '../../assets/imgs/bg-main-mobile.jpg';

export const Hero = styled(mainImg)`
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
`;

export const Title = styled.h1`
  margin-top: 9.3125rem;
  margin-bottom: var(--gap);
  color: var(--support-color-1);
  text-align: center;

  @media (max-width: 767.98px) {
    margin-top: var(--gap-lg);
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
  color: var(--support-color-1);
  text-align: center;
  margin: 0 auto calc(var(--gap-sm) + 1rem) auto;
  font-size: 1.5rem;

  @media (max-width: 767.98px) {
    font-size: 1.125rem;
  }
`;
