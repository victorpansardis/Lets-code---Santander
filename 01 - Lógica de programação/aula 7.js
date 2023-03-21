let vetor = [10,20,30,40,50];
vetor[2]="30";
console.log(vetor[2]);


let vetorVazio =[];
for(let i = 0; i<10; i++){
    vetorVazio.push(i);
}

console.log(vetorVazio);

let vetorPercorrer = [10,20,30,40,50,60,70,80,90];

/*for(let i=0; i<vetorPercorrer.length;i++){
    console.log(vetorPercorrer[i]);
}
for (let indice of vetorPercorrer){
    console.log(indice);
}*/
for (let indice in vetorPercorrer){
    console.log(vetorPercorrer[indice]);
}

let matriz =[
    [1,2,3],
    [4,5,6],
    [7,8,9],
];

for(let linha of matriz){
    for(elemento of linha){
        console.log(elemento);
    }
}