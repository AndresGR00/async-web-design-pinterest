import './circleButton.css'

export const CircleButton = (iconUrl, link) => {
    const header = document.querySelector('header');
    const a = document.createElement('a');
    a.className = 'pt-circle-button';    
    a.href = link;    

    const img = document.createElement('img');
    img.src = iconUrl;

    
    a.appendChild(img);
    header.appendChild(a);
}

