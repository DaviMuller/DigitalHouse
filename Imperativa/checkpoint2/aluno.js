//Crie um objeto aluno que tenha como atributos: nome (string), quantidade de faltas (number) e notas (array de números). Crie um construtor para ele e importe-o como o módulo aluno.




class Aluno{

    constructor(nome,faltas,notas){
    this.nome = nome
    this.faltas = faltas
    this.notas = notas
    }

    calcularMedia(){
        var acumulador = 0
        for(let i=0; i < this.notas.lenght;i++){
            acumulador += this.notas[i]            
        }
        return this.notas.lenght
    }
}  



const aluno1 = new Aluno('Davi', 0, [10,10,8])

console.log(aluno1.calcularMedia())

