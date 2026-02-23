// function addTwoNumbers(number1, number2) {
//   // let result = number1 + number2
//   // return result
//   return number1 + number2;
// }

// const result = addTwoNumbers(3, 5);

// console.log("Result: ", result);

// function calculateCartPrice(val1, val2, ...num1){
//     return num1
// }
function calculateCartPrice(...num1) {
    let ans = null;
    num1.forEach(element => {
        ans += element
    });
  return ans;
}

console.log(calculateCartPrice(200, 400, 500, 2000))