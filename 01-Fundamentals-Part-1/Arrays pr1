// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 18, 15, 12, 9, 5];

// 1) Understanding problem:
// ---What is temper amplitude ? Answer: difference between highest and lowest temperature.
//---How to compute max and min temperature.
//--Whats a sensor error? And what to do?

//2)Breaking up into sub-problems
//--How to ignore errors?
//--Find max value in temp array
//--Find min value in temp array
//--Subtract min from max(amplitude) and return it

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temperatures.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }

  console.log(max, min);
  return max - min;
};

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

//PROBLEM 2 :
// FUNCTION shold now recieve two arrays of temperatures.

//UNDERSTANDING the problem:
//-- With 2 arrays , should we implement functionality twice? NO, just merge teo arrays.

//2)Breaking up into sub-problems
// - Merge 2 arrays

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }

  console.log(max, min);
  return max - min;
};

const amplitudeNew = calcTempAmplitudeNew([3, 6, 9], [1, 7, 19]);
console.log(amplitudeNew);
