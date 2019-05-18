const {Estudiantes,ObtenerPromedio}= require('./Estudiante');

console.log("El nombre del estudiante es: " + Estudiantes.Nombre);
console.log('El Promedio del estudiante es: ' + ObtenerPromedio(Estudiantes.Notas.Matematicas,Estudiantes.Notas.Ingles,Estudiantes.Notas.Programación));

let {Nombre,Edad,Notas:{Matematicas,Ingles,Programación}}=Estudiantes
console.log("El nombre del estudiante es: " + Nombre);
console.log('El Promedio del estudiante es: ' + ObtenerPromedio(Matematicas,Ingles,Programación));
console.log('La Edad del estudiante es: ' + Edad);
