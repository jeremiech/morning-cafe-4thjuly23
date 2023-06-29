function filterString(str){
    let pattern=/\d+/g
    const match=str.match(pattern)
    match? console.log(match):console.log("no talk")

}

console.log(filterString("umu1jsdh28d10"))