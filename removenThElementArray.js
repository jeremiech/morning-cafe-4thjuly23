function getElement(arr,n){
    return arr.filter(item=>item!==n)
}

console.log(getElement([12,4,3],3))