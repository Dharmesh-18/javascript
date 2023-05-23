function addParameters(number1, number2){
    var addition = number1 + number2;
    return addition;
}

var resultNumber = addParameters(1,4);
console.log(resultNumber);

var resultConcat = addParameters("goal" , " moal");
console.log(resultConcat);


var person = {
    name : "Dharmesh"
}

console.log(Object.keys(person));

var firstName = "goal";

console.log(firstName.toLocaleLowerCase());

console.log(Object.values(person)[0].toUpperCase());