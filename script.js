document.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      document.querySelector('#subt').click();
    }
  });
  let randomNumber = parseInt(Math.random() * 100 + 1);
  // console.log(randomNumber);
  const submitBtn = document.querySelector('#subt');
  const userInput = document.querySelector('.guessField');
  const guessSlot = document.querySelector('.guesses');
  const remaining = document.querySelector('.lastResult');
  const lowOrHi = document.querySelector('.lowOrHi');
  const startOver = document.querySelector('.resultParas');
  
  const p = document.createElement('p');
  
  let prevGuess = [];
  let numGuess = 1;
  
  let playGame = true;
  
  if (playGame) {
    submitBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const guess = parseInt(userInput.value);
      validateGuess(guess);
    });
  }
  
  function validateGuess(guess) {
    if (guess <= 0 || guess > 100) {
      alert('Please Enter a number between 1 to 100');
    } else if (isNaN(guess)) {
      alert('Please enter a valid Number');
    } else {
      prevGuess.push(guess);
      if (numGuess === 10) {
        displayGuess(guess);
        displayMessage(`Game Over. Randome number was ${randomNumber}`);
        endGame();
      } else {
        displayGuess(guess);
        checkGuess(guess);
      }
    }
  }
  
  function checkGuess(guess) {
    if (guess === randomNumber) {
      displayMessage(`You Guessed it right random number was ${randomNumber}`);
      endGame();
    } else {
      if (guess < randomNumber) {
        displayMessage(`Number is too Low`);
      } else if (guess > randomNumber) {
        displayMessage(`Number is too High`);
      }
    }
  }
  
  function displayGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess},   `;
    numGuess++;
    remaining.innerHTML = 11 - numGuess;
  }
  
  function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}<h2>`;
  }
  
  function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.innerHTML = `<button id = "newGame">Star New Game</button>`;
    startOver.appendChild(p);
    newGame();
    playGame = false;
  }
  function newGame() {
    const newGamebtn = document.querySelector('#newGame');
    newGamebtn.addEventListener('click', () => {
      let randomNumber = parseInt(Math.random() * 100 + 1);
      prevGuess = [];
      numGuess = 1;
      guessSlot.innerHTML = '';
      remaining.innerHTML = 11 - numGuess;
      userInput.removeAttribute('disabled');
      startOver.removeChild(p);
      playGame = true;
    });
  }
  