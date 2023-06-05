let songDetail = document.querySelector('#artist-detail')
let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get('id');
let url = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/'+ id;

fetch(url)
.then(function(response){
    return response.json()
})
.then(function(data) {
    console.log(data)

    let artistName = document.querySelector('.artist-name')
    artistName.innerText = data.name

    let artistImage = document.querySelector('.artist-image')
    artistImage.src = data.picture_medium
    
    let artistAlbum = document.querySelector('.artist-album')
    artistAlbum.innerText = data.nb_album
})
.catch(function(error){
    console.log(error)
});