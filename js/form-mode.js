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

const modeToggle  = document.querySelector('#mode-toggle');
let preferredMode = localStorage.getItem('preferredMode');

function loadDarkMode() {
  if (preferredMode === 'dark-mode') {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
}

loadDarkMode()

modeToggle.addEventListener('click', function () {
  if (preferredMode === 'dark-mode') {
    document.body.classList.remove('dark-mode');
    preferredMode = 'light-mode';
  } else {
    document.body.classList.add('dark-mode');
    preferredMode = 'dark-mode';
  }

  localStorage.setItem('preferredMode', preferredMode);
});