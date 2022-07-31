// задача 1
function cachingDecoratorNew(func) {
  let  cache = [];

  function wrapper(...args) {
    const hash = args.join(",");
    let objectInCache = cache.findIndex((item) => item.hash === hash);
    if (objectInCache !== -1) {
      let result = cache[objectInCache].result;
      console.log("Из кэша: " + result);
      return "Из кэша: " + result;
      }

    let result = func(...args); 
    cache.push({
      result: result,
      hash: hash
    }); 
    if (cache.length > 5) { 
      cache.shift();
    }
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;  
}
return wrapper;
}
    

// задача 2

function debounceDecoratorNew(func, ms) {
  let timeOut;
  let flag = false;
  return function wrapper(...args){
    if(!flag) {
      func.call(this, args);
    }
    flag = true;
    clearTimeout(timeOut);
    timeOut = setTimeout(() => {
      func.call(this, args);
      flag = false;
    }, ms);
    
  };  
}

// задача 3

function debounceDecorator2(func, ms) {
  let timeOut = undefined;
  let flag = false;
  let count = 0;

  function wrapper(...args){
  count++;
  if(!flag){
    func.call(this, args);
  }
  flag = true;
  clearTimeout(timeOut);
  timeOut = setTimeout(() => {
   func.call(this, args);
   flag = false;
   }, ms);
  
  };
  wrapper.count = 0;
  return wrapper
}
