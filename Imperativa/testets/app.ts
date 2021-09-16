
function menuMicroondas(tempo: number, comida: string){
    let tempoDeCozimento:number = cozimento(comida);
    if (tempoDeCozimento < 0) return console.log("O prato escolhido não existe");
    else if (tempo < tempoDeCozimento) return console.log("Tempo Insuficiente");
    else if (tempo >= tempoDeCozimento && tempo < tempoDeCozimento*2) return console.log("Prato pronto, bom apetite");
    else if (tempo >= tempoDeCozimento*2 && tempo < tempoDeCozimento*3) return console.log("Comida queimou");
    else return console.log("Kabumm"); 
}

function cozimento(comida:string):number{
    if(comida == 'pipoca') return 10;
    else if (comida == 'macarrao') return 8;
    else if (comida == 'carne') return 15
    else if (comida == 'feijao') return 12;
    else if (comida == 'brigadeiro') return 8;        
    else return -1;
}

/* ========================================================================================================
 Para testar
=========================================================================================================*/

menuMicroondas(20,'carne');

