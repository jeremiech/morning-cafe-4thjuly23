function getElement(arr) {
    let result=[]
    for (let i =3; i < arr.length; i++){
        result.push(arr[i])
    }
    return result
}

console.log(getElement([12, 3, 4, 5, 6]))
console.log(getElement([1,2,3,4]))