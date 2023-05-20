let searchForm = document.querySelector('#search-form') ;
let searchInput = document.querySelector('#search-input') ;


searchForm.addEventListener('submit', function(e) { ;
    let searchTerm = searchInput.value.trim() ;

    if (searchTerm === '') { ;
        e.preventDefault();
        alert('El campo de búsqueda está vacío');
        return;
    }
    if (searchTerm.length < 3) { ;
        e.preventDefault();
        alert('La búsqueda debe tener al menos 3 cáracteres');
        return;
    }
});

const modeToggle = document.querySelector('#mode-toggle');
let preferredMode = localStorage.getItem('preferredMode');

if (preferredMode === 'dark-mode') {
  document.body.classList.add('dark-mode');
  modeToggle.innerText = 'Modo Claro';
} else {
  preferredMode = 'light-mode';
}

function toggleMode() {
  const isDarkMode = document.body.classList.contains('dark-mode');

  if (isDarkMode) {
    document.body.classList.remove('dark-mode');
    modeToggle.innerText = 'Modo Oscuro';
    preferredMode = 'light-mode';
  } else {
    document.body.classList.add('dark-mode');
    modeToggle.innerText = 'Modo Claro';
    preferredMode = 'dark-mode';
  }

  localStorage.setItem('preferredMode', preferredMode);
}

modeToggle.addEventListener('click', toggleMode);
