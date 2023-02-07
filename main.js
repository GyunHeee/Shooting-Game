const horozontal = document.querySelector('.horozontal');
const vertical = document.querySelector('.vertical');
const target = document.querySelector('.target');
const tag = document.querySelector('.tag');

document.addEventListener('mousemove', (event) => {
    const x = event.clientX;
    const y = event.clientY;

    horozontal.style.transform = `translateY(${y}px)`;
    vertical.style.transform = `translateX(${x}px)`;

    target.style.transform = `translate(${x-60}px,${y-60}px)`;

    tag.style.transform = `translate(${x+20}px, ${y+20}px)`;
    tag.innerHTML = `${x}, ${y}`;
});