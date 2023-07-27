import genarateJoke from "./genarete";
import './styles/main.scss';
import laughing from "./asset/laughing.svg"

const laughImg = document.getElementById('laughImg')
laughImg.src = laughing

const jokeBtn = document.getElementById('jokeBtn')
jokeBtn.addEventListener('click',genarateJoke)

genarateJoke()