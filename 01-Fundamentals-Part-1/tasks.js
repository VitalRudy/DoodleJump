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
