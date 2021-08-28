
// Technic one
var a = 3;
var b = 5;

var temp = a;
a = b;
b = temp;

console.log(`After swap using technic one \n a = ${a} b = ${b}`);

// Technic Two
var x = 3;
var y = 5;

// Make a mathmetical oparation
x = x + y; // add x, y value x = 8
y = x - y; // put value x into y {y = 8 - 5; y = 3}
x = x - y; // now y = 3 and x = 8 so we can make swap it without temp variable

console.log(`After swap using technic Two \n x = ${x} y = ${y}`);

// Technic Three ( Using Javascript technic ES6)
var p = 3;
var q = 5;

[p, q] = [q, p]; // It's a most simple way to swap a value in javascript

console.log(`After swap using technic Three \n p = ${p} q = ${q}`);


// Technic Four (Using Bitwize oparator technic)
m = 3;
n = 5;

m = m ^ n;
n = m ^ n;
m = m ^ n;


console.log(`After swap using technic Four \n m = ${m} n = ${n}`);