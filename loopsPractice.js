for(var i = 0; i <= 100; i++){
    console.log(i);
}
console.log();


var names = ["ram", "shyam", "david", "bujho"];

console.log("for i");
for(var i =0; i < names.length; i++){
    console.log(names[i]);
}
console.log();

console.log("for of");
for(const name of names){
    console.log(name);
}

console.log();

console.log("for each");
names.forEach(function(name) {
    console.log(name);
})

console.log();


console.log("for each with lambda");
names.forEach(
    (name) => {
    console.log(name);
});
console.log();