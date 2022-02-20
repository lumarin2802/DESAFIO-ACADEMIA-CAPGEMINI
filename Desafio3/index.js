let palabra = prompt("Ingrese una palabra");

// la cantidad de combinaciones posibles es un factorial
// si la palabra es ola, su longitud es 3
// numero de posibles combinaciones 3! = 3 x 2 x 1 = 6
let numeroCombinaciones = factorial(palabra.length);

let anagramas = [];

// repetir hasta que se encuentren todos los anagramas
while(anagramas.length != numeroCombinaciones){
  // obtener un anagrama
  let anagrama = combinar(palabra);
  // si no existe en el arreglo, agregarlo
  if(!anagramas.includes(anagrama)) anagramas.push(anagrama);
 
 }

console.log(anagramas);
function combinar(palabra){
  // crear un arreglo a partir de los caracteres de la cadena
  let arreglo = Array.from(palabra);
  
  // iterar el arreglo
  for(i = 0 ; i < arreglo.length; i++){
    
    let index  = Math.floor(Math.random() * arreglo.length);
    
    // intercambiar el caracter en la posición i
    // con el caracter en la posición index
    let temp = arreglo[i];
    arreglo[i] = arreglo[index];
    arreglo[index] = temp;
  
  }
  // convertir el arreglo en una cadena
  return arreglo.join('');

}


function factorial (n) {
    let total = 1; 
    for (i=1; i<=n; i++) {
        total = total * i; 
    }
    return total; 
}
