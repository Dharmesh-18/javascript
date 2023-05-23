var person = {
    firstName : "Dharmesh",
    lastName : "Tiwari",
    balance : 9999.99,
    dob : new Date(1999, 04, 18).toJSON(),
    address : {
        city : "Noida",
        postCode : "201301"
    }
}

// console.log(person);

// console.log(Object.keys(person));

console.log(JSON.stringify(person));