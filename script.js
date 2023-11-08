const bodyEl = document.querySelector('body');
const divMouseEl = document.querySelector('.mouse');

document.addEventListener('mousemove', (event) => {
  const x = event.clientX;
  const y = event.clientY;

  divMouseEl.style.left = `${x}px`;
  divMouseEl.style.top = `${y}px`;
});
