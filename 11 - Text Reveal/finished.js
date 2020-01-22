(() => {
  function onScroll() {
    const sectionElems = Array.from(document.querySelectorAll('section'));

    sectionElems.forEach(sectionElem => {
      const imgElem = sectionElem.querySelector('img');
      const textElem = sectionElem.querySelector('.text');

      const revealPosition = imgElem.offsetTop + imgElem.offsetHeight / 10;
      const scrollPosition = window.pageYOffset;

      if (scrollPosition >= revealPosition) {
        textElem.classList.add('reveal');
      }
    });
  }

  function run() {
    document.addEventListener('scroll', onScroll);
  }

  run();
})();
