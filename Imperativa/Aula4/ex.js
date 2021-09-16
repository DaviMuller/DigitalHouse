let Jose = {
nome : "José",
sobrenome : "de Souza",
idade : 27,
peso : 83.5,
altura : 1.70,
plano : "Ouro"
}; 

let Carlos = {
    nome : "Carlos",
    sobrenome : "de Souza",
    idade : 28,
    peso : 80.1,
    altura : 1.76,
    plano : "Diamante"
}; 
    


console.log(Jose.nome + " " + Jose.sobrenome + "  tem " + Jose.idade + " anos e seu indice de massa corporal e de " + (Jose.peso/Math.pow(Jose.altura,2)).toFixed(2));
console.log(Carlos.nome + " " + Carlos.sobrenome + "  tem " + Carlos.idade + " anos e seu indice de massa corporal e de " + (Carlos.peso/Math.pow(Carlos.altura,2)).toFixed(2));

