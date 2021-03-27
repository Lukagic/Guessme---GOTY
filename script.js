'use strict';

//array of winning messages
const forTheWin = [
  'WOOW! IS YOUR NAME ALBERT EINSTEIN???',
  'YOUR IQ IS OVER 9000!!!',
  'STEPHEN HAWKING BOWS DOWN TO YOU',
  'YOU SHOULD WORK FOR NASA!',
  'YOUR SUPERHERO NAME WOULD BE MEGA-BRAINMAN',
  'TEACH ME YOUR WAYS',
  'ARE YOU PSYCHIC???',
  'STOP CHEATING, HOW DID YOU KNOW THAT???',
  'YOU ARE SO SMART AND BEAUTIFUL',
  'EVERYONE WANTS TO BE YOU',
];

let randomString = forTheWin[Math.floor(Math.random() * forTheWin.length)];

let secretNumber = Math.floor(Math.random() * 20 + 1);
console.log(secretNumber);

let score = 20;

let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.main__message').textContent = message;
};

// let results = [];

// let currentHighscore = calcMaxScore(results);

//main__check button
document.querySelector('.main__check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.main__guess').value);

  //if input is empty
  if (!guess) {
    displayMessage('No input');
    //if the number is guessed corectly
  } else if (guess === secretNumber) {
    document.querySelector('.header__number').textContent = secretNumber;
    displayMessage('correct number');
    document.querySelector('.main__check').textContent = randomString;
    document.querySelector('.main__check').style.fontSize = '1.2rem';
    document.querySelector('.header__again').classList.add('active');
    document.querySelector('.main__check').classList.add('active');
    document.querySelector('.header__number').classList.add('active');
    document.querySelector('.main__guess').classList.add('active');

    // document.querySelector('.header__number').style.border = '2px solid grey';
    document.body.style.background = 'skyblue';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.main__highscore').textContent = highscore;
    }

    // let currentScore = document.querySelector('.main__score').textContent;
    // results.push(currentScore);
    // console.log(results);
    // document.querySelector('.main__score').textContent = calcMaxScore(results);
    //if you under or ever the correct number
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high' : 'Too low');
      score--;
      document.querySelector('.main__score').textContent = score;
    } else {
      displayMessage('woooooow! you suck!');

      document.querySelector('.main__score').textContent = 0;
    }
  }

  //   } else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.main__message').textContent = 'Too low';
  //       score--;
  //       document.querySelector('.main__score').textContent = score;
  //     } else {
  //       document.querySelector('.main__message').textContent =
  //         'woooooow! you suck!';
  //       document.querySelector('.main__score').textContent = 0;
  //     }
  //   } else if (guess > secretNumber) {
  //     //if you suck
  //     if (score > 1) {
  //       document.querySelector('.main__message').textContent = 'Too high';
  //       score--;
  //       document.querySelector('.main__score').textContent = score;
  //     } else {
  //       document.querySelector('.main__message').textContent =
  //         'woooooow! you suck!';
  //       document.querySelector('.main__score').textContent = 0;
  //     }
  //   }
});

//reset button
document.querySelector('.header__again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.main__score').textContent = score;
  document.querySelector('.main__guess').value = '';
  displayMessage('start guessing!');
  secretNumber = Math.floor(Math.random() * 20 + 1);
  console.log(secretNumber);

  document.body.style.background = '#222';
  document.querySelector('.header__number').style.width = '15rem';
  document.querySelector('.header__number').textContent = '?';
  document.querySelector('.main__check').textContent = 'Check!';
  randomString = forTheWin[Math.floor(Math.random() * forTheWin.length)];
  document.querySelector('.header__again').classList.remove('active');
  document.querySelector('.main__check').classList.remove('active');
  document.querySelector('.header__number').classList.remove('active');
  document.querySelector('.main__guess').classList.remove('active');
});
console.log(secretNumber);

// const calcMaxScore = function (arr) {
//   let max = arr[0];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// };
