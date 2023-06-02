let songDetail = document.querySelector('#song-detail')
let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get('id');
let url = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/'+ id;

fetch(url)
.then(function(response){
    return response.json()
})
.then(function(data) {
    console.log(data)

    let songName = document.querySelector('.song-name')
    songName.innerText = data.title

    let songImage = document.querySelector('.song-image')
    songImage.src = data.album.cover_medium

    let songArtist = document.querySelector('.song-artist')
    songArtist.innerText = data.artist.name

    let songAlbum = document.querySelector('.song-album')
    songAlbum.innerText = data.album.title
})
.catch(function(error){
    console.log(error)
});

console.log(queryString)
console.log(queryStringObj)