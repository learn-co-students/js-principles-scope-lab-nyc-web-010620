var customerName = "bob"

// Write a function that accesses that global customerName variable, and uppercases it.
function upperCaseCustomerName() {
   customerName = customerName.toUpperCase(); 
}

// Write a function that when called, declares a variable called bestCustomer in global scope and assigns it to be 'not bob'.
// declaring a global variable from inside a function is one of those things we would never want to do normally, but is good for us to explore right now.
function setBestCustomer() {
   bestCustomer = "not bob"; 
}

// See the consequences of declaring a variable in global scope, by writing a new function called overwriteBestCustomer() that changes that bestCustomer variable.
function overwriteBestCustomer() {
   bestCustomer = "maybe bob";
}

// Now declare a constant in global scope called leastFavoriteCustomer, be sure to assign it some initial value. 
// Now write a function called changeLeastFavoriteCustomer() that attempts to change that constant - 
// notice what JavaScript does when you try to change the constant.
const leastFavoriteCustomer = "bob"; 

function changeLeastFavoriteCustomer() {
   leastFavoriteCustomer = "not bob"; 
}
