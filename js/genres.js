let genresUrl = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre';

fetch(genresUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);

        let genresList = document.querySelector('#genres-list');
        let genresHTML = '';

        for (let i = 0; i < data.data.length; i++) {
            let genre = data.data[i];
            genresHTML += `
                <li>
                    <a href="detail-genres.html?id=${genre.id}">
                        <h1 class='genre-h1-name raleway'>${genre.name}</h1>
                        <img src="${genre.picture_medium}" alt="${genre.name}">
                    </a>
                </li>
            `;
        }

        genresList.innerHTML = genresHTML;
    })
    .catch(function (error) {
        console.log(error);
    });