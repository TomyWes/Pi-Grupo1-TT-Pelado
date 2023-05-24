const loader = document.querySelector('.loader');

loader.classList.remove('hidden');

setTimeout(() => {
  loader.classList.add('hidden');
}, 3000); 

const searchInput = document.querySelector('#search-input');
let searchTerm = searchInput.value.trim();

function searchResults(searchData) {
  const searchResultsSection = document.querySelector('#search-results');
  searchResultsSection.innerHTML = '';

  if (searchData.length > 0) {;
    searchData.array.forEach(Element => {
      const resultElement = document.createElement('div');
      resultElement.textContent = result.title;

      searchResultsSection.appendChild(resultElement);
    });
  } else {
    const noResultsMessage = document.querySelector('#no-results');
    noResultsMessage.style.display = 'block';
  }
}

const searchHeader = document.querySelector('.results-h1')
searchHeader.textContent += ` ${searchTerm}`;