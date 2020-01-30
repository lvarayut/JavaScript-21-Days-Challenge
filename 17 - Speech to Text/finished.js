(() => {
  window.SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  const recognition = new window.SpeechRecognition();
  const btnElem = document.querySelector('.control');

  function isPausing() {
    return btnElem.classList.contains('record');
  }

  function onResult(event) {
    const textElem = document.querySelector('.text');
    const { transcript } = event.results[0][0];
    textElem.innerText += transcript;
  }

  function onEnd() {
      if (!isPausing()) {
        recognition.start();
      }
  }

  function onClick() {
    if (isPausing()) {
      recognition.start();
      btnElem.classList.remove('record');
      btnElem.classList.add('pause');
    } else {
      recognition.stop();
      btnElem.classList.remove('pause');
      btnElem.classList.add('record');
    }
  }

  function run() {
    recognition.lang = 'th-TH';
    recognition.addEventListener('result', onResult);
    recognition.addEventListener('end', onEnd);

    btnElem.addEventListener('click', onClick);
  }

  run();
})();
