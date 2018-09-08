/*

*/

"use strict";

module.exports = {
  sum,  // Sum two integers.
  sayHi // Say hello.
}

function sum(a,b) {
  try {
    return Number(a)+Number(b);
  } catch(err) {
    console.log(`Error in sum: `, err);
    throw err;
  }

}

function sayHi(name) {
  return `Hello ${name.toString()}`;
}
