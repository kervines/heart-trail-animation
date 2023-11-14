const bodyEl = document.querySelector('body');

const createElementTrail = (element, x, y) => {
  const spanEl = document.createElement('span');
  const size = Math.random() * 100;
  spanEl.style.width = `${size}px`;
  spanEl.style.height = `${size}px`;

  element.appendChild(spanEl);
  spanEl.style.left = `${x}px`;
  spanEl.style.top = `${y}px`;

  // const colorRandom2 = Math.round(Math.random() * 0xffffff).toString(16).padStart(6, 0);
  // spanEl.style.backgroundColor = `#${colorRandom2}`;
  // spanEl.style.backgroundBlendMode = 'multiply';

  const colorRandom = Math.round(Math.random() * 360);
  spanEl.style.filter = `hue-rotate(${colorRandom}deg)`;

  setTimeout(() => {
    spanEl.remove();
  }, 3000);
};

bodyEl.addEventListener('mousemove', (event) => {
  const x = event.offsetX;
  const y = event.offsetY;
  createElementTrail(bodyEl, x, y);
});
