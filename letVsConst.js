let brand = "Hello"
brand = {}


brand = function() {
    return "goalmoal"
}

// console.log(brand());


const firstName = "Dharmesh";
// firstName = "warbreaker";  // NO REASSIGNMENT
// console.log(firstName);

const nameObject = {};
nameObject["firstName"] = firstName; // No REASSIGNMENT But can Change the internal content
nameObject["firstName"] = "Ram"; // No REASSIGNMENT But can Change the internal content

console.log(nameObject.firstName);


// only where you require re-assignment use LET otherwise use CONST mostly
// don't ues ever use VAR keyword again because hoisting se global level per available which causes ambiguity
