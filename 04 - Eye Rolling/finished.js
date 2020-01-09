(() => {
  function run() {
    const bodyElem = document.querySelector('body');
    const eyeElems = document.querySelectorAll('.eye');

    function onMouseMove({ pageX: mouseX, pageY: mouseY }) {
      eyeElems.forEach(eyeElem => {
        const { left: eyeLeft, top: eyeTop } = eyeElem.getBoundingClientRect();

        const eyeCenterX = eyeLeft + eyeElem.offsetWidth / 2;
        const eyeCenterY = eyeTop + eyeElem.offsetHeight / 2;
        const radian = Math.atan2(mouseX - eyeCenterX, mouseY - eyeCenterY);
        const angle = (radian / Math.PI) * -180;
        eyeElem.style.transform = `rotate(${angle}deg)`;
      });
    }

    bodyElem.addEventListener('mousemove', onMouseMove);
  }
  run();
})();
