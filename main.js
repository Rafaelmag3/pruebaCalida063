function fact(n){ 
    f=1;
    
    for (i=1;i <n+1; i++) {
         f=f*i
        };
    
    return f 
}
    
function bin(){ 
    k=parseInt(document.datos.k.value);
    n=parseInt(document.datos.n.value);
    p=parseFloat(document.datos.p.value);
    document.datos.prob.value= (fact(n)/(fact(n-k)*fact(k))*Math.pow(p,k)*Math.pow(1-p,n-k)).toFixed(2)*100 + '%'; 
    document.datos.fracaso.value= (p-1).toFixed(2)*-1; 
}