var page = Math.ceil(Math.random() * 7267);
var randomNumber = Math.ceil(Math.random() * 9);

function getQuote() {
    fetch(`https://quote-garden.herokuapp.com/api/v3/quotes?page=${page}`)
    .then(response=>response.json())
    .then(data=>{
        document.getElementById("quote").innerHTML = data.data[randomNumber].quoteText;
        document.getElementById("author").innerHTML = `- ${data.data[randomNumber].quoteAuthor}`;
    });
    page = Math.ceil(Math.random() * 7267);
    randomNumber = Math.ceil(Math.random() * 9);
}

function changeMode() {
    if (document.querySelector("i").classList.contains("fa-sun")) {
        document.querySelector("i").setAttribute("class", "fas fa-moon");
        document.querySelector("body").style.filter = "invert(100%) saturate(200%)";
    } else {
        document.querySelector("i").setAttribute("class", "fas fa-sun");
        document.querySelector("body").style.filter = "invert(0%) saturate(100%)";
    }
}
