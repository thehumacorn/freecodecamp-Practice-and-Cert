const num = 18;
const factorial = factorialCalculator(num)
const resultMsg = `Factorial of ${num} is ${factorial}`
function factorialCalculator(num){
  let result = 1
  for(let i = result; i <= num; i++){
      result *= i
  }
  return result
}

console.log(resultMsg)
