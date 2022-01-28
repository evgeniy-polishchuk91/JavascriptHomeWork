function arrayFill(value, length) { 
	let arr = [];

    if(typeof value !== 'number' && typeof value !== 'string' && typeof value !== 'object' && !Array.isArray(value)){
        throw new Error('parameter type is not a Number/String/Object/Array');
    }else if(typeof length !== 'number'){
        throw new Error('parameter type is not a Number');
    }else{
        for (let i = 0; i < length; i++) {
            arr.push(value);
        }
    }
	
	return arr;
}

console.log(arrayFill('x', 5));