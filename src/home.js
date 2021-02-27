const home = function () {
    const content = document.querySelector('#content');

    const header = document.createElement('h1');
    header.textContent = 'Pain Perdu';
    content.appendChild(header);

    const image = document.createElement('img');
    image.src = './french-toast.jpg';
    image.style.width = '20%';
    image.style.height = '40%';
    content.appendChild(image);

    const blurb = document.createElement('p');
    blurb.textContent = 'An extraordinary creation: from our plate, to you.';
    content.appendChild(blurb);
}

export { home };