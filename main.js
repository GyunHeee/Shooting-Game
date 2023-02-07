'use strict';

const horozontal = document.querySelector('.horozontal');
const vertical = document.querySelector('.vertical');
const target = document.querySelector('.target');
const tag = document.querySelector('.tag');
const body = document.querySelector('body');

const bodyRect = body.getBoundingClientRect();

const CARROT_COUNT = 10;
const CARROT_SIZE = 48;

function initGame() {
    addCarrot(CARROT_COUNT);
}

function addCarrot(count) {
    const x1 = 0;
    const y1 = 0;

    const x2 = bodyRect.width - CARROT_SIZE;
    const y2 = bodyRect.height - CARROT_SIZE;

    for (let i = 0; i < count; i++) {
        const carrot = document.createElement('img');
        carrot.setAttribute('src', './img/carrot.png');
        carrot.setAttribute('class', 'carrot');
        carrot.style.position = 'absolute';
        const x = randomNumber(x1, x2);
        const y = randomNumber(y1, y2);
        carrot.style.left = `${x}px`;
        carrot.style.top = `${y}px`;

        body.appendChild(carrot);
    }
}

function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

document.addEventListener('mousemove', (event) => {
    const x = event.clientX;
    const y = event.clientY;

    horozontal.style.transform = `translateY(${y}px)`;
    vertical.style.transform = `translateX(${x}px)`;

    target.style.transform = `translate(${x-60}px,${y-60}px)`;

    tag.style.transform = `translate(${x+20}px, ${y+20}px)`;
    tag.innerHTML = `${x}, ${y}`;
});

body.addEventListener('click', (event) => {
    const target = event.target;
    if (target.matches('.carrot')) {
        target.remove();
    }
});
initGame();