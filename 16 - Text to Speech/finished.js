(() => {
  const message = new SpeechSynthesisUtterance();

  function onVoicesChanged() {
    const voices = speechSynthesis.getVoices();
    const thVoice = voices.find(voice => voice.lang === 'th-TH');
    message.voice = thVoice;
  }

  function onClick(event) {
    message.text = event.target.getAttribute('alt');
    speechSynthesis.speak(message);
  }

  function run() {
    const imgElems = Array.from(document.querySelectorAll('img'));
    imgElems.forEach(imgElem => imgElem.addEventListener('click', onClick));

    speechSynthesis.addEventListener('voiceschanged', onVoicesChanged);
  }
  run();
})();
