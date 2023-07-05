function getCallCount(min1, min2, min3, s) {
  let arr = [min1, min2, min3];
  let count = 0;
    let totMin = 0;
    var deduction=s
    for (let i = 0; i <= s; i++) {
        if (i == 0) {
            if (deduction > arr[0]) {
                deduction -= arr[0]
            totMin++
            } else {
                totMin=0
                
          }
        }
        if (i >= 1 && i < 10) {
            count++
      }
    
  
  }
  let secondDeduct=count * arr[1]
  if (deduction > (count * arr[1])) {
    deduction -= secondDeduct
    totMin+=count

  } 
  else {
    deduction = deduction / arr[1]
    totMin += deduction
  }
  if (deduction > arr[2]) {
    deduction = Math.floor(deduction / arr[2])
    totMin+=deduction
  }
    
  
  return `${totMin} tot${deduction}`
}

console.log(getCallCount(2,2,1,2));
