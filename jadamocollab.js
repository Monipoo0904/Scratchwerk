const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("What is your first number? ", function(number1) {
  rl.question("What is your second number ? ", function(number2) {
        console.log(`${number1}, and ${number2} are being compared`);
        if (number1 > number2) console.log(number1 + " is greater.");
        if (number2 > number1) console.log(number2 + " is greater.");
        rl.close();
    });
});

 



rl.on("close", function() {
    console.log("\napp over!!!");
    process.exit(0);
});

