
export default class Triangulo {
   
    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
    }

    calcularArea() {
        return (this.base * this.altura) / 2;
    }
}
