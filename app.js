'use strict';

alert('Welcome to the Chelsea\'s CF Guessing Game! Today we discover how much you know about Chelsea Dole, the human who made me, a humble website. Remember to respond with either "Yes" or No"!');

var errorMessage = 'Hey! No fair, that\'s not a valid answer. You have to enter "Yes" or "No".';
var pointCounter = 0;

var skydivingQuestion = prompt('Okay, time for the first test! Q: Has Chelsea gone skydiving?').toLowerCase();
console.log('skydiving');
if (skydivingQuestion = 'yes') {
  alert('You\'re right! Chelsea went skydiving for the first time this week, on Sunday.');
  pointCounter++;
} else if (skydivingQuestion = 'no') {
  alert('ERRRRRRT! Incorrect. Chelsea went skydiving for the first time this week, on Sunday.');
} else {
  alert(errorMessage);
}

var cambodiaQuestion = prompt('Next question. Q: Has Chelsea been hiking in Cambodia?').toLowerCase();
console.log('cambodia');
if (cambodiaQuestion = 'yes') {
  alert('Wrong! To Chelsea\'s great dismay, she has never been hiking in Cambodia.');
} else if (cambodiaQuestion = 'no') {
  alert('Nice job, you\'re correct! Chelsea has not been hiking in Cambodia.');
  pointCounter++;
} else {
  alert(errorMessage);
}

var boulderingQuestion = prompt('You\'re halfway there! Q: Has Chelsea ever gone bouldering in the Cascades?').toLowerCase();
console.log('bouldering');
if (boulderingQuestion = 'yes') {
  alert('Nuh-uh. Chelsea also hasn\'t been bouldering in the Cascades... man, maybe her life isn\'t very interesting after all. :/');
} else if (boulderingQuestion = 'no') {
  alert('Sweet, you\'re right! Well, sweet for YOU at least. Not so sweet? The fact that Chelsea has yet to boulder in the Cascades...');
  pointCounter++;
} else {
  alert(errorMessage);
}

var madridQuestion = prompt('Bring on question #4! Q: Has Chelsea ever lived in Madrid?').toLowerCase();
console.log('madrid');
if (madridQuestion = 'yes') {
  alert('Correcto! Chelsea vivió y estudió en Madrid por 4 meses en 2016. AKA: Correct! Chelsea lived and studied in Madrid for 4 months in 2016.');
  pointCounter++;
} else if (madridQuestion = 'no') {
  alert('Falso! Chelsea vivió y estudió en Madrid por 4 meses en 2016. AKA: False! Chelsea lived and studied in Madrid for 4 months in 2016.');
} else {
  alert(errorMessage);
}

var lotrQuestion = prompt('Home stretch, this is the last question! Q: Has Chelsea read "The Silmarillion"?').toLowerCase();
console.log('lotr');
if (lotrQuestion = 'yes') {
  alert('Awesome job, you\'re right! Chelsea is an enormous Lord of the Rings nerd, and has read "The Silmarillion.""');
  pointCounter++;
} else if (lotrQuestion = 'no') {
  alert('Nope :/ Chelsea is actually a big \'ol Lord of the Rings nerd, and has read "The Silmarillion.""');
} else {
  alert(errorMessage);
}

//FINAL TALLY

if (pointCounter == 5) {
  alert('Wow, amazing! You got 100%, 5 of 5 questions correct! Is this Chelsea taking this quiz...?');
} else if (pointCounter == 4) {
  alert('Nice job, you got 80%, 4 of 5 questions correct! You know Chelsea really well. :)');
} else if (pointCounter == 3) {
  alert('Not bad, you got 60%, 3 of 5 questions correct! You could use a little work, but I\'d say that\'s a pass.');
} else if (pointCounter == 2) {
  alert('Eh, you could benefit from more conversations with Chelsea. You got 40%, 2 of 5 questions correct. :/');
} else if (pointCounter == 1) {
  alert('GodDAMN, that is one bad score. You got 20%, 1 of 5 questions correct. Are you sure you\'ve met Chelsea!?');
} else {
  alert('Dude. Did you even try? You got 0%, 0 of 5 quesitons correct. Now that\'s just sad. Try again?');
}
