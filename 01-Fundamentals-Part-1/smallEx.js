// function for SUMMARY of Arrays

function sum(arrays) {
  let sum = 0;
  for(let x of arrays) {
    sum += x;
  }
  return sum;
}

//sum(//NAME OF ARRAY);

-----------------------------------------------------
// COUNT FACTORIAL function

function factorial(n) {
  let product = 1;
  while(n > 1) {
    
    product *= n;
    n--;
  }
  return product;
}

//factorial(//Type here any number);
