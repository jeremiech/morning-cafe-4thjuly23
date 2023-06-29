function findConsonant(str){
    let conso=['a','i','u','o','e']
let strArray=str.split("")
let onlyConst=[]
strArray.filter(data=>conso.includes(data)? onlyConst.push(data) :[])
return onlyConst
}
console.log(findConsonant("ihene"))