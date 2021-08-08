const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

let galleryUlElem = document.querySelector('ul');

// images.forEach(elem => {
//     let galleryLiElem = document.createElement('li');
//     galleryUlElem.appendChild(galleryLiElem);
//     let galleryImgElem = document.createElement('img');
//     galleryImgElem.src = elem.url;
//     galleryImgElem.alt = elem.alt;
//     galleryLiElem.appendChild(galleryImgElem);
// });

images.forEach(elem => {
    let galleryLiElem = document.createElement('li');
    galleryUlElem.appendChild(galleryLiElem);
    galleryLiElem.insertAdjacentHTML("beforeend",
    `<img src = ${elem.url} alt = ${elem.alt}>`)
});

console.log(galleryUlElem);