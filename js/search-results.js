const loader = document.querySelector('.loader');
loader.classList.remove('hidden');
const searchResultsSection = document.querySelector('#search-results');
const noResults = document.querySelector('#no-results');
const queryString = window.location.search;
const searchParams = new URLSearchParams(queryString);
const searchTerm = searchParams.get('term');

const searchUrl = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${encodeURIComponent(searchTerm)}`;

fetch(searchUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);

    loader.classList.add('hidden');

    if (data.data.length === 0) {
      noResults.style.display = 'block';
    } else {
      let searchResultsHTML = '';

      searchResultsHTML += `<h1 class='raleway'>Search results for: ${searchTerm}</h1>`;
      searchResultsHTML += '<ul class="search-results-ul opensans">';

      for (let i = 0; i < data.data.length; i++) {
        const result = data.data[i];
        let detailUrl = '';

        if (result.type === 'track') {
          detailUrl = `detail-song.html?id=${result.id}`;
        } else if (result.type === 'artist') {
          detailUrl = `detail-artist.html?id=${result.id}`;
        } else if (result.type === 'album') {
          detailUrl = `detail-album.html?id=${result.id}`;
        }

        searchResultsHTML += `<li><a href="${detailUrl}">${result.title}</a></li>`;
      }

      searchResultsSection.innerHTML = searchResultsHTML;
    }
  })
  .catch(function (error) {
    console.log(error);
  });
