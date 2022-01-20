function getDivisors(num) {
    var arr = [];

	if(typeof num === 'number' && num <= 0){
        throw new Error('parameter can\'t be a 0');  
    }else if(typeof num !== 'number'){
        throw new Error('parameter type is not a Number');
    }else{
        for (var i = 1; i <= num; i++) {
            if(num % i == 0) {
                arr.push(i);  
            }
        }
        return arr;
    }
}

var result = getDivisors(12);
console.log(result);