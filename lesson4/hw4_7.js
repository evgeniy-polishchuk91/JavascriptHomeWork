var arr = ['abcd', 'abcde', 'ab', 'abc'];

var arrLength = arr.map(function(elem){
    return elem.length;
});

console.log( arrLength );