    console.log("Hello!!!");
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout

});
compare();

function compare(){
   
     let answer = [];
        for (let i = 2; i < answer.length; i++) {
            const result = await (rl, answer[i]);
                result.push(answer);
        
    rl.question("What is your number? ", (answer)=> {
        Math.max(answer);
        Math.min(answer);
    
      
    });
        }    
            }
rl.on("close", function(){
    console.log("\napp over!");
    process.exit(0);
});