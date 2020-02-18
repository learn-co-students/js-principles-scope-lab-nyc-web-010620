var customerName = "bob";
const leastFavoriteCustomer = "adam";

function upperCaseCustomerName(){
  customerName = customerName.toUpperCase();
}

function setBestCustomer(){
  bestCustomer = "not bob";
}

function overwriteBestCustomer(customer){
  bestCustomer = customer;
}

function changeLeastFavoriteCustomer(customer){
  leastFavoriteCustomer = customer;
}