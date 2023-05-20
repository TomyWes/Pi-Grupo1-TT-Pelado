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