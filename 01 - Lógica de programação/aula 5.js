let estaSol = true;

if(estaSol == true){
    console.log("Vou para a praia!!!!!!!!");
}
else{
    console.log("Não vou para a praia ):")
}

let numero = -5;

if(numero > 0){
    console.log("Numero positivo")
}
else if(numero == 0){
    console.log("O número é zero")
}
else{
    console.log("Numero negativo")
}

let num = 2
let paridade = num % 2 == 0 ? 'par' : 'ímpar'

console.log(paridade)


let sinal = "vermelo";

switch(sinal){
    case "verde":
        console.log("Pode passar");
        break;
    case "amarelo":
        console.log("Prestes a fechar, cuidado...");
        break;
    case "vermelho":
        console.log("Fechado, não passe");
        break;
    default:
        console.log('Sinal inválido')
}