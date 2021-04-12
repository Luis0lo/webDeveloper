const auth = '563492ad6f917000010000010b054db0241e4d7aacfdc11aa82aed77';

const gallery = document.querySelector('.gallery');
const searchInput = document.querySelector('.search-input');
const form = document.querySelector('.search-form');

let searchValue;

//Event Listeners
searchInput.addEventListener('input', updateInput);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  searchPhotos(searchValue);
});

function updateInput(e) {
  searchValue = e.target.value;
}

async function pexelPhotos() {
  const dataFetch = await fetch(
    'https://api.pexels.com/v1/curated?per_page=10',
    {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: auth,
      },
    }
  );
  //.json to parse json file to an object to work with
  const data = await dataFetch.json();
  //   console.log(data);
  data.photos.forEach((photo) => {
    //create div where it goes the imgs
    const gallaryImg = document.createElement('div');
    // add a class to style late in css
    gallaryImg.classList.add('gallery-img');
    // select img size// console.log(photo) >> find the path;
    gallaryImg.innerHTML = `<img src='${photo.src.large}'></img>
    <p>${photo.photographer}</p>
    `;
    //append the info to the photo
    gallery.appendChild(gallaryImg);
  });
}

async function searchPhotos(query) {
  const dataFetch = await fetch(
    `https://api.pexels.com/v1/search?query=${query}&per_page=10`,
    {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: auth,
      },
    }
  );
  const data = await dataFetch.json();
  data.photos.forEach((photo) => {
    const gallaryImg = document.createElement('div');
    gallaryImg.classList.add('gallery-img');
    gallaryImg.innerHTML = `<img src='${photo.src.large}'></img>
    <p>${photo.photographer}</p>
    `;
    gallery.appendChild(gallaryImg);
  });
}

pexelPhotos();
