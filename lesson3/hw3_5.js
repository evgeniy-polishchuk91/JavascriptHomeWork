var arr = [1, 2, -4, 3, -9, -1, 7];
var arr2 = [];

function isPositive(num){
    if(num > 0){
        return true;  
    }else if(num < 0){
        return false;
    }
    else{
        throw new Error('parameter type is not a Number');
    }
}

for (var i = 0; i<arr.length ; i++) {
    if(isPositive(arr[i])) {
        arr2.push(arr[i]);  
    }
}

console.log(arr2);



