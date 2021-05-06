
console.log("Welcome.")
    


numnum();

function comp(){

    let arrayExample = [];
        var maxvalue = 0;
    for (let j = 2; j < Number(process.argv.length); j++) {
        //console.log('At point '+ j +', you have entered' + ' -> ' + Number((process.argv[j])));
    
     
         arrayExample.push(Number(process.argv[j]));
            }
           //  console.log(arrayExample);

            console.log( 'The largest number so far is: '+ Math.max.apply(null, arrayExample));
            console.log( 'The largest number so far is: '+ Math.min.apply(null, arrayExample));                 
}
        
    

    function numnum(){

        var maxvalue = Number.NEGATIVE_INFINITY;
for (let j = 2; j < Number(process.argv.length); j++) {
  if(Number(process.argv[j]) > maxvalue){
    maxvalue = Number(process.argv[j]);
  }
}
    console.log("Max value is " + maxvalue);
    console.log("Min value is: "+ Math.min(maxvalue));
    }
    
    for (let j = 2; j < Number(process.argv.length); j++) {
        if(Number(process.argv[j]) < minvalue){
             minvalue = Number(process.argv[j]);
           }

        }

console.log("Min value is " + minvalue);


for (let j = 2; j < Number(process.argv.length); j++) {
    if(Number(process.argv[j]) < minvalue){
         minvalue = Number(process.argv[j]);
       }

    }

console.log("Min value is " + minvalue);
