let songDetail = document.querySelector('#artist-detail')
let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get('id');
let url = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/'+ id;

fetch(url)
.then(function(response){
    return response.json()
})
.then(function(data) {
    console.log(data);

    let albumName = document.querySelector('.album-name');
    albumName.innerText = data.title;

    let albumImage = document.querySelector('.album-image');
    albumImage.src = data.cover_medium;
    
    let albumArtist = document.querySelector('.album-artist');
    albumArtist.innerText += data.artist.name;

    let albumArtistGenre = document.querySelector('.album-artist-genre');
    if (data.genres.data.length > 0) {
        albumArtistGenre.innerText += data.genres.data[0].name;
      } else {
        albumArtistGenre.innerText += 'Unknown Genre';
      }

    let albumRelease = document.querySelector('.album-release');
    albumRelease.innerText += data.release_date;

    let albumSongs = document.querySelector('.album-songs');
    let trackList = '';
    
    for (let i = 0; i < data.tracks.data.length; i++) {
      const track = data.tracks.data[i];
      trackList += `<li>${track.title}</li>`;
    }
    albumSongs.innerHTML += `<ul>${trackList}</ul>`;
})
.catch(function(error){
    console.log(error)
});

