console.log("Welcome to my new program")

comp();

function newcomp(){
    console.log("welcome to my new function.")
      var Array = [Number(process.argv)];
        
    for (i = 2; i < Number(process.argv.length); i++) {
        console.log(Array[i]);
        console.log(Math.max(Number(process.argv.length[i])));
        //Do something
    }
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
          let numbers = Number(process.argv[i]);
        }
        
        console.log( "The largest number is " + (Math.max(num)));
        console.log(Math.max(num));
      }
    
      function sum() {
        var s = 0;
        for (var i=0; i < arguments.length; i++) {
            s += arguments[i];
        }
        return s;
    }
     
    console.log(sum(2, 3));         // 5
    console.log(sum(-10, 1));       // -9
    console.log(sum(1, 1, 1, 1));   // 4
    console.log(sum());             // 0
     

    function compare() {
        var s = 0;
        var myNumArguments = [Number(process.argv[i])];
        var argumentLength = myNumArguments.length;
        for (var i=2; i < argumentLength; i++) {
            s += myNumArguments[i];
        }
          console.log(Math.max(myNumArguments));
    }
     //console.log(Math.max(myNumArguments));
    console.log(sum(2, 3));         // 5
    console.log(sum(-10, 1));       // -9
    console.log(sum(1, 1, 1, 1));   // 4
    console.log(sum());             // 0

      

      function comp(){

        for (let j = 0; j < Number(process.argv.length); j++) {
            console.log(j + ' -> ' + Number((process.argv[j])));
        }

        let j = 0; j < Number(process.argv.length); j++; {
            console.log(j + ' -> ' + Number((process.argv[j])));

        let x = (Math.max(process.argv[j]));
        if (x > (Number(process.argv[2])))
 console.log(x +" is greater than " + Number(process.argv[2]));
  else x +" is less than " + (Number(process.argv[2])) ;

  console.log(Math.max[Number(process.argv[j])]);
  Math.max(Number(process.argv[x]))
      
      }
    
      
    }
      