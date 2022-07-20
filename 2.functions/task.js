// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;
  sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    avg = Number((sum / arr.length).toFixed(2));
    if (!min) {
      min = arr[i];
      max = arr[i];
    } else {
      if (min > arr[i]) {
        min = arr[i];
      }
      if (max < arr[i]) {
        max = arr[i];
      }
    }
  }
  return { min: min, max: max, avg: avg };
}


// Задание 2
function worker(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

  }
  return sum;
}

function makeWork(arrOfArr, func) {
  let max;
  for (i = 0; i < arrOfArr.length; i++) {
    if (!max) {
      max = func(arrOfArr[0]);
    } else {
      if (max < func(arrOfArr[i])) {
        max = func(arrOfArr[i]);
      }
    }
  }
  return max;
}


// Задание 3
function worker2(arr) {
  let min;
  let max;

  for (let i = 0; i < arr.length; i++) {
    if (!min) {
      min = arr[i];
      max = arr[i];
    } else {
      if (min > arr[i]) {
        min = arr[i];
      } if (max < arr[i]) {
        max = arr[i];
      }
    }
  }
  return diff = Math.abs(min - max);
}


function makeWork2(arrOfArr, worker2) {
  let maxDif;
  for (let i = 0; i < arrOfArr.length; i++) {
    if (!maxDif) {
      maxDif = worker2(arrOfArr[i]);
    } else {
      if (maxDif < worker2(arrOfArr[i])) {
        maxDif = worker2(arrOfArr[i]);
      }
    }

  }
  return maxDif;
}