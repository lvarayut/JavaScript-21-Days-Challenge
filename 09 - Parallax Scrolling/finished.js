(() => {
  function onScroll() {
    const sunElem = document.querySelector('.moon');
    const wishElem = document.querySelector('.wish');

    sunElem.style.transform = `translate(${window.scrollY * 0.7}%, ${window.scrollY * -0.7}%)`;
    wishElem.style.transform = `translateY(${window.scrollY * -1.2}%)`;
  }

  function run() {
    document.addEventListener('scroll', onScroll);
  }
  run();
})();
