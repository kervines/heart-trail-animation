const bodyEl: HTMLBodyElement = document.querySelector(
  'body'
) as HTMLBodyElement;
const createElementTrail = (
  element: HTMLElement,
  x: number,
  y: number
): void => {
  const spanEl: HTMLElement = document.createElement('span');
  const colorRandom: number = Math.round(Math.random() * 360);
  const size: number = Math.random() * 100;
  spanEl.style.width = `${size}px`;
  spanEl.style.height = `${size}px`;
  spanEl.style.filter = `hue-rotate(${colorRandom}deg)`;
  element.appendChild(spanEl);
  spanEl.style.left = `${x}px`;
  spanEl.style.top = `${y}px`;
  setTimeout(() => {
    spanEl.remove();
  }, 3000);
};
bodyEl.addEventListener('mousemove', (event: MouseEvent) => {
  const { offsetX, offsetY } = event;
  createElementTrail(bodyEl, offsetX, offsetY);
});
