/*
    OBJETOS
        Son de tipo de dato de referencia, NO primitivo 

        Para definir un objeto abrimos { }
        Tenemos la estructura  --->   llave:valor 
        si el valor es un string va dentro de " "
        se separa cada valor con ,
*/

let personaje={
    nombre:"Gloria",
    serie: "Modern Family",
    edad:45,
};


//Imprimir todo el objeto
console.log(personaje);


//2 formas de imprimir solo una llave del objeto:
console.log(personaje['serie']); 
console.log(personaje.edad);  //Esta es la mas comun


//2 formas de editar una llave dentro de un objeto:
personaje.nombre='cam'; //Esta es la mas comun
personaje['edad']=50;


//como eliminar una llave del objeto: 
delete personaje.serie;


console.log(personaje);