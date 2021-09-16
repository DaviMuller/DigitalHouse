function adicionar(x,y){
     return x+y;
}

function subtrair(x,y) {
    return x-y;
}

function multiplicar(x,y) {
    return x*y;
}

function dividir(x,y) {
    return x/y;
}

function elevarAoQuadrado(x){
    return multiplicar(x,x);
}

function mediaDeTresNumeros(x,y,z){
    return dividir(adicionar(adicionar(x,y),z),3);
}

function calculaPorcentagem(x,y){
    return multiplicar(x,dividir(y,100));
}

function geradorDePorcentagem(x,y){
    return dividir(dividir(y,x),100);
}

console.log("-----------Teste de operações / Calculadora-----------");
console.log(adicionar(2,3));
console.log(subtrair(2,3));
console.log(dividir(2,3).toFixed(2));
console.log(multiplicar(2,3));
console.log(elevarAoQuadrado(3));
console.log(mediaDeTresNumeros(3,5,7));
console.log(calculaPorcentagem(300,15));
console.log(geradorDePorcentagem(2,200));