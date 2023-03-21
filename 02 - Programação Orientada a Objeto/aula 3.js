class Quadrado{
    constructor(base, altura){
        if(isNaN(base)|| isNaN(altura)) throw "não é um número";
        this.base = base;
        this.altura = altura;
        this.cor = undefined;
    }
}

const quadrado = new Quadrado(4,4);
quadrado.cor = 'azul';

console.log(quadrado);