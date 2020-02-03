(() => {
  const KEY = 'c1b5a49658c7fbb24dc52a9f198ca2a719121d9386a523cf1a0122102ec993a9';
  const loaderElem = document.querySelector('.loader');

  let page = 1;

  async function getImages(page) {
    const result = await fetch(
      `https://api.unsplash.com/photos/?client_id=${KEY}&page=${page}`
    );

    return await result.json();
  }

  async function appendImageElem(image) {
    const imgElem = document.createElement('img');
    imgElem.src = image.urls.small;

    const galleryElem = document.querySelector('.gallery');
    galleryElem.appendChild(imgElem);
  }

  function showLoader() {
    loaderElem.classList.add('visible');
  }

  function hideLoader() {
    loaderElem.classList.remove('visible');
  }

  async function displayImages() {
    showLoader();

    const images = await getImages(page);
    images.forEach(appendImageElem);

    hideLoader();
    page += 1;
  }

  function onScroll() {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight - 10) {
      displayImages();
    }
  }

  function run() {
    document.addEventListener('scroll', onScroll);

    displayImages();
  }

  run();
})();
