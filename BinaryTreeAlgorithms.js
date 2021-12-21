'use strict';

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//     a
//    / \
//   b   c
//  / \   \
// d   e   f

depthFirstValues(a);

const depthFirstValues = root => {
  if (root === null) return [];

  // todo
  const result = [];
  const stack = [root]; // [ null ]
  while (stack.length > 0) {
    const current = stack.pop();
    result.push(current.val);

    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }
  return result();
};

// Constructor function

function Todo(name, completed) {
  this.name = name;
  (this.completed = completed),
    (this.getTodoName = function () {
      console.log(this.name);
    });
}

const todo = new Todo('Buy Eggs', false);

const todo2 = new Todo('Do my homework', true);

todo.getTodoName();
todo2.getTodoName();

