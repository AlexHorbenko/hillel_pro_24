const randImg = Math.ceil(Math.random() * 9);
const container = document.querySelector('.image');
const newImg = document.createElement('img');
newImg.src = `image/${randImg}.jpg`
container.appendChild(newImg);
