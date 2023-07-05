// function getElement(arr) {
//     let result=[]
//     for (let i =3; i < arr.length; i++){
//         result.push(arr[i])
//     }
//     return result
// }

// console.log(getElement([12, 3, 4, 5, 6]))
// console.log(getElement([1,2,3,4]))

// function getIdentical(arr) {
//     return arr.every(item=>item===arr[0])
// }
// console.log(getIdentical([1,1,1]))

function mergeArray(arr1, arr2) {
    let result = []
    result = result.concat(arr1, arr2)
return [...new Set(result)].sort((a,b)=>a-b)   
}

console.log(mergeArray([12,2,12,3],[2,10,3]))