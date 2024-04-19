//Los operadores de asignacion 

/*
                                     EJEMPLO 1
    Aqui estamos creando una variable con valor de 5,
    Luego reemplazamos este valor, indicandole que el nuevo valor es igual al valor incial + 20
*/
let a = 5;
a = a + 20;


/*
                                     EJEMPLO 2
                                 LA FORMA RESUMIDA
    Aqui hacemos uso del valor incial de la variable y le incrementamos 10 
*/
let b = 5;
b += 20;


//Va a imprimir el mismo resultado
console.log(a);
console.log(b);


//Esto se puede repetir con todos los operadores aritmeticos ya vistos, facilitando la escritura de operaciones

let c = 10;
let d = 10;
let e = 10;
let f = 10;
let g = 10;

console.log(c -=2); //resta                  
console.log(d *=2); //multiplicacion         
console.log(e / 2); //division               
console.log(f % 2); //modulo            
console.log(g ** 2); //potencia