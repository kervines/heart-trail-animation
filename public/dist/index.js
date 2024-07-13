"use strict";
const bodyEl = document.querySelector('body');
const createElementTrail = (element, x, y) => {
    const spanEl = document.createElement('span');
    const colorRandom = Math.round(Math.random() * 360);
    const size = Math.random() * 100;
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
bodyEl.addEventListener('mousemove', (event) => {
    const { offsetX, offsetY } = event;
    createElementTrail(bodyEl, offsetX, offsetY);
});
