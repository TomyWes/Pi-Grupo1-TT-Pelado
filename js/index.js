let searchForm  = document.querySelector('#search-form');
let searchInput = document.querySelector('#search-input');

searchForm.addEventListener('submit', function (e) {
  let searchTerm = searchInput.value.trim();

  if (searchTerm === '') {
    e.preventDefault();
    alert('The search field is empty');
    return;
  }
  if (searchTerm.length < 3) {
    e.preventDefault();
    alert('The search term must have at least 3 characters');
    return;
  }
});

const modeToggle = document.querySelector('#mode-toggle');
let isDarkModeOn = false;

let preferredMode = localStorage.getItem('preferredMode');
if (preferredMode === 'dark-mode') {
  isDarkModeOn = true;
}

modeToggle.addEventListener('click', function () {
  if (isDarkModeOn) {
    document.body.classList.remove('dark-mode');
    preferredMode = 'light-mode';
    isDarkModeOn = false;
  } else {
    document.body.classList.add('dark-mode');
    preferredMode = 'dark-mode';
    isDarkModeOn = true;
  }

  localStorage.setItem('preferredMode', preferredMode);
});

const songsSection = document.querySelector('.songs');
fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/tracks')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    const songs = data.data;

    let songsHTML = '';

    for (let i = 0; i < 8; i++) {
      const song = songs[i];

      songsHTML += `
        <article class="main-sections-content opensans">
          <a href="detail-song.html?id=${song.id}">
            <h1>${song.title}</h1>
            <img class='invisible-border' src="${song.album.cover}" alt="${song.title} Cover">
            <p>${song.artist.name}</p>
            <p>${song.album.title}</p>
          </a>
        </article>
      `;
    }
    songsSection.innerHTML += songsHTML;
  })
  .catch(function (error) {
    console.log('Error: ' + error);
  });

const albumsSection = document.querySelector('.albums');
fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/albums')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    const albums = data.data;

    let albumsHTML = '';

    for (let i = 0; i < 8; i++) {
      const album = albums[i];

      albumsHTML += `
        <article class="main-sections-content opensans">
          <a href="detail-album.html?id=${album.id}">
            <h1>${album.title}</h1>
            <img class='invisible-border' src="${album.cover}" alt="${album.title} Cover">
            <p>${album.artist.name}</p>
          </a>
        </article>
      `;
    }
    albumsSection.innerHTML += albumsHTML;
  })
  .catch(function (error) {
    console.log('Error: ' + error);
  });

const artistsSection = document.querySelector('.artists');
fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/artists')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    const artists = data.data;

    let artistsHTML = '';

    for (let i = 0; i < 8; i++) {
      const artist = artists[i];

      artistsHTML += `
        <article class="main-sections-content opensans">
          <a href="detail-artist.html?id=${artist.id}">
            <h1>${artist.name}</h1>
            <img class='invisible-border' src="${artist.picture}" alt="${artist.name} Picture">
          </a>
        </article>
      `;
    }
    artistsSection.innerHTML += artistsHTML;
  })
  .catch(function (error) {
    console.log('Error: ' + error);
  })