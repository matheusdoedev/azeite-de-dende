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
          <a href="" alt="Facebook link">
            <img src={FacebookSvg} alt="Facebook logo" />
          </a>
        </li>
        <li>
          <a href="" alt="Instagram link">
            <img src={InstagramSvg} alt="Instagram logo" />
          </a>
        </li>
        <li>
          <a href="" alt="Twitter link">
            <img src={TwitterSvg} alt="Twitter logo" />
          </a>
        </li>
      </SocialMediasUl>
    </>
  );
}
