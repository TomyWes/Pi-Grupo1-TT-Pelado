let songDetail = document.querySelector('#song-detail');
let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get('id');
let url = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/'+ id;

fetch(url)
.then(function(response){
    return response.json();
})
.then(function(data) {
    console.log(data);

    let songName = document.querySelector('.song-name')
    songName.innerText = data.title;

    let songImage = document.querySelector('.song-image')
    songImage.src = data.album.cover_medium;

    let songArtist = document.querySelector('.song-artist')
    songArtist.innerHTML += `<a href="detail-artist.html?id=${data.artist.id}">${data.artist.name}</a>`;

    let songAlbum = document.querySelector('.song-album')
    songAlbum.innerHTML += `<a href="detail-album.html?id=${data.album.id}">${data.album.title}</a>`;
})
.catch(function(error){
    console.log(error);
});

console.log(queryString);
console.log(queryStringObj);