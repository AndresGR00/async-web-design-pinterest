import './rectangularButton.css';

export const RectangularButton = (text, link, extraClass) => {
    const header = document.querySelector('header');
    const a = document.createElement('a');
    a.className = `pt-rectangular-button ${extraClass}`;
    a.href = link;
    a.innerText = text;

    header.appendChild(a);
}