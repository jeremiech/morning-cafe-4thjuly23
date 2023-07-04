function getFiz(n){
    let i=1
    let arr=[]
    for(i;i<=n;i++){
        if(i%3!==0 && i%5!==0) arr.push(i)
        if(i%3==0) arr.push('Fuzz')
        if(i%5==0) arr.push('Buzz')
        if(i%3==0 && i%5==0) arr.push('FuzzBuzz')

    }
 return arr.map(data=>data).toString()
}
console.log(getFiz(10))
