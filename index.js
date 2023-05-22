var btnSelector = document.getElementById("btn");
var jokeSelector = document.getElementById("jokes");

var api = {
        method: 'GET',
        headers: { 'X-Api-Key': 'OFTdAaaOoH9JFei33pU+Hw==b8twZVypxGUqxCpu'},
    }

var apiUrl = 'https://api.api-ninjas.com/v1/dadjokes?limit=' + 1;

async function getJoke() {
    jokeSelector.innerText = "Updating...";
    btnSelector.Disabled = true;
    btnSelector.innerHTML="Loading...";
    var response = await fetch(apiUrl, api);
    var makeJson = await response.json();
    btnSelector.Disabled = false;
    btnSelector.innerText = "Get Jokes"

jokeSelector.innerText = makeJson[0].joke;
}

btnSelector.addEventListener("click", getJoke)
