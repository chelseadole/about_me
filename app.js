'use strict';

prompt('Welcome to the Chelsea\'s CF Guessing Game! Today you\'re going to learn more about the human who made me, a humble website. Her name is Chelsea Fay Dole, and she\'s done some cool stuff in her life. That said, there\'s still a lot of sweet stuff to get to! Try to guess which things she has done, and which I made up. Have fun!');

var errorMessage = 'Hey! No fair, that\'s not a valid answer. You have to enter True, False, T, or F.';
var pointCounter = 0;

var skydivingQuestion = prompt('Okay, time for the first test! Q: Has Chelsea gone skydiving?');
console.log('skydiving');
if (skydivingQuestion = 'True' || 'T') {
  alert('You\'re right! Chelsea went skydiving for the first time this week, on Sunday.');
  pointCounter++;
} else if (skydivingQuestion = 'False' || 'F') {
  alert('ERRRRRRT! Incorrect. Chelsea went skydiving for the first time this week, on Sunday.');
} else {
  alert(errorMessage);
}

var cambodiaQuestion = prompt('Next question. Q: Has Chelsea been hiking in Cambodia?');
console.log('cambodia');
if (cambodiaQuestion = 'True' || 'T') {
  alert('Wrong! To Chelsea\'s great dismay, she has never been hiking in Cambodia. Someday!');
} else if (cambodiaQuestion = 'False' || 'F') {
  alert('Nice job, you\'re correct! Chelsea has not been hiking in Cambodia.');
  pointCounter++;
} else {
  alert(errorMessage);
}

var bolderingQuestion = prompt('You\'re halfway there! Q: Has Chelsea ever gone bouldering in the Cascades?');
console.log('bouldering');
if (boulderingQuestion = 'True' || 'T') {
  alert('Nuh-uh. Chelsea also hasn\'t been bouldering in the Cascades... man, maybe her life isn\'t very interesting after all. :/');
} else if (boulderingQuestion = 'False' || 'F') {
  alert('Sweet, you\'re right! Well, sweet for YOU at least. Not so sweet? The fact that Chelsea has yet to boulder in the Cascades...');
  pointCounter++;
} else {
  alert(errorMessage);
}

var madridQuestion = prompt('Bring on question #4! Q: Has Chelsea ever lived in Madrid?');
console.log('madrid');
if (madridQuestion = 'True' || 'T') {
  alert('Correcto! Chelsea vivió y estudió en Madrid por 4 meses en 2016. Translation? Correct! Chelsea lived and studied in Madrid for 4 months in 2016.');
  pointCounter++;
} else if (madridQuestion = 'False' || 'F') {
  alert('Falso! Chelsea vivió y estudió en Madrid por 4 meses en 2016. Translation? False! Chelsea lived and studied in Madrid for 4 months in 2016.');
} else {
  alert(errorMessage);
}

var lotrQuestion = prompt('Home stretch, this is the last question! Q: Has Chelsea read "The Silmarillion"?');
console.log('lotr');
if (lotrQuestion = 'True' || 'T') {
  alert('Awesome job, you\'re right! Chelsea is an enormous Lord of the Rings nerd, and has read "The Silmarillion.""');
  pointCounter++;
} else if (lotrQuestion = 'False' || 'F') {
  alert('Nope :/ Chelsea is actually a big \'ol Lord of the Rings nerd, and has read "The Silmarillion.""');
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
