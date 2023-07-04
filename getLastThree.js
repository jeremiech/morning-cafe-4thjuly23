function getLastThree(arr){
    let newArr=[]
    for(let i=arr.length-3;i<arr.length;i++){
        newArr.push(arr[i])
    }
    return newArr
}
console.log(getLastThree([2,1,0]))