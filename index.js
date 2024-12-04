let randomNo= parseInt(Math.random()*100+1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining =document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const guess=(userInput.value);
        validateGuess(guess)
    });
}

function validateGuess(guess){
   if(isNaN(guess) || guess<1 ){
    alert('please enter a valid number');
   }
   else if(guess >100){
    alert('please enter number less than 100');
       }
    else{
        prevGuess.push(guess);
        if(numGuess ===11){
            displayGuess(guess);
            displayMessage(`Game Over ! Random Number was ${randomNo}`);
            endGame();
        }
        else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }   
}

function checkGuess(guess){
    if(guess == randomNo){
        displayMessage(`🎉🥳You won Babu 😊! you guessed it Right : Random Number was ${randomNo}`);
        endGame();
    }
    else if(guess < randomNo){
        displayMessage(`Number Is Low`);
    }
    else{
        displayMessage(`Number Is High`);
    }
}
//console.log(guessSlot);

function displayGuess(guess){
 guessSlot.innerHTML +=` ${guess} ,`;
 numGuess++;
 remaining.innerHTML = `${11-numGuess}`;
 userInput.value='';
}

function displayMessage(message){
   lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame(){
    userInput.value='';
    userInput.setAttribute('disabled',''); //to disable the value in starting

p.classList.add('button');
  p.innerHTML = `<button id="newGame"> Start New Game</button>`
  startOver.appendChild(p);
  playGame=false;
  newGame();

}
function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click',function(e){
        randomNo= parseInt(Math.random()*10+1);
        numGuess=1;
        guessSlot.innerHTML = '';
        remaining.innerHTML=` ${11-numGuess} `;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame =true;
    })

}
