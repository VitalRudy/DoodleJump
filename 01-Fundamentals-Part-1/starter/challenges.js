// frist challenges

// let markWeights = 78;
// let johnWeights = 92;

// let markHeights = 1.69;
// let johnHeights = 1.95;

// // const markBMI = markWeights / markHeights ** 2;
// const markBMI = markWeights / (markHeights * markHeights);
// console.log(markBMI);

// // const johnBMI = johnWeights / johnHeights ** 2;
// const johnBMI = johnWeights / (johnHeights * johnHeights);
// console.log(johnBMI);

// const markHigherBMI = markBMI > johnBMI;

// console.log(markHigherBMI);

// let markWeights = 95;
// let johnWeights = 85;

// let markHeights = 1.88;
// let johnHeights = 1.76;

// // const markBMI = markWeights / markHeights ** 2;
// const markBMI = markWeights / (markHeights * markHeights);

// // const johnBMI = johnWeights / johnHeights ** 2;
// const johnBMI = johnWeights / (johnHeights * johnHeights);
// //console.log(johnBMI, markBMI);

// if (markBMI > johnBMI) {
//     console.log(`Mark's BMI is (${markBMI}) higher than John's (${johnBMI})!`);
// } else {
//     console.log(`John's BMI is (${johnBMI}) higher than Mark's (${markBMI})!`);
// }

// Coding Challenge 3

// const dolphinsAverageScore = ((96 + 108 + 89) / 3);
// const koalasAverageScore = ((88 + 91 + 110) / 3);
// console.log(dolphinsAverageScore, koalasAverageScore);

// if (dolphinsAverageScore > koalasAverageScore) {
//     console.log('Dolphins are WINNERS! ! !');
// } else if (dolphinsAverageScore < koalasAverageScore) {
//     console.log('Coalas are WINNERS! ! !');
// } else if (dolphinsAverageScore === koalasAverageScore) {
//     console.log('Both team are WINNERS! ! ! Ii is DRAW!');
// } else {
//     console.log('What else??!')
// };


// const dolphinsGame1 = 97;
// const dolphinsGame2 = 112;
// const dolphinsGame3 = 101;

// const koalasGame1 = 109;
// const koalasGame2 = 95;
// const koalasGame3 = 123;

// if (dolphinsGame1 > 100 && koalasGame1 < 100) {
//     console.log('Dolphins WIN first game');
// } else if (dolphinsGame1 < 100 && koalasGame1 > 100) {
//     console.log('Koalas WIN first game');
// } else if (dolphinsGame1 === 100 && koalasGame1 === 100) {
//     console.log(`It's a DRAW!!! Both teams are WINNERS!`);
// } else {
//     console.log('No one win this epic game.')
// };

// if (dolphinsGame2 > 100 && koalasGame2 < 100) {
//     console.log('Dolphins WIN first game');
// } else if (dolphinsGame2 < 100 && koalasGame2 > 100) {
//     console.log('Koalas WIN first game');
// } else if (dolphinsGame2 === 100 && koalasGame2 === 100) {
//     console.log(`It's a DRAW!!! Both teams are WINNERS!`);
// } else {
//     console.log('No one win this epic game.')
// };

// if (dolphinsGame3 > 100 && koalasGame3 < 100) {
//     console.log('Dolphins WIN first game');
// } else if (dolphinsGame3 < 100 && koalasGame3 > 100) {
//     console.log('Koalas WIN first game');
// } else if (dolphinsGame3 === 100 && koalasGame3 === 100) {
//     console.log(`It's a DRAW!!! Both teams are WINNERS!`);
// } else {
//     console.log('No one win this epic game.')
// };

// const dolphinsGame1 = 97;
// const dolphinsGame2 = 112;
// const dolphinsGame3 = 101;

// const koalasGame1 = 109;
// const koalasGame2 = 95;
// const koalasGame3 = 106;

// if (dolphinsGame1 > 100 && koalasGame1 < 100) {
//     console.log('Dolphins WIN first game');
// } else if (dolphinsGame1 < 100 && koalasGame1 > 100) {
//     console.log('Koalas WIN first game');
// } else if (dolphinsGame1 === koalasGame1) {
//     console.log(`It's a DRAW!!! Both teams are WINNERS!`);
// } else {
//     console.log('No one win this epic game.');
// };

// if (dolphinsGame2 > 100 && koalasGame2 < 100) {
//     console.log('Dolphins WIN first game');
// } else if (dolphinsGame2 < 100 && koalasGame2 > 100) {
//     console.log('Koalas WIN first game');
// } else if (dolphinsGame2 === koalasGame2) {
//     console.log(`It's a DRAW!!! Both teams are WINNERS!`);
// } else {
//     console.log('No one win this epic game.');
// };

// if (dolphinsGame3 > 100 && koalasGame3 < 100) {
//     console.log('Dolphins WIN first game');
// } else if (dolphinsGame3 < 100 && koalasGame3 > 100) {
//     console.log('Koalas WIN first game');
// } else if (dolphinsGame3 === koalasGame3 && dolphinsGame3 >= 100 && koalasGame3 >= 100) {
//     console.log(`It's a DRAW!!! Both teams are WINNERS!`);
// } else {
//     console.log('No one win this epic game.');
// };

//CODING CHALLENGE 4

// const bill = 275;

// const tip = bill >= 50 && bill <= 300 ? Number(bill * 0.15) : Number(bill * 0.2);

// console.log(`The bill was ${bill}, the tip was ${tip} and the total value is ${bill + tip}`);

// const bill = 40;

// const tip = bill >= 50 && bill <= 300 ? Number(bill * 0.15) : Number(bill * 0.2);

// console.log(`The bill was ${bill}, the tip was ${tip} and the total value is ${bill + tip}`);

// const bill = 430;

// const tip = bill >= 50 && bill <= 300 ? Number(bill * 0.15) : Number(bill * 0.2);

// console.log(`The bill was ${bill}, the tip was ${tip} and the total value is ${bill + tip}`);

//Short Version :

// const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;