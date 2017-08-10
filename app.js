'use strict';

alert('Welcome to Chelsea Dole\'s \"About Me\" page. We\'re going to kick things off with a fun guessing game, so you can learn more about me. Remember to respond with either "Yes" or No," and have fun!');

var errorMessage = 'Hey! No fair, that\'s not a valid answer. Please enter "Yes" or "No".';
var errorMessageNum = 'Please enter a number.';
var pointCounter = 0;

var guestName = prompt('First things first: What is your name?');

var skydivingQuestion = prompt('Okay, ' + guestName + '. Time for the first test! Q: Has Chelsea gone skydiving?').toLowerCase();
console.log(skydivingQuestion);
if (skydivingQuestion === 'yes') {
  alert('You\'re right! Chelsea went skydiving for the first time this week, on Sunday.');
  pointCounter++;
} else if (skydivingQuestion === 'no') {
  alert('ERRRRRRT! Incorrect. Chelsea went skydiving for the first time this week, on Sunday.');
} else {
  alert(errorMessage);
}

var cambodiaQuestion = prompt('Q: Has Chelsea been hiking in Cambodia?').toLowerCase();
console.log(cambodiaQuestion);
if (cambodiaQuestion === 'yes') {
  alert('Wrong! To Chelsea\'s great dismay, she has never been hiking in Cambodia.');
} else if (cambodiaQuestion === 'no') {
  alert('Nice job, you\'re correct! Chelsea has not been hiking in Cambodia.');
  pointCounter++;
} else {
  alert(errorMessage);
}

var boulderingQuestion = prompt('Q: Has Chelsea ever gone bouldering in the Cascades?').toLowerCase();
console.log(boulderingQuestion);
if (boulderingQuestion === 'yes') {
  alert('Nuh-uh. Chelsea also hasn\'t been bouldering in the Cascades... man, maybe her life isn\'t very interesting after all. :/');
} else if (boulderingQuestion === 'no') {
  alert('Sweet, you\'re right! Well, sweet for YOU at least. Not so sweet? The fact that Chelsea has yet to boulder in the Cascades...');
  pointCounter++;
} else {
  alert(errorMessage);
}

var madridQuestion = prompt('Q: Has Chelsea ever lived in Madrid?').toLowerCase();
console.log(madridQuestion);
if (madridQuestion === 'yes') {
  alert('Correcto! Chelsea vivió y estudió en Madrid por 4 meses en 2016. AKA: Correct! Chelsea lived and studied in Madrid for 4 months in 2016.');
  pointCounter++;
} else if (madridQuestion === 'no') {
  alert('Falso! Chelsea vivió y estudió en Madrid por 4 meses en 2016. AKA: False! Chelsea lived and studied in Madrid for 4 months in 2016.');
} else {
  alert(errorMessage);
}

var lotrQuestion = prompt('Q: Has Chelsea read "The Silmarillion"?').toLowerCase();
console.log(lotrQuestion);
if (lotrQuestion === 'yes') {
  alert('Awesome job, you\'re right! Chelsea is an enormous Lord of the Rings nerd, and has read "The Silmarillion."');
  pointCounter++;
} else if (lotrQuestion === 'no') {
  alert('Nope :/ Chelsea is actually a big ol\' Lord of the Rings nerd, and has read "The Silmarillion."');
} else {
  alert(errorMessage);
}

var birthyearAttemptsRemaining = 3;
while (birthyearAttemptsRemaining >= 0) {
  var birthyearQuestion = prompt('What year was Chelsea born?');
  console.log(birthyearQuestion);
  if (parseInt(birthyearQuestion) === 1995) {
    pointCounter++;
    alert('Correct! Chelsea was born in 1995.');
    break;
  } else if (parseInt(birthyearQuestion) < 1995) {
    alert('Nope! Try a higher number. You have ' + birthyearAttemptsRemaining + ' tries remaining.');
    birthyearAttemptsRemaining--;
  } else if (parseInt(birthyearQuestion) > 1995) {
    alert('Nope! Try a lower number. You have ' + birthyearAttemptsRemaining + ' tries remaining.');
    birthyearAttemptsRemaining--;
  } else {
    alert(errorMessageNum);
    birthyearAttemptsRemaining--;
  }
}

var favPotterCharacters = ['hermione', 'remus', 'sirius', 'dumbledore'];
var printPotter = favPotterCharacters.join(', ');
for (var i = 6; i >= 0;i--) {
  var potterQuestion = prompt('Last question! Q: Can you guess one of Chelsea\'s favorite Harry Potter characters?');
  console.log(potterQuestion);
  if (favPotterCharacters.includes(potterQuestion.toLowerCase())) {
    pointCounter++;
    alert('Nice job! Chelsea\'s favorite HP characters are ' + printPotter + '.');
    break;
  } else {
    alert('No, ' + potterQuestion + ' isn\'t one of her favorites. You have ' + i + ' attempts remaining.');
  }
}

//FINAL TALLY

alert('Thanks so much for playing! You got ' + pointCounter + '/7 answers correct.');
