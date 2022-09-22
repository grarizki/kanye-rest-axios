// DEMO JOKE APP
import generateKanye from './generateKanye'
import './styles/main.scss'
import kanye from './assets/kanye-head.png'

const laughImg = document.getElementById('laughImg')
laughImg.src = kanye

const jokeBtn = document.getElementById('jokeBtn')
jokeBtn.addEventListener('click', generateKanye)

generateKanye()
