"use strict"

function solveEquation(a, b, c) {
  let arr = [];
  // код для задачи №1 писать здесь

  let discr = b ** 2 - 4 * a * c;

  if (discr < 0) {
    return arr;
  } else if ( discr === 0) {
    let x = -b / (2 * a);
    arr = [x];
  } else if ( discr > 0) {
    let x1 = (-b + Math.sqrt(discr) ) / (2 * a);
    let x2 = (-b - Math.sqrt(discr) ) / (2 * a);
    arr = [x1, x2];


  }


  return arr;
}



function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
