/* ------------ 002 Activating Strict Mode ------------ */
"use strict";
// let hasDriversLicence = false;
// const passTest = true;

// if (passTest) hasDriverLicence = true;
// if (hasDriversLicence) console.log("I can drive :D");

/* ------------ 003 Functions ------------ */
function logger() {
  console.log("My name is razi");
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  //   console.log(apples, oranges);
  const juice = `Juice with ${apples} apples dan ${oranges} oranges`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
