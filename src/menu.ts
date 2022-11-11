const menu = function () {
    const content = document.querySelector('#content') as HTMLElement;
    const lineBreak = document.createElement('hr')

    const blueberry = document.createElement('h2');
    blueberry.textContent = 'Blueberry';
    blueberry.style.color = 'blue';
    content.appendChild(blueberry);

    const blueText = document.createElement('p');
    blueText.textContent = '~A delicate helping of blue joy french toast.';
    content.appendChild(blueText);

    const bluePrice = document.createElement('h3');
    bluePrice.textContent = '$7.95';
    content.appendChild(bluePrice);

    content.appendChild(lineBreak);

    const strawberry = document.createElement('h2');
    strawberry.textContent = 'Strawberry';
    strawberry.style.color = 'red';
    content.appendChild(strawberry);

    const strawText = document.createElement('p');
    strawText.textContent = '~A simple blessing of strawberry french toast.';
    content.appendChild(strawText);

    const strawPrice = document.createElement('h3');
    strawPrice.textContent = '$6.95';
    content.appendChild(strawPrice);

    content.appendChild(lineBreak);

    const banana = document.createElement('h2');
    banana.textContent = 'Banana';
    banana.style.color = 'brown';
    content.appendChild(banana);

    const banText = document.createElement('p');
    banText.textContent = '~A tasteful serving of banana french toast.';
    content.appendChild(banText);

    const banPrice = document.createElement('h3');
    banPrice.textContent = '$6.95';
    content.appendChild(banPrice);

    content.appendChild(lineBreak);

    const mix = document.createElement('h2');
    mix.textContent = 'Mixed';
    mix.style.color = 'purple';
    content.appendChild(mix);

    const mixText = document.createElement('p');
    mixText.textContent = 'Mix and match your favorites!';
    content.appendChild(mixText);

    const mixPrice = document.createElement('h3');
    mixPrice.textContent = '+$1.45';
    content.appendChild(mixPrice);
}

export { menu };