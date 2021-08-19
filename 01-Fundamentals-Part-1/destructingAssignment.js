//Example for Destructing Assignment

let [x,y] = [1,2]; // => let x = 1, y = 2; 
[x,y] = [x+1, y+1]; // => x = x + 1; y = y + 1;
[x, y] = [y, x]; // replace x and y;
[x, y]; // => [3,2]

----------------------------------------------

let o = {x:1, y:2};
for(const[name, value] of Object.entires(0)) {
  console.log(name, value); // 'x 1' and 'y 2';
}; 

----------------------------------------------

let [x,y] = [1]; // => x == 1; y == undefined;
[x,y] = [1,2,3]; // => x = 1; y = 2;
[,x,,y] = [1,2,3,4]; // => x == 2; y == 4;

