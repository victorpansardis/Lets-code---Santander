/*function Quadrado(base, altura){
    this.base = base;
    this.altura = altura;
    let cor = 'blue';
}

const quadrado = new Quadrado(2,2);
console.log(quadrado.cor);*/


/*function criaQuadrado(base, altura){
    let cor = 'blue';

    return{
        base, 
        altura,
        getCor: function(){return cor;}
    };
}

const quadrado = criaQuadrado(2,2);
console.log(quadrado.getCor());*/

class Quadrado{
    constructor(lado, altura){
        let cor = 'blue';
        this.lado = lado;
        this.altura = altura;
        this.getCor = () => {return cor;};
    }
}

const quadrado = new Quadrado(2,2);
console.log(quadrado.getCor());