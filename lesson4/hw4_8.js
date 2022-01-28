const arr = [[[1, 2], [1, 2]], [[2, 1], [1, 2]]];
const arr2 = [[[[[1,2]]]]];
const arr3 = [[[[[1,2]]],2],1];
const arr4 = [[[[[]]]]];
const arr5 = [[[[[],3]]]];

function arrSum(arr) {
	var sum = 0;
	if(!Array.isArray(arr)){
		throw new Error(' parameter type is not Array'); 
	}else{
		arr.forEach(function(item) {
		    if(typeof item !== 'number' && !Array.isArray(item)){
		        throw new Error(' not a number or an array was found');
		    }else{
		        if (typeof item == 'object')
			    sum += arrSum(item);
			    else
			    sum += item;
		    }
		});
	}
	return sum;
}

var result = arrSum(arr);
console.log(result);













// let sum = 0;
// // let i = 0;

// arr.forEach(function(elem) {
// 	sum += elem;
// });

// console.log(sum);