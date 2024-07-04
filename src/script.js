const colorsDiv = document.querySelector('.colors')
const colorsButtons = colorsDiv.querySelectorAll('.white, .gray, .black')
const imageCar = document.querySelector('.product-image');
const suvTag = document.querySelector('.tag')
const routeImage = "../public/img/evoque-";
const buttonBuy = document.querySelector('#button');
const productDescription = document.querySelector('.product-description')

colorsButtons.forEach(span => {
    span.addEventListener('click', () => {
        let dataValueColor = span.getAttribute('data-value');
        imageCar.style.backgroundImage = `url(${routeImage}${dataValueColor}.png)`;
        suvTag.style.background = dataValueColor;
        suvTag.style.color = dataValueColor == 'white' ? 'black' : 'white';

    });
});

buttonBuy.addEventListener('click', () =>  {
    productDescription.innerHTML = '<h1 class="product_title" style="margin-top: 15%">Enhorabuena, has adquirido un espectacular Range Rover Evoque</h1>';

});