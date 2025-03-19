function somar(a, b){
    return a + b;
}

function subtrair (a, b){
    return a - b;
}

function multiplicar(a , b){
    return a * b;
}

function dividir (a , b){ 
    return a / b;
}

module.exports = {
    somar,
    subtrair,
    multiplicar,
    dividir
}



/*caso eu queira deixar tudo em uma pagina, poderia ser feito assim ex:
    module.exports = {
    function (somar (a, b)) {
        return a + b;
        
    }
}
*/