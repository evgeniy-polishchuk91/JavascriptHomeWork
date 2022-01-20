function sum(){
    var result = 0;
    
    for (item of arguments) {
        if (typeof item === 'number') {
            result += item;
        }else{
            throw new Error('all parameters type should be a Number');
        }
    }

    return result;  
}

var result = sum(7, 3, 1);
console.log(result);