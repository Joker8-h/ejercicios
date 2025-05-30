class libro{
    constructor(titulo,autor,numeropagina){
        this.titulo=titulo
        this.autor=autor
        this.numeropagina=numeropagina
    }
    getnumeropagina () {
        return this.numeropagina

 }
 setautor(newautor){
    this.autor=newautor
 }

}
let unlibro=new libro("cien años de soledad","gabriel garcia marquez","355")
console.log (typeof(unlibro))
console.log("titulo del libro "+ unlibro.titulo)
console.log("el autor es " + unlibro.autor )

 