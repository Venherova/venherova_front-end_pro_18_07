let year = prompt('Enter your year of birth');
let city = prompt('What city do you live in?');
let sport = prompt('What is your favorite sport?');

let answerAge = 'Your age ';
let answerCity = '';
let answerSport = '';
let error = `We're sorry you didn't want to enter yours `;

if (year !== '') {
  answerAge += (2023 - parseInt(year));  
} else {
  answerAge = error + 'age 😔';
} 

if (city !== '') {
  answerCity = 'You live in the capital of ';
  switch (city.toLowerCase()) {
    case 'київ':
    case 'kyiv':
      answerCity += 'Ukraine';
      break;
    case 'вашингтон':
    case 'washington':
      answerCity += 'USA';
      break;
    case 'лондон':
    case 'london':
      answerCity += 'Great Britain';
      break;
    default:
      answerCity = `You live in the city of ${ city }`;
  }
} else {
  answerCity = error + 'city 😔';
}

if (sport !== '') {
  answerSport = 'Cool! Want to be like ';
  switch (sport.toLowerCase()) {
    case 'футбол':
    case 'football':
      answerSport += 'Lionel Messi';
      break;
    case 'хоккей':
    case 'hockey':
      answerSport += 'Wayne Gretzky';
      break;
    case 'баскетбол':
    case 'basketball':
      answerSport += 'David Robinson';
      break;
    default:
      answerSport = 'Cool! You have the opportunity to become a champion';
  }
} else {
  answerSport = error + 'favorite sport 😔';
}

console.log('Age: ', answerAge);
console.log('City: ', answerCity);
console.log('Sport: ', answerSport);

alert(`${ answerAge }. \n${ answerCity }. \n${ answerSport }. `);
