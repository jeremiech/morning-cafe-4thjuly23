function isLeap(yr){
    if(yr%100==0){
        return false
    }else{
    return yr%4==0 || yr%400==0?true:false

    }
}
console.log(isLeap(2020))