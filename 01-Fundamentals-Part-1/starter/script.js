// VALUES & VARIABLES

// let js = 'amazing';
// console.log(40 + 8 + 22 - 12);

// console.log('Vitalii');
// console.log(23);

// let firstName = 'Juicy J';

// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// VARIABLE NAME CONVIENTIONS

// let person = 'Mr. Vitalii';
// let PI = 3.1415;

// let myFirstJob = 'Web Developer';
// let myCurrentJob = 'CIO';

// console.log(myFirstJob + ' ' + myCurrentJob);
// console.log(myCurrentJob);

// create my own country in JS: 
const continent = 'Eurasia';
const country = 'Russia';
const isIsland = 'Popov';
const language = 'russian';
const description = `Russia - is in Eurasia,
and 144 million peop-
le speak russian language.`;

switch (language) {
    case 'chinese' || 'mandarin':
        console.log('Most number of native speakers!');
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'english':
        console.log('3rd place');
        break;
    case 'hindi':
        console.log('Number 4');
        break;
    case 'arabic':
        console.log('5th most spoken');
        break;
    default:
        console.log('Great language too');
}

let population = 144000000;
let populationOfFinland = 6000000;
let averagePopulation = 33000000;

const languageEn = false;
const isNotIsland = true;
const populationMoreThan50M = true;

if (languageEn && populationMoreThan50M && isNotIsland) {
    console.log('You should live in Russia');
} else {
    console.log('Russia does not meet your criteria');
}

const alertPopulation = population > 33000000 ? 'above' : 'below';
console.log(`Russia's population is ${alertPopulation} average!`);

console.log(
    `${country}'s population is ${population > 33000000 ? 'above' : 'below'} average!`,
);




// console.log(description);
// console.log(isIsland + ' ' + country + ' ' + language + " " + population);
// console.log(population / 2);
// console.log(population + 1);
// console.log(population > populationOfFinland);
// console.log(population < averagePopulation);


if (population > averagePopulation) {
    console.log(`Russian's population is above average!`);
} else {
    console.log(`Russian's populations is below average!`);
}

const numNeighbours = Number(prompt('How many neighbours your country have?'));
console.log(numNeighbours);
console.log(typeof numNeighbours);

// if (numNeighbours === 1) {
//     console.log('Only 1 border')
// } else if (numNeighbours >= 2) {
//     console.log('More than 1 border')
// } else {
//     console.log('No border')
// };






//console.log(continent + ". " + country + ": " + population);

//DATA TYPES

// let javascriptIsGood = true;
// console.log(javascriptIsGood);

// console.log(typeof true);
// console.log(typeof javascriptIsGood);
// console.log(typeof 22);
// console.log(typeof 'Vitalii');

// javascriptIsGood = 'javascriptIsAString';
// console.log(typeof javascriptIsGood);

// let cat;
// console.log(cat);
// console.log(typeof cat);

// cat = 'animal';
// console.log(typeof cat);

// console.log(typeof null);


//LET , CONST, VAR

// let age = 26;
// age = 27;

// const birthYear = 1994;

// var job = 'coder';
// job = 'teacher';
// console.log(job);

//BASIC OPERATORS

// const ageVitalii = 1994;
// const ageAnastasia = 1992;
// let currentYear = 2021;
// let currentAgeVitalii = currentYear - ageVitalii;
// let currentAgeAnastasia = currentYear - ageAnastasia;

// console.log(currentAgeVitalii, currentAgeAnastasia);
// console.log(ageVitalii * 2, ageVitalii / 10, 2 ** 3);
// // 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

// const firstName = 'Vitalii';
// const lastName = 'Shutov';
// console.log(firstName + " " + lastName);

// //Assignment operators 
// let x = 10 + 5;
// x += 10; // x = x + 10 = 25
// x *= 4; // x = x * 4 = 100
// x++; // x = x + 1 = 101
// x--; // x = x - 1 = 100
// console.log(x);

// // Comparison operations

// console.log(currentAgeAnastasia > currentAgeVitalii);
// console.log(currentAgeAnastasia < currentAgeVitalii);
// console.log(currentAgeAnastasia <= currentAgeVitalii);
// console.log(currentAgeAnastasia >= currentAgeVitalii);

// console.log(currentYear - 1992 >= 50 - 21);

//OPERATOR PRECEDENCE

// let x, y;
// x = y = 25 - 10 - 5; // x = y = 10, x = 10
// console.log(x, y);

// strings and template literals

// const firstName = 'Vitalii';
// const job = 'programmer';
// const birthYear = 1994;
// const year = 2022;

// const vitalii = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
// console.log(vitalii);

// const vitaliiNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
// console.log(vitaliiNew);

// console.log(`Just a regular string...`);

// console.log(`String \n One more String \n and one more`);

// console.log(`String
// new one
// yah
// dr`);

// IF Else Statements

// const age = 15;

// if (age >= 18) {
//     console.log('Vitalii can start drive a car! Finally!');
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Vitalii, man, You are too young, wait another ${yearsLeft} years :)`);
// };

// const birthYear = 2012;

// let century;
// if (birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }
// console.log(century);

//Conversion and Coercion

//CONVERSION (Manually)
// const inputYear = '1994';
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 26);

// console.log(Number('Vitalii'));
// console.log(typeof NaN);

// console.log(String(23), 23);

//Coercion (Automaticly)
// console.log('I am ' + 26 + ' years old');
// console.log('23' - '10' - 3);
// console.log('22' * '3');
// console.log('23' > '21');

// let n = '1' + 1;
// n = n - 1;
// console.log(n);

//TRUTHY AND FALSY VALUES

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Vitalii'));
// console.log(Boolean({}));
// console.log(Boolean(''));


// const money = 88000;
// if (money) {
//     console.log("Don't spend it all!");
// } else {
//     console.log("You should get a job!");
// }

// let heigth;
// if (heigth) {
//     console.log('Height is defined');
// } else {
//     console.log('Height is not undefined');
// }


// Equality Operators == and ===

// const age = '18';
// if (age === 18) console.log('You just became an adult (strict)');

// if (age == 18) console.log('You just became an adult (loose)');

// const favourite = Number(prompt("What's your favourite number?"));
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite === 22) { // '22' == 22 (loose operator)
//     console.log("Great it's amazing number");
// } else if (favourite === 7) {
//     console.log('7 is also a cool number');
// } else if (favourite === 8) {
//     console.log('9 is also a cool number');
// } else {
//     console.log('Number is not 22 or 7 or 9');
// }

// if (favourite !== 22) console.log('Why not 22?');

//BOOLEAN LOGIC

//True False 

//AND OR NOT


//LOGICAL OPERATION

// const hasDriversLicense = true; // A
// const hasGoodVision = true; // B

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense && hasGoodVision;

// const isTired = false; // C
// console.log(hasDriversLicense && hasGoodVision && isTired);


// if (hasDriversLicense && hasGoodVision && !isTired) {
//     console.log('Sara is able to drive a car!');
// } else {
//     console.log('Someone else should drive...');
// }


//SWITCH STATEMENT

// const day = 'sunday';

// switch (day) {
//     case 'monday': //day === 'monday'
//         console.log('Plan course structure');
//         console.log('Go to coding meetup');
//         break;
//     case 'tuesday': // day === 'tuesday'
//         console.log('Prepare theory videos');
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('Write a letter to home');
//         break;
//     case 'friday':
//         console.log('Wrte code examples');
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log('Enjoy the weekend');
//         break;
//     default:
//         console.log('Not a valid day!');
// }

// const day = 'tuesday';

// if (day === 'monday' || day === 'tuesay') {
//     console.log(`Plan course structure, 
//                  Go to coding meetup`);
// } else if (day === 'wednesday') {
//     console.log('Prepare theory videos');
// } else if (day === 'thursday') {
//     console.log('Write code examples');
// } else if (day === 'friday' || day === 'saturday' || day === 'sunday') {
//     console.log('Enjoy the weekend');
// } else {
//     console.log('Not a valid day');
// }

// STATEMENTS AND EXPRESSIONS

//EXPRESSIONS:
// 8 + 2
// 1993
// true && false && !false

// //STATEMENTS:

// if (23 > 10) {
//     const str = '23 is bigger';
// }

// const me = 'Vit22'
// console.log(`I'm ${2037 + 1111} years old ${me}`);

//THE CONDITIONAL (TERNARY) OPERATOR:

// const age = 26;
// // age >= 18 ? console.log('I like to drink water') :
// //     console.log('I like to drink tea');

// const drink = age >= 18 ? 'water' : 'tea';
// console.log(drink);

// let drink2;
// if (age >= 18) {
//     drink2 = 'water';
// } else {
//     drink2 = 'tea';
// }
// console.log(drink2);

// console.log(`I like to drink ${age >= 18 ? 'water' : 'tea'} `);
