let songDetail = document.querySelector('#artist-detail')
let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get('id');
let url = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/' + id;
let albumsUrl = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/' + id + '/albums?limit=5';

fetch(url)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);

        let artistName = document.querySelector('.artist-name');
        artistName.innerText = data.name;

        let artistImage = document.querySelector('.artist-image');
        artistImage.src = data.picture_medium;

        fetch(albumsUrl)
            .then(function (albumsResponse) {
                return albumsResponse.json();
            })
            .then(function (albumsData) {
                console.log(albumsData);

                let artistAlbum = document.querySelector('.artist-album');
                let albumsList = '';

                for (let i = 0; i < albumsData.data.length; i++) {
                    let album = albumsData.data[i];
                    albumsList += `<li class='detail-artist-album-li opensans'><a href="detail-album.html?id=${album.id}">${album.title}</a></li>`;
                }

                artistAlbum.innerHTML += `<ol>${albumsList}</ol>`;
            })
    })
    .catch(function (error) {
        console.log(error)
    });