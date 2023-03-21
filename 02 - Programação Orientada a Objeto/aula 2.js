class Pessoa{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
}

const pessoa1 = new Pessoa('Victor', 25);
pessoa1.idade = 26;
console.log(pessoa1);

const pessoa2 = new Pessoa('Dominique', 25);
console.log(pessoa2);