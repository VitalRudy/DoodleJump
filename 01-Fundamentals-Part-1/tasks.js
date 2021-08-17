// Task 1
// There is a (Array) = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
// Output all elements, that < 5,

const a = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];

// Solution 1 

const f1 = () => {
  let out = '';
  for(let i = 0; i < a.length; i++) {
    if (a[i] < 5) out += a[i] + ' ';
  }
  console.log(out);
}

f1();

//Solution 2

const f1_2 = () => {
  let res = a.filter((item) => item < 5);
  console.log(res);
};

f1_2();

-------------------------------------------------------------------------------
// Task 2
/* There are Arrays:
a = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].
*/
// You need to output common elements(in a separate ARRAY) for these two arrays.

// Solution 1.

const a2 = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
const b2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

const f2 = () => {
  let res = [];
  for (let i = 0; i < a2.length; i++) {
    if (b2.includes(a2[i])) res.push(a2[i]);
  }
  return res;
};

console.log(f2());

// Solution 2

const f2_2 = () => {
  return a2.filter((item) => b2.includes(item));
};

console.log(f2_2());

-------------------------------------------------------------------------------
//Task 3
//Sort the values in ascending and descending order
// d = {1: 2, 3: 4, 4: 3, 2: 1, 0: 0};

let d3 = {
  1: 22,
  2: 4,
  3: 3,
  4: 1,
  2: 7,
  0: 0,
  9: 5,
};

for (let key in d3) {
  console.log(d3[key]);
};

// solution 2

function ascFunc(a, b) {
  return a - b;
}

function descFunc(a, b) {
  return b - a;
}

const f3 = (obj, type = "asc") => {
  let val = Object.values(obj);
  if (type == "asc") return val.sort(ascFunc);
  if (type == "desc") return val.sort(descFunc);
};

console.log(f3(d3, "asc"));
console.log(f3(d3, "desc"));

-------------------------------------------------------------------------------
// Task 4
// Write a programm to merge two objects in one.
  
const a4 = {1:10, 2:20},
const b4 = {3:30, 4:40},
const c4 = {5:50, 6:60};

// solution 

const obj4 = Object.assign({}, a4, b4, c4);
console.log(obj4);

-------------------------------------------------------------------------------
//Task 5
//Write a code , that change an integer into a string.

const a5 = 456,  
const res5 = a5.toString();
console.log(res5);
console.log(typeOf res5);

-------------------------------------------------------------------------------
//Task 6
//Write a check to see if the string is a pallindrome or not.
  
const a6 = 'abba1';

const f6 = str => {
  return str === str.split('').reverse().join('');
}

console.log(f6(a6));

-------------------------------------------------------------------------------
//Task 7
// Input the first one and the last one element of the list.

const a7 = [1, 2, 3, 4, 5];
