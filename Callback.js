let Promedio=(n1,n2,n3,callback)=>{
    setTimeout(function(){
        let resultado=(n1+n2+n3)/3;
        callback(resultado);
    },  0);
}
Promedio(4.5,4,5,function(resultado){
    console.log(resultado);
})