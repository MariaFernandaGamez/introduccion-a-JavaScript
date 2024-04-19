/*
    ARGUMENTOS Y PARAMETROS
        En las funciones podemos tambien hacer uso de parametros y argumentos 
        Los parametros y Argumentos de las funciones los ubicaremos dentro del ( )
*/ 



/*
    Al crear la funcion le pasamos los PARAMETROS que queremos que tenga en cuenta al momento de ejecutarla, sin embargo no hara ninguna operacion aun porque no les hemos dado ningun valor numerico
*/
function multiplicacion(a,b){
    return a * b;
}


//Ahora, creamos una variable que almacenara el resultado retornado por la funcion --multiplicacion-- pasandole los ARGUMENTOS que reemplazaran a los parametros
let resultado=multiplicacion(5,9);


//Imprimir variable
console.log(resultado);


