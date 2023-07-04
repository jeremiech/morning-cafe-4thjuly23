function myFunction(a) {
  let onlyThree = [];
  if (arr.length == 3) {
    onlyThree = [];
  }
  if (arr.length == 4) {
    onlyThree.push(arr.length - 1);
  } else {
    for (let i = arr.length - 1; i > arr.length - 4; i--) {
      onlyThree.push(arr[i]);
    }
  }
  return onlyThree.reverse();
}

console.log(getLast3([5, 4, 3, 3]));
