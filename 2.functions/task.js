// Задание 1
let min, max, sum, avg;

function getArrayParams(arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max){
      max = arr[i];

    } else if (arr[i] < min){
      min = arr[i];
    } 

    sum = sum + arr[i];

  }

  let avg = sum / arr.length;

  avg = Number(avg.toFixed(2));



  // Ваш код

  return { min: min, max: max, avg: avg };
}





// Задание 2
function worker(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
   
    sum = sum + arr[i];
  }
  return sum;
}

function makeWork(arrOfArr, func) {
  let max = 0;

  for (let i = 0; i < arrOfArr.length; i++) {
    
  sum = func(arrOfArr[i]);

  if (sum > max){
    max = sum};

    
  }
  return max;
}





// Задание 3
function worker2(arr) {
  // Ваш код

    let max = Math.max(...arr);
    let min = Math.min(...arr);
    let diff = Math.abs(max - min);    
    
    return diff;
  

}
