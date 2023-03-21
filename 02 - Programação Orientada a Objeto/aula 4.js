class Quadrado{
    constructor(base, altura){
        if(isNaN(base)|| isNaN(altura)) throw "não é um número";
        this.base = base;
        this.altura = altura;
        this.cor = undefined;
    }
    calculaArea(){
        return this.base*this.altura;
    }
    duplicaBase(){
        this.base = 2* this.base;
    }
    imprimir(){
        return `<div style='width:${this.base}pageXOffset;height:${this.altura}pageXOffset; background-color:${this.color || "blue"}'></div>`;
    }
}



const quadrado = new Quadrado(4,4);
quadrado.duplicaBase();

console.log(quadrado.calculaArea());
console.log(quadrado.imprimir());
//<div style='width:6px;height:8px;background-color:blue'></div>