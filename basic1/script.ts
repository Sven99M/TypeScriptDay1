var array : number [] = []  ;

for (let i=1; i<=10; i++){
    array.push(i);
}
console.log(array);
for (let a: number = 1; a < array.length; a++){
    for(let b: number = 1 ; b < array.length; b++){
        console.log(a,b)
    var multi : number = array[b]*array[a];
    var text : string = `${array[b]}x${array[a]}=${multi}`;
    console.log(text) 
    }
  }