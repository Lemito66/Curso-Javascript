//Crear un algoritmo, que basado en la nota
//imprima si el alumno aprueba la materia 

// Aprueba con 60
//si el alumno tiene nota menor a 50 
//imprimir un mensaje que diga: 
//porfavir estudie mas

let nota=49;

/* if(nota>=60){
    console.log("Su nota es: "+nota+" y por ende aprobo");
}
else if(nota<50){
    console.log("Porfavor estudie más");
}
else{
    console.log("El alumno no aprueba la clase");
} */
if(nota>40 & nota<50){
    console.log("Porfavor estudie más");
}
else if(nota>=60){
    console.log("Su nota es: "+nota+" y por ende aprobo");
}
else{
    console.log("El alumno no aprueba la clase");
}
