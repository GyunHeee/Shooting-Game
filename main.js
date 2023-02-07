'use strict';

const horozontal = document.querySelector('.horozontal');
const vertical = document.querySelector('.vertical');
const target = document.querySelector('.target');
const tag = document.querySelector('.tag');
const body = document.querySelector('body');
const score = document.querySelector('.score');

const bodyRect = body.getBoundingClientRect();
const scoreRect = score.getBoundingClientRect();

const CARROT_COUNT = 10;
const CARROT_SIZE = 48;

let count = 0;
let gameScore = CARROT_COUNT;

function initGame() {
    addCarrot(CARROT_COUNT);
    showScore(count);
}

function addCarrot(count) {
    const x1 = 0;
    const y1 = scoreRect.height;

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

    horozontal.style.transform = `translateY(${y - 32}px)`;
    vertical.style.transform = `translateX(${x}px)`;

    target.style.transform = `translate(${x-60}px,${y-60 - 32}px)`;

    tag.style.transform = `translate(${x+20}px, ${y+20 - 32}px)`;
    tag.innerHTML = `${x}, ${y}`;
});

function showScore(count) {
    score.innerHTML = `score: ${count}`;
}

body.addEventListener('click', (event) => {
    const target = event.target;
    if (target.matches('.carrot')) {
        target.remove();
        ++count;
        showScore(count);
    }
});

initGame();