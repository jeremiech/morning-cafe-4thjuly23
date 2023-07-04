function mergeArray(arr1, arr2) {
    let result = []
    result = result.concat(arr1, arr2)
    
    return [...new Set(result)].sort((a,b)=>a-b)
}

console.log(mergeArray([-10, 22, 333, 42], [-11, 5, 22, 41, 42]))