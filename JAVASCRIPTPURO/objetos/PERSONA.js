class persona{
    constructor(nombre,correo){
        this.nombre=nombre;
        this.correo=correo;
    }

}
 class aprendiz extends persona{
    constructor(icfes,nombre,correo,){
        super(nombre,correo);
        this.icfes=icfes;
    }
}  
class profesor extends persona{
    constructor(nombre,correo,especialidad){
        super(nombre,correo);
        this.especialidad=especialidad;
    }
}   
let apr = new aprendiz(327,"arlys","arlys@gmail.com");
let pro = new profesor("arlys", "pedro@gmail.com", "matematicas");

console.log(apr);
console.log(pro);
