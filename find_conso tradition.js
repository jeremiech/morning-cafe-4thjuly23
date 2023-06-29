function getOnlyConsonant(str){
    let pattern= ['a','i','u','e','o']
   let onlyConsonat=[]
   for(let i=0;i<str.length;i++){
    if(str[i]==='a'||str[i]==='i'||str[i]==='o'||str[i]==='u'||str[i]==='e') onlyConsonat.push(str[i])
   }
console.log( onlyConsonat.length)
}
getOnlyConsonant('umuhire123')