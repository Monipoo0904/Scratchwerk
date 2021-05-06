var x = 2;
const array = [Number(process.argv[x])]
forLoopMinMax();

const forLoopMinMax = () => {
  let min = array[0], max = array[0]

  for (let i = 2; i < array.length; i++) {
    let value = array[i]
    min = (value < min) ? value : min
    max = (value > max) ? value : max
  

  return [min, max]
 
 //console.log(value);
 //console.log(Math.max(value));
 
  
}
}
