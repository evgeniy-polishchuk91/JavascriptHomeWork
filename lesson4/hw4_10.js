function reverse(arr){
    res = [];

    if(!Array.isArray(arr)){
        throw new Error('parameter type is not Array');
    }else if(!arr.length){
        throw new TypeError("Array is empty");
    }else{
        for(let i = arr.length-1; i>=0;  i--){
            res.push(arr[i]);
        }
    }
    return res;
}

const arr = [3,2,1];
console.log(reverse(arr));