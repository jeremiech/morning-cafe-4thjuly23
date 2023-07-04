function myFunction(a, b) {
  return b in a;
}
console.log(myFunction({a:1,b:2,c:3},'b'))