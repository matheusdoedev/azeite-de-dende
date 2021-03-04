import React from 'react';

import FacebookSvg from '../../assets/icons/facebook.svg';
import InstagramSvg from '../../assets/icons/instagram.svg';
import TwitterSvg from '../../assets/icons/twitter.svg';

export default function withData(Component) {
  const socialMedias = [
    { href: 'https://facebook.com', alt: 'Facebook', image: FacebookSvg },
    { href: 'https://instagram.com', alt: 'Instagram', image: InstagramSvg },
    { href: 'https://twitter.com', alt: 'Twitter', image: TwitterSvg },
  ];

  return ({ ...props }) => <Component socialMedias={socialMedias} {...props} />;
}
