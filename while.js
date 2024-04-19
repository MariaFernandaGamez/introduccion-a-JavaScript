/*
    CICLO WHILE
        while(condicion){
            codigo a ejecutar
        }
*/

let cuentaAtras =10

while (cuentaAtras > 0){
    console.log(cuentaAtras)
    cuentaAtras-=1

    //si la variable tiene un valor de 5
    if (cuentaAtras ===5){
        break            //salir del bucle
    }
}

