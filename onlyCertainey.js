function myFunction(a, b) {
    let obj = {}
    var key = ""
    var value=''

    for (let i = 0; i < a.length; i++){
        key = a[i]
        value = b[i]
        obj[key]=value
       
    } 
    return obj
}
console.log(myFunction(['a','b','c'],[1,2,3]))