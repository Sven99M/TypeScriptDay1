"use strict";
var array = [];
for (let i = 1; i <= 10; i++) {
    array.push(i);
}
console.log(array);
for (let a = 1; a < array.length; a++) {
    for (let b = 1; b < array.length; b++) {
        console.log(a, b);
        var multi = array[b] * array[a];
        var text = `${array[b]}x${array[a]}=${multi}`;
        console.log(text);
    }
}
