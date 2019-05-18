let Estudiantes={
    Nombre: 'Juan',
    Edad: 25,
    Notas: {
    Matematicas: 4,
    Ingles: 3,
    Programación: 2
}
};

let ObtenerPromedio = (n1,n2,n3)=>(n1+n2+n3)/3;
module.exports={
    Estudiantes,
    ObtenerPromedio
};
