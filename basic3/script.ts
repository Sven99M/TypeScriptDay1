let names: Array<string> = ["Sven","Stephan","Florian","Sasa","Tahir"];


// prints the index of the array in the console

for (let i=0; i<names.length;i++){
    console.log(`${i}`)
}

// prints the value of the array in the console 

for (let value of names){
    console.log(value)
}

// prints the value and the index in the console 

names.forEach(function(value, index) {
    console.log(`${value}'s index is ${index}`);
  });