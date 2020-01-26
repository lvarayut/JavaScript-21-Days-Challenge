(() => {
  let currentIndex = 0;

  function slideImage(imageElem) {
    imageElem.scrollIntoView({ behavior: 'smooth' });
  }

  function displayImage(imageElems, newIndex) {
    const lastIndex = imageElems.length - 1;

    if (newIndex < 0) {
      currentIndex = lastIndex;
    } else if (newIndex > lastIndex) {
      currentIndex = 0;
    } else {
      currentIndex = newIndex;
    }

    slideImage(imageElems[currentIndex]);
  }

  function run() {
    const imageElems = document.querySelectorAll('img');
    const previousBtnElem = document.querySelector('.previous');
    const nextBtnElem = document.querySelector('.next');

    previousBtnElem.addEventListener('click', () => displayImage(imageElems, currentIndex - 1));
    nextBtnElem.addEventListener('click', () => displayImage(imageElems, currentIndex + 1));
  }

  run();
})();
