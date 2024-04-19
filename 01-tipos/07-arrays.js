/*
    ARRAYS
        Son de tipo de dato de referencia, NO primitivo 
        
        Los definimos dentro de []
        Los string van dentro de ' '
        Se separa cada valor con ,
        cada valor se identifica por su INDEX, empezando siempre en 0
*/ 

let animales=['caballos', 'perros', 2];


//                                            IMPRIMIR ARRAYS

//1. Todo el array
console.log(animales);

//2. Un solo valor pondremos su index dentro de [ ]
console.log(animales[0]);

//3. El largo o cantidad de elementos del array
console.log(animales.length);

//4. El tipo de dato que imprimira sera objeto, aunque sea un array.
console.log(typeof animales);

//5. Array en forma de tabla
console.table(animales)


/*
    Crear un valor con un index muy adelante del ultimo,
        el ultimo fue index[2] ahora creare un index[10]
    Esto generara que los valores con los index del 3 al 9 esten vacios, y asi se imprimira en la consola
*/
animales[10]='peces';
console.log(animales[7]); //undefined


//                                        MODIFICAR ARRAYS

//1. Modificar un valor del array
animales[2]='gatos';

//2. Eliminar el ultimo elemento
animales.pop()

//3. 




/*                                                                          EJERCICIO PRACTICO
    Crear un array, imprimirlo en presentación de tabla.
    Preguntar al usuario si desea añadir o eliminar un elemento por medio de --prompt--
    lf
    
*/


