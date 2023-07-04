function myFunction(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i].length);
  }
  let maxVal = newArr.sort((a, b) => b - a);
  return maxVal[0];
}
console.log(myFunction(["muhizi", "olga", "jeje",'imena jack']));
