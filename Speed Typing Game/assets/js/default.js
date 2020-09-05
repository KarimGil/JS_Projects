let time = 5;
let score = 0
let isPlaying;

const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
"pizza",
"burger",
"India",
"Pakistan",
"cycle",
"mobile",
"statue",
"lucky",
"developer",
"hero",
"movies",
"python",
"django",
"frontend",
"design",
"development",
"developer",
"protein shake",
"protein powder",
"halwa puri",
"chicken",
"beef",
"haleem",
"job",
"salary",
"business",
"internship",
"increment",
"position",
"title",
"designation",
]

window.addEventListener('load',init);
function init(){

    showWords(words);
    wordInput.addEventListener('input',startMatch)
    setInterval(countDown, 1000);
    setInterval(checkStatus, 50);
}

function showWords(words){

    const randIndex = Math.floor(Math.random() * words.length);
    currentWord.innerHTML = words[randIndex];
}


function startMatch(){

    if(matchwords()==true){
        isPlaying = true;
        time = 6;
        showWords(words);
        wordInput.value = '';
        score++;
    }
    if(score == -1){
        scoreDisplay.innerHTML = 0;

    }
    else{
    scoreDisplay.innerHTML = score;
    }
}

function matchwords(){

    if (wordInput.value === currentWord.innerHTML) {
        message.innerHTML = ('Correct');
        return true;
    
    }
    else{
        message.innerHTML = ('');
        return false;
    }


}

function countDown(){

    if (time > 0){
        time--;
    }
    else if (time == 0){
        isPlaying = false;
    }

    timeDisplay.innerHTML = time;
}

function checkStatus(){

    if(isPlaying == false && time == 0){

        message.innerHTML = ('Game Over!!');
        score = -1;

    }
}