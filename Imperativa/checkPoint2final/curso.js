const alunos = require('./aluno')


let curso1 = {


    nome:'Imperativa',
    notasAprovacao: 7,
    faltasMaximas: 5,
    estudantes: [],

    addAluno:function(estudante){
        this.estudantes.push(estudante)
    },

    aprovado:function(i){
        if(this.estudantes[i].calcularMedia()>= this.notasAprovacao && this.estudantes[i].qtdFaltas <= this.faltasMaximas) return true
        else return false
    },

/*     listaAprovado:function(){
        let arrayAprovado = []
        let i =0
        for(aluno of this.estudantes){            
            if(this.aprovado(i)) this.arrayAprovado.push(true)
            else this.arrayAprovado.push(false)
            i++
        } 
    } */
}  

curso1.addAluno(alunos.aluno1)
curso1.addAluno(alunos.aluno2)
console.log(curso1.estudantes)
console.log(curso1.aprovado(1))

/* console.log(curso1.listaAprovado()) */