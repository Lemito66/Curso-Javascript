let personas=["Emill","Jorge","Manuel",];
let salarios=[1000,1200,300]
let dia=["Lunes","Martes","Miercoles"];
for(let i=0; i<personas.length;i++){
    
    console.log(personas[i]+" tiene un salario de "+ salarios[i]+" en el dia: "+dia[i]);


}
cargabus=100;
while (cargabus>0){
    console.log("Tu combustible: "+cargabus);
    if(cargabus ===1){
        console.log("Pon inmediatamente combustible porque tienes: "+cargabus+" de combustible");
    }
    cargabus--;
}
console.log("Ya no tienes gasolina te quedaste con "+ cargabus);