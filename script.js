const bodyEl = document.querySelector('body');
const mouseEl = document.querySelector('.mouse');
const divMouseEl = document.querySelectorAll('.mouse');

const createElPrincipal = (element, x, y) => {
  const divEl = document.createElement('span');
  divEl.classList.add('mouse', 'principal');
  divEl.style.left = `${x}px`;
  divEl.style.top = `${y}px`;
  element.appendChild(divEl);
};

const createElMiddle = (element, x, y) => {
  const divEl = document.createElement('span');
  divEl.classList.add('mouse', 'principal', 'animation--middle');
  divEl.style.left = `${x}px`;
  divEl.style.top = `${y}px`;
  element.appendChild(divEl);
};

const createElend = (element, x, y) => {
  const divEl = document.createElement('span');
  divEl.classList.add('mouse', 'principal', 'animation--end');
  divEl.style.left = `${x}px`;
  divEl.style.top = `${y}px`;
  element.appendChild(divEl);
};
document.addEventListener('mousemove', (event) => {
  const x = event.clientX;
  const y = event.clientY;

  createElPrincipal(bodyEl, x, y);
  createElMiddle(bodyEl, x, y);
  createElend(bodyEl, x, y);
});
