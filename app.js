'use strict';

prompt('Welcome to the Chelsea\'s CF Guessing Game! Today you\'re going to learn more about the human who made me, a humble website. Her name is Chelsea Fay Dole, and she\'s done some cool stuff in her life. That said, there\'s still a lot of sweet stuff to get to! Try to guess which things she has done, and which I made up. Have fun!');

var skydivingQuestion = prompt('Okay, time for the first test! Q: Has Chelsea gone skydiving?');
console.log('skydiving');
if (skydivingQuestion = 'True' || 'T') {
  alert('You\'re right! Chelsea went skydiving for the first time this week, on Sunday.')
} if else (skydivingQuestion = 'False' || 'F') {
  alert('ERRRRRRT! Incorrect. Chelsea went skydiving for the first time this week, on Sunday.')
} else {
  alert('Hey! No fair, that\'s not a valid answer. You have to enter True, False, T, or F.')
}

alert('Nice to meet you, ' + userName + '!');

var spiritAnimal = prompt('What\'s your spirit animal?');
console.log('Q: What\'s your spirit animal?');
console.log('A: ' + userName + '\'s spirit animal is a ' + spiritAnimal);
alert('Nice, ' + userName + '! ' + spiritAnimal + 's are super awesome.');

var spiritAnimalYears = prompt('For how many years has that been your spirit animal?');
console.log('Q: For how many years has that been your spirit animal?');
console.log('A: Years that user has liked their spirit animal.');
if (spiritAnimalYears >= 3) {
  yearsResponse = 'Dayuuuum ' + userName + ', you have liked ' + spiritAnimal + 's for a while now! ' + spiritAnimalYears + ' years is quite some time.';
} else {
  yearsResponse = 'That\'s pretty cool, ' + userName + '. So you\'re a pretty new ' + spiritAnimal + '-lover. ' + spiritAnimalYears + ' years isn\'t very long.';
}
alert(yearsResponse);

var spiritAnimalName = prompt('What is your spirit animal\'s name?');
console.log('Q: What is your spirit animal\'s name?');
console.log('A: Name of spirit animal.');
alert('That\'s a great name, ' + userName + '! So your spirit animal is a ' + spiritAnimal + ' named ' + spiritAnimalName + ' who you have had for ' + spiritAnimalYears + ' years.');
