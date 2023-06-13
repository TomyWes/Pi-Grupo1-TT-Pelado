fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);

        let genresList = document.querySelector('#genres-list');
        let genresHTML = '';

        for (let i = 1; i < data.data.length; i++) {
            let genre = data.data[i];
            genresHTML += `
                <li>
                    <a href="detail-genres.html?id=${genre.id}">
                        <h2 class='genre-h2-name raleway'>${genre.name}</h2>
                        <img class='invisible-border' src="${genre.picture_medium}" alt="${genre.name}">
                    </a>
                </li>
            `;
        }

        genresList.innerHTML = genresHTML;
    })
    .catch(function (error) {
        console.log(error);
    });