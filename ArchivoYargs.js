
const opciones={
    Matematicas:{
        default: 0,
        alias: 'm'
    },
    Ingles:{
        default: 0,
        alias:'i'
    },
    Programacion:{
        default:0,
        alias:'p'
    }
}

const argv=require('yargs')
            .command('Promedio','Calcular el Promedio',opciones)
            .argv

console.log(argv.Matematicas);
"'console.log('El nombre del estudiante es :'+ argv.nombre);'"
console.log(argv);
console.log('El promedio es: ' + (argv.m+argv.i+argv.p)/3);