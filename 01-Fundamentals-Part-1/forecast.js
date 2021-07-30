//1)UNDERSTANDING the problem:
//--Array transformed to string, separated by ...
//-- What is the X days? Answer: index + 1

//2)Breaking up into sub-problems.
//--Transform array into string
//--Transform each element to string °C
//--Strings needs to contain day (index +1)
//--Add ... between elements and start end of string
//-Log string to console

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];
const currentDays = [];

console.log(`${data1[0]}°C.... ${data1[0]}°C.... ${data1[0]}°C.... `);

const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str = str + `${arr[i]}°C in ${i + 1} days ... `;
  }
  console.log(' ... ' + str);
};

printForecast(data1);
