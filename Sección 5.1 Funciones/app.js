function imprimirTabla(base,limite) {
  //Imprimir la tabla del 10
  //let base = 10;
  //limite de la tabla
  //let limite = 5;

  for (let i = 1; i <= limite; i++) {
    let resultado = base * i;
    console.log(base + " * " + i + " = " + resultado);
  }
}
imprimirTabla(10,5);
imprimirTabla(4,50);
/* for(let i=1;i<=10;i++){
    tablaMultiplicar=2
    resultado= tablaMultiplicar*i
    // console.log("La tabla de multiplicar 2 es igual a \n " );
    console.log("2 * "+i+" =" + resultado);
} */

/* let gasolina =100;
while(gasolina>0){
    console.log("Ahora tienes: "+gasolina);
    gasolina--;
}
console.log("Ya no tienes gasolina"); */
