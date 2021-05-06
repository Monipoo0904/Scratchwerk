console.log("Welcome to My compare Program!");
console.log("I am going to compare the numbers 10 and 2.");
console.log("The greater number is " + compare(10,2))
function compare(x1,x2){
   //compare two numbers and print off the one that is greater

  if (x1 < x2) return x2
  if (x1 > x2) return x1
}
