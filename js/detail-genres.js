let genreDetail    = document.querySelector('#genre-detail');
let queryString    = location.search;
let queryStringObj = new URLSearchParams(queryString);
let id             = queryStringObj.get('id');
let genreUrl       = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/' + id;
let artistsUrl     = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/' + id + '/artists';

fetch(genreUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);

        let genreName = document.querySelector('#genre-name');
        genreName.innerText = data.name;
    })
    .catch(function (error) {
        console.log(error);
    });

fetch(artistsUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);

        let genreArtists = document.querySelector('#genre-artists');
        let artistsHTML = '';

        for (let i = 0; i < data.data.length; i++) {
            let artist = data.data[i];
            artistsHTML += `
                <li>
                    <a href="detail-artist.html?id=${artist.id}">
                    <h2 class='raleway'>${artist.name}</h2>
                    <img class='invisible-border' src="${artist.picture_medium}" alt="${artist.name}">
                    </a>
                </li>
            `;
        }

        genreArtists.innerHTML = artistsHTML;
    })
    .catch(function (error) {
        console.log(error);
    });

console.log(queryString);
console.log(queryStringObj);