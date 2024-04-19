/*
    OPERADORES LOGICOS
        and   👉    --&&--
        or    👉    --||--
        not   👉    --!--
*/


/*
                       --&&--
Es la escritura en javasript para indicar 👉 and.
    Evalua que 2 o mas condiciones sean todas verdaderas, si una de ellas no lo es, automaticamente el resultado sera --false--
*/

let a=100
console.log ( (a > 30) && (a < 500) )  //true
console.log( (a > 20) && (a < 40))    //False

/*
    EJEMPLO
        En la plataforma de streaming Netflix, Se quiere saber si un usuario es mayor de edad para asi poder mostrarle todo el contenido para adultos. Pero ademas de esto se debe verificar que tenga una suscripcion.

        Si el usuario cumple los dos requisitos se le permitira acceso.
        Si el usuario solo cumple uno o ninguno de los 2 requisitos automaticamente se le prohibira ver todo el contenido. 
*/
let mayorEdad;
let suscrito;


mayorEdad=true;
suscrito=true;
console.log(mayorEdad && suscrito);   //true

mayorEdad=false;
suscrito=false;
console.log(mayorEdad && suscrito);   //false

mayorEdad=true;
suscrito=false;
console.log(mayorEdad && suscrito);   //false

 
/*
                          --||--
Es la escritura en javasript para indicar 👉 or.
    Evalua que al menos 1 de los requisitos sean --true--, al ser asi, el resultado sera true asi el otro requisito sea --false--
    Solo devolvera un resultado --false-- Si todos los requisitos son --false--
*/

let b=10
console.log ( (b > 30) || (b < 500) )  //true
console.log( (b > 25) && (b < 4))    //False


/*
                          --!--
Es la escritura en javasript para indicar 👉 not.
    Evalua que al menos 1 de los requisitos sean --true--, al ser asi, el resultado sera true asi el otro requisito sea --false--
    Solo devolvera un resultado --false-- Si todos los requisitos son --false--
*/

console.log( (!mayorEdad))
