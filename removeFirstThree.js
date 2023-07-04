function removeThree(arr){
    let newArr=[]
    if(arr.length==3)  newArr=[]
    for(let i=3;i<arr.length;i++){
        newArr.push(arr[i])
    }
    console.log(newArr)
}
removeThree([1,2,3,4])