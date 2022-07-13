"use strict";
function solveEquation(a, b, c) {
  let arr = [];
  let firstRoot = 0;
  let secondRoot = 0;
  let d = b ** 2 - 4 * a * c;
  if (d < 0) {
    return arr;
  } else if (d == 0) {
    firstRoot = -b / (2 * a)
    arr.push(firstRoot);
  } else {
    firstRoot = (-b + Math.sqrt(d)) / (2 * a);
    secondRoot = (-b - Math.sqrt(d)) / (2 * a);
    arr.push(firstRoot);
    arr.push(secondRoot);
  }
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  "use strict";
  let totalAmount;

  let perc = Number(percent);
  if (Number.isNaN(perc)) {
    return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  }
  let contribut = Number(contribution);
  if (Number.isNaN(contribut)) {
    return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
  }
  let creditAmount = Number(amount);
  if (Number.isNaN(creditAmount)) {
    return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
  }

  let S = creditAmount - contribut;
  let n = Math.trunc((date - Date.now()) / (1000 * 3600 * 24 * 30));
  let P = perc / 12 / 100;
  let payment = S * (P + (P / (((1 + P) ** n) - 1)));
  totalAmount = Number((payment * n).toFixed(2));
  console.log(totalAmount);
  return totalAmount;
}