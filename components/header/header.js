import './header.css';

export const Header = () => {
    const container = document.querySelector('#app');
    const header = document.createElement('header');
    header.className = 'pt-header';
    
    container.appendChild(header);
}