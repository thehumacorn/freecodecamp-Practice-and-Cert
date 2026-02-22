const num = 5;
const factorial = factorialCalculator(num)
const resultMsg = `Factorial of ${num} is ${factorial}`
function factorialCalculator(num){
  let result = 1
  //i = 1 as i is less than or equal to num "18" iterate through all numbers
  for(let i = result; i <= num; i++){
      // this will multiply the previous number and assign it to the result until i is greater than num
      result *= i
      console.log(`${result} <- ${i}`)
  }
  return result
}

console.log(resultMsg)
