function fizzbuzz(aNum){
  
  if(aNum % 3 === 0 && aNum % 5 === 0){
    return "fizzbuzz"
  }
  else if (aNum % 5 === 0){
    return "Buzz"
  }
  else if (aNum % 3 === 0){
    return "Fizz"
  }
  else {
    return aNum } 
  
}
for (let i = 1; i <= 100; i++){
  if (fizzbuzz(i) != "Fizz" && fizzbuzz(i) != "Buzz" && fizzbuzz(i) != "fizzbuzz"){
    console.log(i)}
  else 
  console.log(`${i} ${fizzbuzz(i)}`);


  

}
