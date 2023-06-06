let searchForm = document.querySelector('#search-form');
let searchInput = document.querySelector('#search-input');

searchForm.addEventListener('submit', function (e) {
  ;
  let searchTerm = searchInput.value.trim();

  if (searchTerm === '') {
    ;
    e.preventDefault();
    alert('El campo de búsqueda está vacío');
    return;
  }
  if (searchTerm.length < 3) {
    ;
    e.preventDefault();
    alert('La búsqueda debe tener al menos 3 cáracteres');
    return;
  }
});

const modeToggle = document.querySelector('#mode-toggle');
let preferredMode = localStorage.getItem('preferredMode');
const header = document.querySelector('header');
const headerNavLinks = document.querySelectorAll('.header-nav-link');
const linkElements = document.querySelectorAll('a');
const logo = document.querySelector('.header-section-logo');
const searchBtn = document.querySelector('#search-button');
const mainSectionsH1 = document.querySelectorAll('.main-sections-h1');
const mainSectionsContent = document.querySelectorAll('.main-sections-content');
const footer = document.querySelector('footer');
const footerUL = document.querySelectorAll('.ul-footer');
const borders = document.querySelectorAll('.border');

if (preferredMode === 'dark-mode') {
  enableDarkMode();
} else {
  preferredMode = 'light-mode';
}

function enableDarkMode() {
  document.body.classList.add('dark-mode');
  modeToggle.classList.add('dark-mode');
  header.classList.add('dark-mode');
  logo.classList.add('dark-mode');
  searchInput.classList.add('dark-mode');
  searchBtn.classList.add('dark-mode');
  for (let i = 0; i < linkElements.length; i++) {
    const linkElement = linkElements[i];
    linkElement.classList.add('dark-mode');
  }
  for (let i = 0; i < mainSectionsH1.length; i++) {
    const element = mainSectionsH1[i];
    element.classList.add('dark-mode');
  }
  for (let i = 0; i < mainSectionsContent.length; i++) {
    const element = mainSectionsContent[i];
    element.classList.add('dark-mode');
  }
  footer.classList.add('dark-mode');
  for (let i = 0; i < footerUL.length; i++) {
    const ul = footerUL[i];
    ul.classList.add('dark-mode');
  }
  for (let i = 0; i < borders.length; i++) {
    const border = borders[i];
    border.classList.add('dark-mode');
  }
}

function enableLightMode() {
  ;
  document.body.classList.remove('dark-mode');
  modeToggle.classList.remove('dark-mode');
  header.classList.remove('dark-mode');
  logo.classList.remove('dark-mode');
  searchInput.classList.remove('dark-mode');
  searchBtn.classList.remove('dark-mode');
  for (let i = 0; i < linkElements.length; i++) {
    const linkElement = linkElements[i];
    linkElement.classList.remove('dark-mode');
  }
  for (let i = 0; i < mainSectionsH1.length; i++) {
    const element = mainSectionsH1[i];
    element.classList.remove('dark-mode');
  }
  for (let i = 0; i < mainSectionsContent.length; i++) {
    const element = mainSectionsContent[i];
    element.classList.remove('dark-mode');
  }
  footer.classList.remove('dark-mode');
  for (let i = 0; i < footerUL.length; i++) {
    const ul = footerUL[i];
    ul.classList.remove('dark-mode');
  }
  for (let i = 0; i < borders.length; i++) {
    const border = borders[i];
    border.classList.remove('dark-mode');
  }
}

function toggleMode() {
  ;
  if (document.body.classList.contains('dark-mode')) {
    ;
    enableLightMode();
    preferredMode = 'light-mode';
  } else {
    ;
    enableDarkMode();
    preferredMode = 'dark-mode';
  }

  localStorage.setItem('preferredMode', preferredMode);
}

modeToggle.addEventListener('click', toggleMode);

const songsSection = document.querySelector('.songs');
fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/tracks')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data)
    const songs = data.data

    let songsHTML = '';

    for (let i = 0; i < songs.length; i++) {
      const song = songs[i];

      songsHTML += `
        <article class="main-sections-content opensans">
          <a href="detail-song.html?id=${song.id}">
            <p>${song.title}</p>
            <img src="${song.album.cover}" alt="${song.title} Cover">
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
    const albums = data.data

    let albumsHTML = '';

    for (let i = 0; i < albums.length; i++) {
      const album = albums[i];

      albumsHTML += `
        <article class="main-sections-content opensans">
          <a href="detail-album.html?id=${album.id}">
            <p>${album.title}</p>
            <img src="${album.cover}" alt="${album.title} Cover">
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
    const artists = data.data

    let artistsHTML = '';

    for (let i = 0; i < artists.length; i++) {
      const artist = artists[i];

      artistsHTML += `
        <article class="main-sections-content opensans">
          <a href="detail-artist.html?id=${artist.id}">
            <p>${artist.name}</p>
            <img src="${artist.picture}" alt="${artist.name} Picture">
          </a>
        </article>
      `;
    }
    artistsSection.innerHTML += artistsHTML;
  })
  .catch(function (error) {
    console.log('Error: ' + error);
  })
