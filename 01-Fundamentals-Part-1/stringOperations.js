let string = "This is a new string";

// Getting a part of a string:
string.substring(1,4);  // => "his" 2th, 3th and 4th symbols.
string.slice(1,4);  // => "his".
string.slice(-3);  // => "ing" The last three symbols.
string.split(", ");  // => [ "This is a new string" ]

//Searching in a string:
string.indexOf("i"); // => 2, position of i letter.
string.indexOf("s"); // => 3.
string.indexOf("mm"); // => -1 NOT INCLUDING.
string.lastIndexOf("i"); // => 17;

// Boolean function searching ( start from ES6 ):
string.startsWith("Thi"); // => TRUE
string.endsWith("!"); // => FALSE
string.includes("ing"); // => TRUE

//Creating a modification string's version:
string.replace("his", "ose"); // => 
string.toLowerCase(); // smaler characters
string.toUpperCase(); // bigger characters
string.normalize();

//operations with a characters:
string.charAt(0); // => 'T'
string.charAt(string.length-1); // => 'g' the last character
string.charCodeAt(); // => 84; 16 - bits numbers.
string.charPointAt(); // 

//Adding string function (ES2017) :
"x".padStart(3) // Adding left spaces
"x".padEnd(3) // Adding right spaces
"x".padStart(3, "*");
"x".padEnd(3, "-");

//Mixed string methods:
string.concat("!"); // 'This is a new string!'
"<>".repeat(5); // "<><><><><>"


