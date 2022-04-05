console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
const GIPHY_URL = "https://api.giphy.com/v1/gifs/translate"
const GIPHY_KEY = "TIh4sY44qZD8fQp7h89BUwROphX4BVKM"
let inputElement = document.querySelector("#gifSearch")
let searchBtnElement = document.querySelector("#search")
let imgEle = document.querySelector("#giphy")

searchBtnElement.addEventLestener("click", searchGif)

function searchGif() {
    let searchTerm = inputEle.value

    fetch(`${GIPHY_URL}?api_key=${GIPHY_KEY}&s=${searchTerm}`)
    .then((result) => result.json)
    .then((contents)=> {
        imgEle.src = contents.data.images.original.url;
    })
    .catch((err)=> console.error(err));
}