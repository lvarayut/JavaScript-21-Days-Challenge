(() => {
  const carBrands = [
    'BMW',
    'Maserati',
    'Mercedes Benz',
    'Ferrari',
    'Toyota',
    'Honda',
    'Hyundai'
  ];
  const searchElem = document.querySelector('.search');

  function selectCarBrand(event) {
    searchElem.value = event.target.innerText;
    clearResults();
  }

  function createUlElement() {
    const ulElem = document.createElement('ul');
    ulElem.classList.add('results');
    return ulElem;
  }

  function createLiElement(carBrand) {
    const liElem = document.createElement('li');
    liElem.innerText = carBrand;
    liElem.onclick = selectCarBrand;
    return liElem;
  }

  function clearResults() {
    const ulElem = document.querySelector('.results');
    if (ulElem) {
      document.body.removeChild(ulElem);
    }
  }

  function createResults(event) {
    clearResults();

    const inputText = event.target.value.toLowerCase();
    const matchedCarBrands = carBrands.filter(carBrand =>
      carBrand.toLowerCase().startsWith(inputText)
    );

    const ulElem = createUlElement();
    matchedCarBrands.forEach(carBrand => {
      const liElem = createLiElement(carBrand);
      ulElem.appendChild(liElem);
    });

    document.body.appendChild(ulElem);
  }

  function run() {
    searchElem.addEventListener('input', createResults);
    document.addEventListener('click', clearResults);
  }

  run();
})();
