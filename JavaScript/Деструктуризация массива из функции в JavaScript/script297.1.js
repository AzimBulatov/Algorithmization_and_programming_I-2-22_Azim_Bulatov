"use strict";
function func() {
  return ['John', 'Smit', 'development', 'programmer', 2000];
}

const [name, surname, department, position, salary] = func();
console.log(name); 
console.log(surname); 
console.log(department); 
console.log(position); 
console.log(salary); 
