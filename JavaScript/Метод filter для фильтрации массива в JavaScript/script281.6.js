"use strict";
let arr = [1, 2, [3, 4], 5, [6, 7]];
let flatArray = arr.filter(item => !Array.isArray(item));
console.log(flatArray);

