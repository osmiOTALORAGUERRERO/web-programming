# Functions JavaScript

A function is a reusable block of code that groups together a sequence of statements to perform a specific task.

The code inside a function body runs, or executes, only when the function is called. To call a function in your code, you type the function name followed by parentheses.

## Function definitions
When we define a function in javascript we use the following syntax.

* Function keyword: **function**
* identifier: **theNameFunction**
* parameters: **(parameter1, parameter2, ...)**
* body: **{ code }**

### example
```javascript
function greeting (name = 'stranger') {
  console.log(`Hello, ${name}!`)
}
```
## Function parameters
When declaring a function, we can specify its parameters. Parameters allow functions to accept input(s) and perform a task using the input(s) `greeting(name, surname)` for example.

One of the features added in ES6 is the ability to use default parameters. Default parameters allow parameters to have a predetermined value in case there is no argument passed into the function or if the argument is undefined when called `greeting(name='I am', surname='stranger')`

## Function invocation
When we defined our function, we can invoke the function writing the identifier and brackets, and within of argument of the function
### example
* identifier `greeting`
* Arguments as values `('Nick')`

```javascript
greeting('Nick') // Output: Hello, Nick!
greeting() // Output: Hello, stranger!
```

## Function call
It is a predefined javascript method, which is used to write methods for different objects. It calls the method, taking the owner object as argument. The keyword this refers to the “owner” of the function or the object it belongs to.
### example

```javascript
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
person.fullName.call(person1);  // Will return "John Doe"
```

## Function apply
With the apply() method, you can write a method that can be used on different objects.

```javascript
var person = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}
var person1 = {
  firstName:"John",
  lastName: "Doe"
}
person.fullName.apply(person1, ["Oslo", "Norway"]);
```

## Function closures
A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.
```javascript
function makeFunc() {
  var name = 'Mozilla';
  function displayName() {
    alert(name);
  }
  return displayName;
}

var myFunc = makeFunc();
myFunc();
```

# References

* [Codecademy](https://www.codecademy.com/learn/introduction-to-javascript)
* [MDN Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [w3schools](https://www.w3schools.com/js/)

# Example
[Example functions](../examples/functions.js)

***

[Index](../index.md)
