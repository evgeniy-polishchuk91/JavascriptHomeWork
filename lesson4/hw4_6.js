function myReduceRight (array, cb, val){
    if(!Array.isArray(arr)){
      throw new Error(' parameter type should be an array');
    }else if(typeof cb !== 'function'){
      throw new Error(' parameter type should be an function');
    }else if(typeof val !== 'string' && typeof val !== 'number'){
      throw new Error(' parameter type should be an string or number');
    }else{
      for (let i = array.length-1; i >= 0; i--) {
        val = cb(val, array[i], i, array);
      }
      return val;
    }
  }   
  
  const arr = [1,2,3];
  const acc = 0;
  
  myReduceRight (arr, function(acc, item, i, arr) {}, acc);
  
  let result = myReduceRight (arr, function(acc, item) {
      return acc + item;
  }, acc);
  
  console.log(result);
  