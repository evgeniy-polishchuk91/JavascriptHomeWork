function mySome (arr, cb) {
   
    if(!Array.isArray(arr)){
        throw new Error(' parameter type should be an array');
      }else if(typeof cb !== 'function'){
        throw new Error(' parameter type should be an function');
      }else{
        for (let i = 0; i < arr.length; i++) {
            if (cb(arr[i], i, arr)){
                return true;
            }
        }
        return false;
    }  
}

const arr = [1,2,3];
mySome(arr, function(item, i, arr){});

var result = mySome(arr, function(item) {
    return (item > 0);
});

console.log(result);