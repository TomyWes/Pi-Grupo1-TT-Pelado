let songDetail     = document.querySelector('#artist-detail');
let queryString    = location.search;
let queryStringObj = new URLSearchParams(queryString);
let id             = queryStringObj.get('id');
let url            = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/' + id;

fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);

    let albumName = document.querySelector('.album-name');
    albumName.innerText = data.title;

    let albumImage = document.querySelector('.album-image');
    albumImage.src = data.cover_medium;

    let albumArtist = document.querySelector('.album-artist');
    albumArtist.innerHTML += `<a href="detail-artist.html?id=${data.artist.id}">${data.artist.name}</a>`;

    let albumArtistGenre = document.querySelector('.album-artist-genre');
    if (data.genres.data.length > 0) {
      albumArtistGenre.innerHTML += `<a href="detail-genres.html?id=${data.genres.data[0].id}">${data.genres.data[0].name}</a>`;
    } else {
      albumArtistGenre.innerText += 'Unknown Genre';
    }

    let albumRelease = document.querySelector('.album-release');
    albumRelease.innerHTML += data.release_date;

    let albumSongs = document.querySelector('.album-songs-ol');
    let trackList = '';

    for (let i = 0; i < data.tracks.data.length; i++) {
      const track = data.tracks.data[i];
      trackList += `<li class='opensans'><p><a href="detail-song.html?id=${track.id}">${track.title}</a></p></li>`;
    }
    albumSongs.innerHTML += trackList;
  })
  .catch(function (error) {
    console.log(error);
  });