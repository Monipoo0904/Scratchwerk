console.log("Welcome to my compare program!");
if (process.argv[0] > process.argv[1]) {
    console.log(process.argv[0] + " is greater than " + process.argv[1]);
} else{
    console.log(process.argv[0] + " is less than " + process.argv[1]);
}