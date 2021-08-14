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
