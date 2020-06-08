const menuMobile = event => {
  const menu = document.querySelector('ul[data-anime="menu-mobile"]');

  event.currentTarget.classList.toggle('active');
  menu.classList.toggle('active');
};

export default menuMobile;
