let Promedio=(n1,n2,n3)=>{
    setTimeout(function(){
        let resultado=(n1+n2+n3)/3;
        return resultado;
    }, 2000);
}

console.log("El Promedio es : " + Promedio(2,4,5));