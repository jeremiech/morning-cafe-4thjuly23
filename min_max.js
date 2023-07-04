function findMinSum(arr){
    let sortAsc=[...arr.sort((a,b)=>a-b)]
    let sum=0
    let minSum=0
    let maxSum=0
    for(let i=0;i<sortAsc.length;i++){
        sum+=sortAsc[i]
    }
    minSum=sum-sortAsc[sortAsc.length-1]
    maxSum=sum-sortAsc[0]
    return [minSum,maxSum].toString().split(",").join(" ")
}
let x=findMinSum([1,2,3,4,5])
console.log(`Sum result: ${x}`)