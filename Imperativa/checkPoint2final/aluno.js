let aluno1 = {

    nome:'Davi',
    qtdFaltas: 2,
    notas:[10,8,6],

    calcularMedia:function(){
        let soma = 0
        for(let nota of this.notas){
            soma = soma + nota
        }
        let media = soma/this.notas.length
        console.log(media)
    },

    faltas:function(){
        this.qtdFaltas +=1
    }
}  

let aluno2 = {

    nome:'Helena',
    qtdFaltas: 6,
    notas:[10,5,5],

    calcularMedia:function(){
        let soma = 0
        for(let nota of this.notas){
            soma = soma + nota
        }
        let media = soma/this.notas.length
    },

    faltas:function(){
        this.qtdFaltas +=1
    }
}

 module.exports = {
    aluno1, aluno2
}
 









/*  function Aluno(nome, faltas, notas){
    this.nome = nome;
    this.faltas = faltas;
    this.notas = notas;

    this.calcularMedia = function(){
        let soma = 0
        for(let nota of this.notas){
            soma = soma + nota
        }
        let media = soma/this.notas.lenght
        console.log(media)
    }
    this.func2 = function(){}
} 


let aluno1 = new Aluno("Davi", 2, [10,8,6])
aluno1.calcularMedia() */
