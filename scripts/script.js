"use strict";

let images = document.getElementById('images');
let stars = document.getElementById('stars');
let sirius = document.getElementById('sirius');

stars.addEventListener('click', createImage);
// document.write(document.querySelector('ul#stars a')[0].href);

function createImage() {
    if (event.target.tagName !== 'A')
        return;
    if (images.children.length !== 0)
        images.firstElementChild.remove();
    let img = document.createElement('img');
    let src = event.target.dataset.imageSrc;
    img.setAttribute('src', 'images/' + src);
    images.append(img);
    event.preventDefault();
}