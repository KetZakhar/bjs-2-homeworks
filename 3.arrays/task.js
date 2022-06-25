function compareArrays(arr1, arr2) {
  let result;


  result = arr1.lenght === arr2.lenght && arr1.every((item) => arr1[item] === arr2[item]);


  return result; // boolean
}




function advancedFilter(arr) {
  let resultArr;
  
  resultArr = arr.filter((item) => item >= 0).filter((item) => item % 3 === 0).map((item) => item * 10);



  return resultArr; // array
}
