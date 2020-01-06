(() => {
  function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function setup() {
    const canvas = document.getElementById('falling-snow-canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    return {
      canvas,
      canvasContext: canvas.getContext('2d'),
      numberOfSnowBalls: 250
    };
  }

  function createSnowBalls(canvas, numberOfSnowBalls) {
    return [...Array(numberOfSnowBalls)].map(() => {
      return {
        x: random(0, canvas.width),
        y: random(0, canvas.height),
        opacity: random(0.5, 1),
        speedX: random(-5, 5),
        speedY: random(1, 3),
        radius: random(2, 4)
      };
    });
  }

  function createSnowBallDrawer(canvasContext) {
    return snowBall => {
      canvasContext.beginPath();
      canvasContext.arc(
        snowBall.x,
        snowBall.y,
        snowBall.radius,
        0,
        Math.PI * 2
      );
      canvasContext.fillStyle = `rgba(255, 255, 255, ${snowBall.opacity})`;
      canvasContext.fill();
    };
  }

  function createSnowBallMover(canvas) {
    return snowBall => {
      snowBall.x += snowBall.speedX;
      snowBall.y += snowBall.speedY;

      if (snowBall.x > canvas.width) {
        snowBall.x = 0;
      } else if (snowBall.x < 0) {
        snowBall.x = canvas.width;
      }

      if (snowBall.y > canvas.height) {
        snowBall.y = 0;
      }
    };
  }

  function run() {
    const { canvas, canvasContext, numberOfSnowBalls } = setup();
    const snowBalls = createSnowBalls(canvas, numberOfSnowBalls);
    const drawSnowBall = createSnowBallDrawer(canvasContext);
    const moveSnowBall = createSnowBallMover(canvas);

    setInterval(() => {
      canvasContext.clearRect(0, 0, canvas.width, canvas.height);
      snowBalls.forEach(drawSnowBall);
      snowBalls.forEach(moveSnowBall);
    }, 50);
  }

  run();
})();
