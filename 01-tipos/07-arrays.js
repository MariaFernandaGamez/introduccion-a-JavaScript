/*
    ARRAYS
        Son de tipo de dato de referencia, NO primitivo 
        
        Los definimos dentro de []
        Los string van dentro de ' '
        Se separa cada valor con ,
        cada valor se identifica por su INDEX, empezando siempre en 0
*/ 

let animales=['caballos', 'perros', 2];

//Imprimir todo el array
console.log(animales);

//Para imprimir un solo valor pondremos su index dentro de [ ]
console.log(animales[0]);

//Modificar un valor del array
animales[2]='gatos';


/*
    Crear un valor con un index muy adelante del ultimo,
        el ultimo fue index[2] ahora creare un index[10]
    Esto generara que los valores con los index del 3 al 9 esten vacios, y asi se imprimira en la consola
*/
animales[10]='peces';
console.log(animales[7]); //undefined

//El tipo de dato que imprimira sera objeto, aunque sea un array.
console.log(typeof animales);

//Imprimir el largo o cantidad de elementos del array
console.log(animales.length);
