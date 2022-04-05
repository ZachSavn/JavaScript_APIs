console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
const GIPHY_URL = "https://api.giphy.com/v1/gifs/translate"
const GIPHY_KEY = "TIh4sY44qZD8fQp7h89BUwROphX4BVKM"
let inputElement = document.querySelector("#gifSearch")
let searchBtnElement = document.querySelector("#search")
let imgElement = document.querySelector("#giphy")

searchBtnElement.addEventListener("click", searchGif)

function searchGif() {
    let searchTerm = inputElement.value

    fetch(`${GIPHY_URL}?api_key=${GIPHY_KEY}&s=${searchTerm}`)
    .then((result) => result.json())//call not reference when just .json
    .then((contents)=> {
        imgElement.src = contents.data.images.original.url;
    })
    .catch((err)=> console.error(err));
}