const arr = [1, [2, 3], [4, [5, 6]], 7];
console.log(flatArr(arr)); 

function flatArr(arr) {
    let result = []
    for(let i =0; i<arr.length; i++){
        if(Array.isArray(arr[i])){
            let recursiveRes = flatArr(arr[i]);
            result.push(...recursiveRes)
        } else {
            result.push(arr[i])
        }
    }
    return result;
}