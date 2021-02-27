import { home } from './home.js';
import { menu } from './menu.js';
import { contact } from'./contact.js';

home();

const nav = document.querySelector('#nav');
const content = document.querySelector('#content');

const homeButton = document.createElement('button');
homeButton.addEventListener('click', () => {
    while (content.firstElementChild) {
        content.removeChild(content.firstElementChild);
    }
    home();
})
homeButton.textContent = 'Home';
nav.appendChild(homeButton);

const menuButton = document.createElement('button');
menuButton.addEventListener('click', () => {
    while (content.firstElementChild) {
        content.removeChild(content.firstElementChild);
    }
    menu();
})
menuButton.textContent = 'Menu';
nav.appendChild(menuButton);

const contactButton = document.createElement('button');
contactButton.addEventListener('click', () => {
    while (content.firstElementChild) {
        content.removeChild(content.firstElementChild);
    }
    contact();
})
contactButton.textContent = 'Contact';
nav.appendChild(contactButton);