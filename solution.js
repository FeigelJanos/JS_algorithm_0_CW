function highAndLow(numbers){
  
  let answerArr = numbers.split(' ').sort((a, b)=>a-b)
  
  return answerArr[answerArr.length - 1] + " " + answerArr[0]

 
}
