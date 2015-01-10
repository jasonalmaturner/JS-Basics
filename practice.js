//Once you complete a problem, open up Chrome and check the answer in the console.


var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only argument.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

function isTyler(name) {
  if(name === "Tyler") {
    return true;
  } else {
    return false;
  }
}


//Next problem



//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


function getName() {
  return prompt("name?");
}


//Next Problem



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

function welcome() {
  alert(getName());
}


//Next problem



//Write a function called adder that uses the 'arguments' keyword that comes with every function to
//loop over all the arguments the function received, add them all together, then return the result.
//Save the result of the return value from your adder function, then alert "The Total Number was " + the number that was
//returned from adder.

function adder(){
  var total = 0;
  for(var i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return "The total number was " + total;
}

//Next Problem



//What is the difference between arguments and parameters?

The parameter is the variable(s) declared in the function. The argument(s) is the input/data when the function is called

//Next problem



//What are all the falsy values in JavaScript and how do you check if something is falsy?

false, 0, "", null, undefined, NaN

use an if statement

var name = 'jason';
var result;

if(name){
  true;
} else {
  false;
}


//Next Problem



//Create a function called myName that returns your name

function myName(){
  return "Jason"
}

//Now save the function definition of myName into a new variable called newMyName

var newMyName = myName;

//Now alert the result of invoking newMyName

newMyName()


//Next problem



//Create a function called outerFn which returns an anonymous function which returns your name.

function outerFn(){
  return function(){
    return "Jason";
  };
};

//Now save the result of invoking outerFn into a variable called innerFn.

var innerFn = outerFn();

//Now invoke innerFn.