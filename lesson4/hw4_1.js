const arr = [1,2,3];

function myForeach(array, cb) {

  if(!Array.isArray(arr)){
    throw new Error(' parameter type should be an array');
  }else if(typeof cb !== 'function'){
    throw new Error(' parameter type should be an function');
  }else{
    for (let i = 0; i < array.length; i++) {
      cb(array[i], i, array);
    }
  }  
}


myForeach(arr, function(item, i, arr){
  console.log(item, i, arr);
});