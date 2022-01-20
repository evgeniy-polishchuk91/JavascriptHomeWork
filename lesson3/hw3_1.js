function cube(num){
    var result;

    if(typeof num === 'number'){
        result = num*num*num;
    }else{
        throw new Error('parameter type is not a Number');
    }
    
    return result;
}

var result = cube(2);
console.log(result);