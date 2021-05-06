console.log("Welcome to Monique's input program!");
console.log("Enter the numbers that you would like to compare.")

 newcomp()

function compare(){

  if ((Number(process.argv[2])) > (Number(process.argv[3])))
  console.log((Number(process.argv[2]) +" is greater than " + Number(process.argv[3])));
   else console.log((Number(process.argv[2]) +" is less than " + Number(process.argv[3])));
 
  // if ((Number(process.argv[2])) = (Number(process.argv[3])))
  //console.log((Number(process.argv[2]) + " is equal to " + Number(process.arv[3])));
  }
 

  function maxMethod(){

    const num = [Number(process.argv)];
   for (i = 2; i < process.argv.length; i++) {
      //num += Number(process.argv[i]);
  
      console.log('The numbers that you entered are as follows: ' + num)
      
      console.log(Math.max(num));
   }
  }

  function loop(){
    var sum = 0;
    for (i = 2; i < process.argv.length; i++) {
        num = Number(process.argv[i]);
    }
    
    console.log( "The largest number is " + (Math.max(num)));
    console.log(Math.max(process.argv[i]));
  }


  let i = 0;

function findLargest (integers) {
  for (let x=0; x<integers.length; x++) {  
    if (integers[x] > i) {     
      i = integers[x];
    }
  }
  console.log(i);
}

findLargest([5, 10, 21, 6, 100]);          


let x = 2
let arr =  Array(process.argv[x]);


 num = [Number(process.argv)];
for (i = 2; i < process.argv.length; i++){


  function newcomp(){
console.log("welcome to my new function.")
  var myStringArray = ["Hello","World"];
var arrayLength = myStringArray.length;
for (var i = 0; i < arrayLength; i++) {
    console.log(myStringArray[i]);
    //Do something
}
}
}