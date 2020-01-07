(() => {
  const SECOND = 1000;
  const MINUTE = SECOND * 60;
  const HOUR = MINUTE * 60;
  const DAY = HOUR * 24;

  function setElementInnerText(id, text) {
    const element = document.getElementById(id);
    element.innerText = text;
  }

  function countDown() {
    const now = new Date().getTime();
    const newYear = new Date('December 31, 2020 00:00:00').getTime();
    const unixTimeLeft = newYear - now;

    setElementInnerText('days', Math.floor(unixTimeLeft / DAY));
    setElementInnerText('hours', Math.floor(unixTimeLeft % DAY / HOUR));
    setElementInnerText('minutes', Math.floor(unixTimeLeft % HOUR / MINUTE));
    setElementInnerText('seconds', Math.floor(unixTimeLeft % MINUTE / SECOND));
  }

  function run() {
    countDown();
    setInterval(countDown, SECOND);
  }

  run();
})();
