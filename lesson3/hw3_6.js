function isEven(num){
    if(typeof num === 'number' && num % 2 === 0){
        return true;
    }else if(typeof num === 'number' && num % 2 !== 0){
        return false;
    }else{
        throw new Error('parameter type is not a Number');
    }
}

var result = isEven(3);
console.log(result);