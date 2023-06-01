/* Variables para el formulario (barra de busqueda y boton lupa) */
let searchForm = document.querySelector('#search-form');
let searchInput = document.querySelector('#search-input');

/* Evento para que no deje buscar con campo vacio o menos de 3 cáracteres */
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

/* Variables para dark mode (botón y modo preferido para guardar elección de usuario) */
const modeToggle = document.querySelector('#mode-toggle');
let preferredMode = localStorage.getItem('preferredMode');
const header = document.querySelector('header');
const headerNavLinks = document.querySelectorAll('.header-nav-link');
const logo = document.querySelector('.header-section-logo');
const searchBtn = document.querySelector('#search-button');
const mainSectionsH1 = document.querySelectorAll('.main-sections-h1')
const mainSectionsContent = document.querySelectorAll('.main-sections-content')
const footer = document.querySelector('footer');
const footerUL = document.querySelectorAll('.ul-footer');
const borders = document.querySelectorAll('.border');


/* Si el modo preferido es dark mode lo elige, sino default light mode */
if (preferredMode === 'dark-mode') {
  enableDarkMode();
} else {
  preferredMode = 'light-mode';
}

/*Función para habilitar el dark mode */
function enableDarkMode() {
  document.body.classList.add('dark-mode');
  modeToggle.classList.add('dark-mode');

  /* Dark mode para el header y su nav */
  header.classList.add('dark-mode');
  headerNavLinks.forEach(link => {
    ;
    link.classList.add('dark-mode');
  });

  /*Dark mode para el logo */
  logo.classList.add('dark-mode');

  /* Dark mode para el form */
  searchInput.classList.add('dark-mode');
  searchBtn.classList.add('dark-mode');

  mainSectionsH1.forEach(element => {;
    element.classList.add('dark-mode');
  });

  mainSectionsContent.forEach(element => {
    element.classList.add('dark-mode');
  });

  /* Dark mode para el footer y su ul */
  footer.classList.add('dark-mode');
  footerUL.forEach(ul => {
    ;
    ul.classList.add('dark-mode');
  });

  /* Dark mode para la clase ''border'' */
  borders.forEach(border => {
    ;
    border.classList.add('dark-mode');
  });
}

/* Funcion para habilitar el Light Mode */
function enableLightMode() {
  ;
  document.body.classList.remove('dark-mode');
  modeToggle.classList.remove('dark-mode');

  /* Light mode para el header y su nav */
  header.classList.remove('dark-mode');
  headerNavLinks.forEach(link => {
    ;
    link.classList.remove('dark-mode');
  });

  /* Light mode para el logo */
  logo.classList.remove('dark-mode');

  /* Light mode para el form */
  searchInput.classList.remove('dark-mode');
  searchBtn.classList.remove('dark-mode');

  mainSectionsH1.forEach(element => {;
    element.classList.remove('dark-mode');
  });

  mainSectionsContent.forEach(element => {
    element.classList.remove('dark-mode');
  });

  /* Light mode para el footer y su ul */
  footer.classList.remove('dark-mode');
  footerUL.forEach(ul => {
    ;
    ul.classList.remove('dark-mode');
  });

  /* Light mode para la clase ''border'' */
  borders.forEach(border => {
    ;
    border.classList.remove('dark-mode');
  });
}

/* Función para cambiar el modo, si el body contiene la clase dark-mode, se ejecuta la función enableLightMode, sino la tiene, la de Darkmode. Luego guarda tu preferencia*/
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

/* Evento para que se ejecute la funcion toggleMode al clickear el botón */
modeToggle.addEventListener('click', toggleMode);

const songsSection = document.querySelector('.songs');

fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/tracks')
  .then(response => response.json())
  .then(data => {
    const songs = data.data.slice(0, 6);

    songs.forEach(song => {
      const article = document.createElement('article');
      article.classList.add('main-sections-content', 'opensans');
      article.innerHTML = `
        <a href="detail-song.html?id=${song.id}">
          <h2>${song.title}</h2>
          <p>${song.artist.name}</p>
          <p>${song.album.title}</p>
          <img src="${song.album.cover_medium}" alt="${song.title} Cover">
        </a>
      `;

      songsSection.appendChild(article);
    });
  });

const albumsSection = document.querySelector('.albums');
fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/albums')
  .then(response => response.json())
  .then(data => {
    const albums = data.data.slice(0, 6);

    albums.forEach(album => {
      const article = document.createElement('article');
      article.classList.add('main-sections-content', 'opensans');
      article.innerHTML = `
        <a href="detail-album.html?id=${album.id}">
          <h2>${album.title}</h2>
          <p>${album.artist.name}</p>
          <img src="${album.cover_medium}" alt="${album.title} Cover">
        </a>
      `;

      albumsSection.appendChild(article);
    });
  });

const artistsSection = document.querySelector('.artists');
fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/artists')
  .then(response => response.json())
  .then(data => {
    const artists = data.data.slice(0, 6);

    artists.forEach(artist => {
      const article = document.createElement('article');
      article.classList.add('main-sections-content', 'opensans');
      article.innerHTML = `
        <a href="detail-artist.html?id=${artist.id}">
          <h2>${artist.name}</h2>
          <img src="${artist.picture_medium}" alt="${artist.name} Picture">
        </a>
      `;

      artistsSection.appendChild(article);
    });
  });