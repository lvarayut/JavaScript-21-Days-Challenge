(() => {
  const audioElem = document.querySelector('audio');
  const playBtnElem = document.querySelector('.play');
  const progressBarElem = document.querySelector('.progress-bar');
  const startTimeELem = document.querySelector('.start-time');
  const endTimeElem = document.querySelector('.end-time');

  function getDuration(time) {
    const minute = Math.floor(time / 60 % 60).toString();
    const second = Math.floor(time % 60)
      .toString()
      .padStart(2, '0');
    return `${minute}:${second}`;
  }

  function onClick() {
    if (audioElem.paused) {
      audioElem.play();
      playBtnElem.className = 'pause';
    } else {
      audioElem.pause();
      playBtnElem.className = 'play';
    }
  }

  function onLoadedData() {
    endTimeElem.innerHTML = getDuration(audioElem.duration);
    progressBarElem.max = audioElem.duration;
  }

  function onTimeUpdate() {
    startTimeELem.innerHTML = getDuration(audioElem.currentTime);
    progressBarElem.value = audioElem.currentTime;
  }

  function onEnded() {
    playBtnElem.className = 'play';
    audioElem.currentTime = 0;
  }

  function onInput() {
    audioElem.currentTime = progressBarElem.value;
  }

  function run() {
    playBtnElem.addEventListener('click', onClick);

    audioElem.addEventListener('loadeddata', onLoadedData);
    audioElem.addEventListener('timeupdate', onTimeUpdate);
    audioElem.addEventListener('ended', onEnded);

    progressBarElem.addEventListener('input', onInput);
  }
  run();
})();
