// 2 numbers
function twoNumbers(num1, num2) {
  return (result = num1 + num2);
}
console.log(twoNumbers(1, 2));

// 6.35
alert(Math.round(6.35 * 10) / 10); // 6.4

//number submit
function numSubmit(num) {
  if (typeof num === "number") {
    return num;
  } else if (num === "cancel") {
    return "canceled";
  } else {
    return false;
  }
}

console.log(numSubmit("d"));
