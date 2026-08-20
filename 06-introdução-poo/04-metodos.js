class Pessoa{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    };

    apresentar(){
        console.log(`${this.nome} - Nota ${nota}`);
    }
}

const aluno1 = new Pessoa("Ana" , 10);
const aluno2 = new Pessoa("Kauan" , 8);
console.log(aluno1.apresentar());
console.log(aluno2.apresentar());