const Maths = {} 

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function add(a,b) {
    return a + b
}


function substract(a,b) {
    return a - b
}


function multiply(a,b) {
    return a * b
}

function divide(a,b) {
    if (a==0&&b==0) {
        return "N/A"
    }
    else if (b == 0){
        return "N/A" ;
    }else {
        return a / b;
    }
}

Maths.add = add;
Maths.substract = substract;
Maths.multiply = multiply;
Maths.divide = divide;
Maths.getRandomInt = getRandomInt

module.exports = Maths;