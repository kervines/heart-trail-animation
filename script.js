const bodyEl = document.querySelector('body');

const createElementTrail = (element, x, y) => {
  const spanEl = document.createElement('span');
  const size = Math.random() * 100;
  spanEl.style.width = `${size}px`;
  spanEl.style.height = `${size}px`;

  element.appendChild(spanEl);
  spanEl.style.left = `${x}px`;
  spanEl.style.top = `${y}px`;

  colorRandom(spanEl.style.filter);

  setTimeout(() => {
    spanEl.remove();
  }, 3000);
};

function colorRandom(element) {
  const colorRandom = Math.round(Math.random() * 360);
  element = `hue-rotate(${colorRandom}deg)`;
}

bodyEl.addEventListener('mousemove', ({ offsetX, offsetY }) => {
  createElementTrail(bodyEl, offsetX, offsetY);
});
