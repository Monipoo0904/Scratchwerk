console.log("Welcome to Monique's input program!");
console.log("Enter the numbers that you would like to compare.")

compare();
 
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

 
