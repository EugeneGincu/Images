"use strict";

//Import data file
const response = await fetch("Data/stars.json");
const data = await response.json();

let imageDisplay = document.getElementById('imageDisplay');
let stars = document.getElementById('stars');

//Append stars as list items to UL
for (let star of data){
    let listItem = document.createElement('li');
    // listItem.append(star.name);
    listItem.insertAdjacentHTML("afterbegin", star.name + "</br><cite style=font-size:0.7em;>north: " + star.north + "</cite>");
    listItem.dataset.imageSrc = star.file;
    stars.append(listItem);
}

stars.addEventListener('click', createImage);
// document.write(document.querySelector('ul#stars a')[0].href);

function createImage() {
    if (event.target.tagName !== 'LI')
        return;
    if (imageDisplay.children.length !== 0)
        imageDisplay.firstElementChild.remove();
    let img = document.createElement('img');
    let src = event.target.dataset.imageSrc;
    img.setAttribute('src', 'images/' + src);
    imageDisplay.append(img);
}

document.getElementById('theme').addEventListener('click', () => {
    document.body.classList.toggle("darkTheme");
    document.getElementById('stars').classList.toggle("darkTheme");
    document.getElementById('theme').classList.toggle("darkTheme")
});