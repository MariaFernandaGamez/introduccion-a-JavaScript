/*
   FUNCIONES 
        Con la palabra reservada --function-- creamos una funcion que ejecutara cierto codigo unicamente cuando la llamemos, crearla no hara que ocurra nada en la consola
        Para crearla acompañamos --function-- del nombre y ( ) , luego abrimos {}
        Dentro de { } pondremos el codigo correspondiente
*/


//                                        EJEMPLO 1

function saludar(){
    console.log('Hola Mundo');
}

/*
    Llamar a la funcion, esto ejecutara el codigo que contiene.
    No es necesario usar --console.log-- para imrpimir la funcion porque ya lo tiene dentro de la misma
*/
saludar();


//--------------------------------------------------------------------------------------------//

//                                         EJEMPLO 2

function suma(){
    return 2+2;  //--return-- devueleve el valor recibido de la operacion para usarla despues 
}

/*
    En este caso para impimir no solo llamamos la funcion como en el anterior ejemplo
        Al utilizar el comando --return-- no le estamos diciendo al programa que imprima nada, simplemente que alamacene el resultado de la operacion 
    Aqui si necesitamos --console.log()-- para imprimir la funcion
*/
console.log(suma());
