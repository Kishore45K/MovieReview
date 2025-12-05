function getMovie(){
    fetch('/recommend')
    .then(response => response.json())
    .then(data => {
        document.getElementById("movieTitle").innerText=data.title;
        document.getElementById("movieImage").src=`/static/${data.image}`;
    })
}

function Book(title){
    alert(`you booked this movie: ${title} `)
}
function Details(title){
    alert(`Here is a details about movie: ${title} /n comedy /n rating:5`)
}
function Favorite(title){
    alert(` you add this movie: ${title} to your favorites`)
}
function Trailer(title){
    alert(`movie:${title} trailer`)
}