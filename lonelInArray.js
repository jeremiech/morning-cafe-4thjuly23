function onOneInAll(arr){
for(let i=0;i<arr.length;i++){
if(arr[i+1]===arr[i]){
    return "Duplicated"
}else {
    return "no duplicate"
}
}
}
console.log(onOneInAll([1,2,1,2,3]))