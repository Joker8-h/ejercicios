class Alumno {
    #nombre;
    #edad;

    constructor(nombre, edad) {
        this.#nombre = nombre;
        this.#edad = edad;
    }

    get nombre() {
        return this.#nombre;
    }

    get edad() {
        return this.#edad;
    }
}

class Curso {
    #nombre;
    #alumnos;

    constructor(nombre) {
        this.#nombre = nombre;
        this.#alumnos = [];
    }

    get nombre() {
        return this.#nombre;
    }

    agregarAlumno(alumno) {
        if (alumno instanceof Alumno) {
            this.#alumnos.push(alumno);
        } else {
            console.error("Solo se pueden agregar objetos de tipo Alumno.");
        }
    }

    mostrarAlumnos() {
        return this.#alumnos;
    }
}

// Example Usage:
let uncurso = new Curso("Programacion en Javascript");

let alumno1 = new Alumno("arlys", 25);
let alumno2 = new Alumno("jose", 23);
let alumno3 = new Alumno("luis", 21);

uncurso.agregarAlumno(alumno1);
uncurso.agregarAlumno(alumno2);
uncurso.agregarAlumno(alumno3); // Added the third student

let alumnosDelCurso = uncurso.mostrarAlumnos();

console.log(`Alumnos en el curso "${uncurso.nombre}":`);
alumnosDelCurso.forEach((alumno) => {
    console.log(`Nombre: ${alumno.nombre}`);
    console.log(`Edad: ${alumno.edad}`);
    console.log("--------------");
});
