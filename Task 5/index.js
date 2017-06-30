const arr = [1,2,3,4,5];

function sumSmallest(array){
    array.sort((a,b)=>{ return a - b; });
    return array[0] + array[1];
}

console.log(sumSmallest(arr));
