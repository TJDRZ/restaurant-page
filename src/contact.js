const contact = function () {
    const content = document.querySelector('#content');

    const address = document.createElement('h2');
    address.textContent = '123 Baltimore St.'
    content.appendChild(address);

    const cityStateZip = document.createElement('h2');
    cityStateZip.textContent = 'Balto. MD. 21230'
    content.appendChild(cityStateZip);

    const phone = document.createElement('h2');
    phone.textContent = '(410) 555-1234'
    content.appendChild(phone);

    const email = document.createElement('h2');
    email.textContent = 'customersupport@painperdu.com'
    content.appendChild(email);
}

export { contact };