let listapresenca =['Renan', 'Vinicius', 'Gustavo', 'Douglas','Brian']
let alunonovo =[]

function verificarPresenca(nome){
    if(listapresenca.includes(nome)){
        return nome + ' está presente'
    }else{
        return nome + ' não está presente'
    }
}
function verificarPresenca(nome){
    if(alunonovo.includes(nome)){
        return nome + ' está presente'
    }else{
        return nome + ' não está presente'
    }
}

//inserir um novo nome na lista:
alunonovo.push('Antonio');

//CHAMADA:  
console.log(verificarPresenca('Renan'));
console.log(verificarPresenca('Vinicius'));
console.log(verificarPresenca('Gustavo'));
console.log(verificarPresenca('Douglas'));
console.log(verificarPresenca('Brian'));
console.log(verificarPresenca('Lucas'));
console.log(verificarPresenca('Antonio'));
