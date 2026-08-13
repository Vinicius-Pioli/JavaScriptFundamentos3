function somar(a, b){
    return a + b;
}

const resultado = somar (15 , 30);

console.log(resultado);

console.log(somar(7,9));

function ligaDesligar(){
    if(ligado === false){
        ligado = true;
        return "Ligado"
    }else {
        ligado = true;
        return "Desligado"
    }
}
console.log(ligaDesligar());
console.log(ligaDesligar())