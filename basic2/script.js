"use strict";
var myObject = [
    { fname: "Sven", lname: "Moser" },
    { fname: "Sven", lname: "Moser" },
    { fname: "Sven", lname: "Moser" },
    { fname: "Sven", lname: "Moser" },
    { fname: "Sven", lname: "Moser" },
    { fname: "Sven", lname: "Moser" },
    { fname: "Sven", lname: "Moser" },
    { fname: "Sven", lname: "Moser" },
    { fname: "Sven", lname: "Moser" },
    { fname: "Sven", lname: "Moser" },
];
console.log(myObject);
myObject.forEach(function (value) {
    console.log(value.fname + " ");
    setTimeout(() => {
        console.log(value.lname + " ");
    }, 5000);
});
