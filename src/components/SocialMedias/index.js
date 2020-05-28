import React from 'react';
import FacebookSvg from '../../assets/desktop/icons/facebook.svg';
import InstagramSvg from '../../assets/desktop/icons/instagram.svg';
import TwitterSvg from '../../assets/desktop/icons/twitter.svg';
import { SocialMediasUl } from './styles';

export default function SocialMedias() {
  return (
    <>
      <SocialMediasUl>
        <li>
          <a href="https://facebook.com" alt="Facebook link" target="BLANK">
            <img src={FacebookSvg} alt="Facebook logo" />
          </a>
        </li>
        <li>
          <a href="https://instagram.com" alt="Instagram link" target="BLANK">
            <img src={InstagramSvg} alt="Instagram logo" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com" alt="Twitter link" target="BLANK">
            <img src={TwitterSvg} alt="Twitter logo" />
          </a>
        </li>
      </SocialMediasUl>
    </>
  );
}
