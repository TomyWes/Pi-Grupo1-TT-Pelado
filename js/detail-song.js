let songDetail = document.querySelector('#song-detail');
let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get('id');
let url = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/' + id;

let previewContainer = document.querySelector('#preview-song');
let previewAudio = document.querySelector('#preview-audio');

fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);

        let songName = document.querySelector('.song-name')
        songName.innerText = data.title;

        let songImage = document.querySelector('.song-image')
        songImage.src = data.album.cover_medium;

        let songArtist = document.querySelector('.song-artist')
        songArtist.innerHTML += `<a href="detail-artist.html?id=${data.artist.id}">${data.artist.name}</a>`;

        let songAlbum = document.querySelector('.song-album')
        songAlbum.innerHTML += `<a href="detail-album.html?id=${data.album.id}">${data.album.title}</a>`;

        let durationSong = document.querySelector('.duration-song')
        durationSong.innerHTML += data.duration + ` seconds`

        let releaseSong = document.querySelector('.release-song')
        releaseSong.innerHTML += data.release_date

        let explicitSong = document.querySelector('.explicit-song')
        if (data.explicit_lyrics === true) {
            explicitSong.innerHTML += "Contains explicit lyrics"
        } else {
            explicitSong.innerHTML += "Does not contain explicit lyrics";
        }

        let previewUrl = data.preview;
        if (previewUrl) {
            previewAudio.src = previewUrl;

            previewAudio.load();

            previewContainer.style.display = 'block';
        } else {
            previewContainer.style.display = 'none';
        }
    })
    .catch(function (error) {
        console.log(error);
    });

console.log(queryString);
console.log(queryStringObj);

let playlist = [];

let playlistStorage = localStorage.getItem('playlist');

if (playlistStorage != null) {
    playlist = JSON.parse(playlistStorage);
}

let btnPlaylist = document.querySelector('#btn-playlist');
let btnText = document.querySelector('.btn-playlist-span');

if (playlist.includes(id)) {
    btnText.innerText = 'Remove from Playlist';
}

btnPlaylist.addEventListener('click', function (e) {
    if (playlist.includes(id)) {
        let index = playlist.indexOf(id)
        playlist.splice(index, 1);
        btnText.innerText = 'Add to Playlist';
    } else {
        playlist.push(id);
        btnText.innerText = 'Remove from Playlist';
    }

    let playlistToString = JSON.stringify(playlist);
    localStorage.setItem('playlist', playlistToString)
})