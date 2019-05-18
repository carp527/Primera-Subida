const {Estudiantes,ObtenerPromedio}= require('./Estudiante');

const fs=require('fs');

console.log("El nombre del estudiante es: " + Estudiantes.Nombre);
console.log('El Promedio del estudiante es: ' + ObtenerPromedio(Estudiantes.Notas.Matematicas,Estudiantes.Notas.Ingles,Estudiantes.Notas.Programación));

let {Nombre,Edad,Notas:{Matematicas,Ingles,Programación}}=Estudiantes
console.log("El nombre del estudiante es: " + Nombre);
console.log('El Promedio del estudiante es: ' + ObtenerPromedio(Matematicas,Ingles,Programación));
console.log('La Edad del estudiante es: ' + Edad);

let crearArchivo=(Estudiantes)=>{
    texto='El nombre de estudiante es: ' + Nombre + '\r\n' +
            'Ha obtenido un promedio de: ' + ObtenerPromedio(Matematicas,Ingles,Programación)
        fs.writeFile('Promedio.txt',texto,(err)=>{
            if (err) throw (err);
            console.log('Se ha creado el archivo correctamente')
        });

        }
        crearArchivo(Estudiantes);


