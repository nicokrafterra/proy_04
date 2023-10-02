require("colors");

const math = require('./modules/math.js') 

console.clear();
console.log(math);

const main = async() => {
    console.clear();
    let x= (math.getRandomInt(10))
    let y= (math.getRandomInt(10))
    console.log("////////////////////////////////////".bgMagenta);
    console.log("//".bgMagenta + "      Funciones Matematicas     ".blue + "//".bgMagenta);
    console.log("////////////////////////////////////\n".bgMagenta);
    console.log("////////////////////////////////////".bgCyan);
    console.log("numeros generados:"+" "+x+" "+y);
    console.log("////////////////////////////////////\n".bgCyan);
    
    console.log("////////////////////////////////////".bgCyan);
    console.log("//".bgCyan +"                                "+"//".bgCyan);
    console.log("//".bgCyan + "       Suma =>" + math.add(x,y) + "                 "+ "//".bgCyan);
    console.log("//".bgCyan + "       Resta =>"+math.substract(x,y) +"               "+ "//".bgCyan);
    console.log("//".bgCyan + "       Multiplicacion =>"+math.multiply(x,y) + "      "+"//".bgCyan);
    console.log("//".bgCyan + "       divicion =>"+math.divide(x,y) + "             "+"//".bgCyan);
    
    console.log("////////////////////////////////////".bgCyan);
    
}

main();
