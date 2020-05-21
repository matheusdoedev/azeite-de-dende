export class SmoothScroll {
  constructor(seletor) {
    this.seletor = seletor;
  }

  element() {
    const linksInternos = document.querySelectorAll(this.seletor);

    const scrollToSection = event => {
      event.preventDefault();
      const href = event.currentTarget.getAttribute('href');
      const section = document.querySelector(href);

      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    };

    linksInternos.forEach(link => {
      link.addEventListener('click', scrollToSection);
    });
  }
}
