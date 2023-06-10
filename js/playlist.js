let playlist = [];

let playlistStorage = localStorage.getItem('playlist');

if (playlistStorage != null) {
    playlist = JSON.parse(playlistStorage);
}

let playlistSection = document.querySelector('#playlist-section');
let playlistSongs = document.querySelector('#playlist-songs');

if (playlist === null) {
    playlistSection.innerHTML = '<p>There are no songs in your playlist yet</p>';
} else if (playlist.length === 0) {
    playlistSection.innerHTML = '<p>There are no songs in your playlist yet</p>';
} else {

    for (let i = 0; i < playlist.length; i++) {
        let id = playlist[i];
        let fetchUrl = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${id}`;

        fetch(fetchUrl)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                playlistSongs.innerHTML += `
          <li class='opensans'>
            <a href="detail-song.html?id=${data.id}">
                <h2 class='raleway'>${data.title}</h2>
                <img class='invisible-border' src="${data.album.cover}" alt="data.titel">
            </a>
          </li>
        `;
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}
