const bodyEl = document.querySelector('body');
const mouseEl = document.querySelector('.mouse');
const divMouseEl = document.querySelectorAll('.mouse');

const createElPrincipal = (element, x, y) => {
  const divEl = document.createElement('span');
  divEl.classList.add('mouse', 'principal');
  element.appendChild(divEl);
  const height = divEl.clientHeight;
  divEl.style.left = `${x - height / 2}px`;
  divEl.style.top = `${y - height / 2}px`;
};

const createElMiddle = (element, x, y) => {
  const divEl = document.createElement('span');

  divEl.classList.add('mouse', 'principal', 'animation--middle');
  element.appendChild(divEl);
  const height = divEl.clientHeight;
  divEl.style.left = `${x - height / 2}px`;
  divEl.style.top = `${y - height / 2}px`;
};

const createElend = (element, x, y) => {
  const divEl = document.createElement('span');
  divEl.classList.add('mouse', 'principal', 'animation--end');
  element.appendChild(divEl);
  const height = divEl.clientHeight;
  divEl.style.left = `${x - height / 2}px`;
  divEl.style.top = `${y - height / 2}px`;
};
document.addEventListener('mousemove', (event) => {
  const x = event.clientX;
  const y = event.clientY;

  createElPrincipal(bodyEl, x, y);
  createElMiddle(bodyEl, x, y);
  createElend(bodyEl, x, y);
});
