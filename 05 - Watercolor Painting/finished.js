(() => {
  function getColor(distance) {
    const opacity = Math.min(0.5, 1 / distance);
    return `rgba(222, 10, 109, ${opacity})`;
  }

  function getDistance(previousPoint, currentPoint) {
    // Distance formular: https://www.wikihow.com/Find-the-Distance-Between-Two-Points
    return Math.sqrt(
      (previousPoint.x - currentPoint.x) ** 2 +
        (previousPoint.y - currentPoint.y) ** 2
    );
  }

  function getSize(distance) {
    return (Math.random() / distance) * 40;
  }

  function setupBrush(context, previousPoint, currentPoint) {
    const distance = getDistance(previousPoint, currentPoint);

    context.lineCap = 'round';
    context.lineJoin = 'round';
    context.lineWidth = getSize(distance);
    context.strokeStyle = getColor(distance);
  }

  function createMouseMoveHandler(context, previousPoint) {
    return ({ offsetX, offsetY }) => {
      const currentPoint = { x: offsetX, y: offsetY };

      context.beginPath();
      setupBrush(context, previousPoint, currentPoint);

      context.moveTo(previousPoint.x, previousPoint.y);
      context.lineTo(currentPoint.x, currentPoint.y);

      context.stroke();
      context.closePath();

      previousPoint = currentPoint;
    };
  }

  function createMouseEnterHandler(previousPoint) {
    return ({ pageX, pageY }) => {
      previousPoint.x = pageX;
      previousPoint.y = pageY;
    };
  }

  function run() {
    const canvas = document.getElementById('painting');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    context = canvas.getContext('2d');

    let previousPoint = {};
    canvas.addEventListener(
      'mouseenter',
      createMouseEnterHandler(previousPoint)
    );
    canvas.addEventListener(
      'mousemove',
      createMouseMoveHandler(context, previousPoint)
    );
  }
  run();
})();
