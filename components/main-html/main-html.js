import './main-html.css';

export const MainHTML = () => {
    const container = document.querySelector('#app');
    const main = document.createElement('main');
    main.className = 'pt-main';
    main.id = 'masonry-container';
    container.appendChild(main);
}