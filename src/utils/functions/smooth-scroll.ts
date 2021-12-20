function smoothScroll() {
  const linksInternos = document.querySelectorAll('a[href^="#"]');

  const scrollToSection = (event: any) => {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });
}

export default smoothScroll;
