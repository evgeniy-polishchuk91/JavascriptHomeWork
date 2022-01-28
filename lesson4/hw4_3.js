function myEvery (arr, cb) {
   
    if(!Array.isArray(arr)){
        throw new Error(' parameter type should be an array');
      }else if(typeof cb !== 'function'){
        throw new Error(' parameter type should be an function');
      }else{
        for (let i = 0; i < arr.length; i++) {
            if (!cb(arr[i], i, arr)){
                return false;
            }
        }
        return true;
    }  
}

const arr = [1,2,3];
myEvery(arr, function(item, i, arr){});

var result = myEvery(arr, function(item) {
    return (item >= 10);
});

console.log(result);