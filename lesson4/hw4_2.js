const arr = [1,2,3];

function myFilter (arr, cb) {
    let newArr = [];

    if(!Array.isArray(arr)){
        throw new Error(' parameter type should be an array');
      }else if(typeof cb !== 'function'){
        throw new Error(' parameter type should be an function');
      }else{
        for (let i = 0; i < arr.length; i++) {
            if (cb(arr[i], i, arr)){
                newArr.push(arr[i]);
            }
        }
    }  
    return newArr;
}

myFilter(arr, function(item, i, arr){});

var result = myFilter(arr, function(item, i, arr) {
    return item > 1;
});
console.log(result);