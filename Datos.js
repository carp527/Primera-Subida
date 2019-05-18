const Estudiante1= require('./Estudiante');

console.log(Estudiante1.Estudiantes);
console.log('El Promedio del estudiante es: ' + Estudiante1.ObtenerPromedio(Estudiante1.Estudiantes.Notas.Matematicas,Estudiante1.Estudiantes.Notas.Ingles,Estudiante1.Estudiantes.Notas.Programación));