function mergeElement(...arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++){
        newArr=newArr.concat(arr[i])
    }
return newArr    
}

console.log(mergeElement(['a', 'b', 'c'], [4, 5, 6]))