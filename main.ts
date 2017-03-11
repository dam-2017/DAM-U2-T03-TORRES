import {Cadena} from './cadenas';
import {Opera} from './operaciones';

let cadena = new Cadena("Natalie Beckett ttekceB eilataN");
console.log("Total de Palabras: ",cadena.numpal);
console.log("Total de letras: ",cadena.numlet);
console.log("¿Es palindromo? ",cadena.pali);

let ope = new Opera();
console.log ("*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*")
console.log("Suma: "+ope.suma(28, 2));
console.log("Resta: "+ope.resta(28, 2));
console.log("Factorial: "+ope.factorial(28));
console.log("¿Es primo?: "+ope.primo(28));