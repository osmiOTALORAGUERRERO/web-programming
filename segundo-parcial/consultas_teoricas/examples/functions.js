//basic
function greeting (name = 'stranger') {
  console.log(`Hello, ${name}!`)
}

greeting('Nick') // Output: Hello, Nick!
greeting() // Output: Hello, stranger!

// call
var person = {
 fullName: function() {
   return this.firstName + " " + this.lastName;
 }
}
var person1 = {
 firstName:"John",
 lastName: "Doe"
}
var person2 = {
 firstName:"Mary",
 lastName: "Doe"
}
console.log(person.fullName.call(person1));  // Will return "John Doe"

// apply
person = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}
person1 = {
  firstName:"John",
  lastName: "Doe"
}
person.fullName.apply(person1, ["Oslo", "Norway"]);

// closures
function makeFunc() {
  var name = 'Mozilla';
  function displayName() {
    alert(name);
  }
  return displayName;
}

var myFunc = makeFunc();
myFunc();
