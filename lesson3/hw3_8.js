var mas = [1, 2, 3];
var i = 0;


function f(arr) {
    if(arr.length == 0){
        throw new Error('parameter can\'t be an empty'); 
    }else if(!Array.isArray(arr)){
        throw new Error(' parameter type should be an array'); 
    }else{
        console.log(arr[i]);
        i++;
        if (i < arr.length){
            f(arr);
        } 
    }
 }

 f(mas);


