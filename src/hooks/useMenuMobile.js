import { useEffect } from 'react';

export default function useMenuMobile() {
  useEffect(() => {
    const menu = document.querySelector('ul[data-anime="menu-mobile"]');
    const menuMobileToggle = document.querySelector(
      '[data-anime="menu-mobile-toggle"]'
    );

    function handleMenuMobileActivity() {
      menuMobileToggle.classList.toggle('active');
      menu.classList.toggle('active');
    }

    menuMobileToggle.addEventListener('click', handleMenuMobileActivity);
  });
}
