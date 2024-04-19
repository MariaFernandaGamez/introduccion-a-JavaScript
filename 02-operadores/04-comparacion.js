//los operadores de comparacion solamente imprimiran --true-- o --false--


let a = 10;

//De tipo Relacional
console.log(a > 5);       //true
console.log(a < 5);      //false
console.log(a >= 5);    //true
console.log(a <= 5);   //false


/*
    De tipo Igualdad (No muy recomendados ❌)
        El == solamente evalua que el valor sea igual, sin tener en cuenta el tipo de dato. Pudiendo generar errores
*/
console.log(10 == 10);    //true
console.log(a !=10);      //false
console.log(a == '10')    //true


/*
    De tipo Igualdad (Recomendados ✅)
        El === Evalua que tanto el valor como el tipo de dato sean iguales 
*/
console.log(a ==='10')     //false
console.log(a !=='10')     //true