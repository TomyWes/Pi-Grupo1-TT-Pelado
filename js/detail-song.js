let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);

let id = queryStringObj.get('id');

let url = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/tracks'+ id;

fetch(url)
.then(function(response){
    return response.json()
})
.then(function(data) {
    let artistDetail = document.querySelector('#artist-detail')
    
    console.log(data)
})
.catch(function(error){
    console.log(error)
});

console.log(queryString)
console.log(queryStringObj)