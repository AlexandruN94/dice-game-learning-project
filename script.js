'use strict';

const totalScoreOne = document.querySelector('#score--0');
const totalScoreTwo = document.getElementById('score--1');
const activePlayer1 = document.querySelector('.player--0');
const activePlayer2 = document.querySelector('.player--1');
const scorePlayer1 = document.getElementById('current--0');
const scorePlayer2 = document.getElementById('current--1');

const winnerText = document.querySelector('.text');
const winnerImage = document.querySelector('.winner');
const diceImage = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing, winningText;

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  totalScoreOne.textContent = 0;
  totalScoreTwo.textContent = 0;
  scorePlayer1.textContent = 0;
  scorePlayer2.textContent = 0;

  winnerText.classList.add('hidden');
  diceImage.classList.add('hidden');
  winnerImage.classList.add('hidden');
  activePlayer1.classList.remove('player--winner');
  activePlayer2.classList.remove('player--winner');
  activePlayer1.classList.add('player--active');
  activePlayer2.classList.remove('player--active');
};
init();

const changePlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  activePlayer1.classList.toggle('player--active');
  activePlayer2.classList.toggle('player--active');
};

btnRoll.addEventListener('click', function () {
  if (playing) {
    const randomRoll = Math.trunc(Math.random() * 6) + 1;

    diceImage.classList.remove('hidden');
    diceImage.src = `dice-${randomRoll}.png`;

    if (randomRoll !== 1) {
      currentScore += randomRoll;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      changePlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 5) {
      playing = false;
      diceImage.classList.add('hidden');
      winnerImage.classList.remove('hidden');
      winnerText.classList.remove('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      winnerText.textContent = `Player ${activePlayer + 1} wins the game!`;
    } else {
      changePlayer();
    }
  }
});

btnNew.addEventListener('click', init);

// ######## My attempts and additions throughout the project ###########

// btnNew.addEventListener('click', function () {});

// document
//     .querySelector(`.player--${activePlayer}`)
//     .classList.remove('player-winner');

// if (scores[activePlayer] >= 100) {
// }
// 2. Check if the player's score is >= 100.
// Finish the game

// Else, switch to the next player

// if (activePlayer === 0) {
//   totalScoreOne.textContent = currentScore;
//   activePlayer1.classList.toggle('player--active');
//   activePlayer2.classList.toggle('player--active');
//   activePlayer = activePlayer === 0 ? 1 : 0;
//   scores[0] += totalScoreOne;
// } else {
//   totalScoreTwo.textContent = currentScore;
//   scores[1] += totalScoreTwo;
//   activePlayer1.classList.toggle('player--active');
//   activePlayer2.classList.toggle('player--active');
// }

// if (activePlayer === 0) {
//   activePlayer1.classList.remove('player--active');
//   activePlayer2.classList.add('player--active');
// } else { @@@ My way of switching the background
//   activePlayer2.classList.remove('player--active');
//   activePlayer1.classList.add('player--active');
// }

// .winner {
//   position: absolute;
//   left: 50%;
//   top: 14.5rem;
//   transform: translateX(-50%);
//   height: 12rem;
// }

// .text {
//   position: absolute;
//   left: 50%;
//   transform: translateX(-50%);
//   top: 29.5rem;
//   box-shadow: 0 0.5rem 10rem rgba(155, 0, 0, 2.2);
//   font-size: 4.5em;
//   display: inline-block;
//   border-radius: 9px;
//   background-color: white;
//   background-color: rgba(255, 255, 255, 0.5);
//   backdrop-filter: blur(10px);
// }
// winnerText.textContent = `Player ${activePlayer + 1} wins the game!`;
