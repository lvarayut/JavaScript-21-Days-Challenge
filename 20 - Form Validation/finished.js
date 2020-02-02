(() => {
  function displayError(elem, message) {
    const smallElem = elem.parentElement.querySelector('small');
    smallElem.innerText = message;
    elem.classList.add('invalid');
    form.classList.add('invalid');
  }

  function resetState(elem) {
    const smallElem = elem.parentElement.querySelector('small');
    smallElem.innerText = '';
    elem.classList.remove('invalid');
    form.classList.remove('invalid');
  }

  function validateLength(elem, min, max) {
    const val = elem.value;
    if (val.length < min || val.length > max) {
      const elemName = elem.getAttribute('name');
      displayError(
        elem,
        `${elemName} length must be between ${min} and ${max}`
      );
    }
  }

  function validateEmail(emailElem) {
    const regex = /\S+@\S+\.\S+/;
    if (!regex.test(emailElem.value)) {
      displayError(emailElem, 'Email must be valid');
    }
  }

  function displaySuccess() {
    document.body.innerHTML = '';

    const pElem = document.createElement('p');
    pElem.innerText = 'You have been logged in successfully!!';
    pElem.classList.add('success');
    document.body.appendChild(pElem);
  }

  function validateForm(event) {
    event.preventDefault();

    const emailElem = document.getElementById('email');
    const passwordElem = document.getElementById('password');

    resetState(emailElem);
    resetState(passwordElem);

    validateLength(emailElem, 10, 20);
    validateLength(passwordElem, 8, 20);

    validateEmail(emailElem);

    const isValidFrom = !form.classList.contains('invalid');
    if (isValidFrom) {
      displaySuccess();
    }
  }

  function run() {
    const formElem = document.getElementById('form');
    formElem.addEventListener('submit', validateForm);
  }

  run();
})();
