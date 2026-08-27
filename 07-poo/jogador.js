class Jogador {
    constructor(nome, idade, posicao){
        this.nome = nome;
        this.idade = idade;
        this.posicao = posicao;
    }

    apresentar(){
        console.log(`Meu nome e ${this.nome}`);
        console.log(`Tenho ${this.idade} anos`);
        console.log(`Minha posição e ${this.posicao}`);
    }

    atacar(){
        console.log(`${this.nome} está realizando um ataque!`);
    }

    defender(){
        console.log(`${this.nome} está realizando uma defesa`)
    }

    receber(){
    console.log(`${this.nome} recebeu a bola`);
    }

    treinar(){
    console.log(`${this.nome} está treinando para o proximo para partida`);
    }

    descansar(){
    console.log(`${this.nome} está descansando após o treino`);
    }
}

const jogador1 = new Jogador("Anna", 16, "Ponteiro");
const jogador2 = new Jogador("Kaue", 17, "Líbero ");
const jogador3 = new Jogador("Igor", 17, "Levantador ");
const jogador4 = new Jogador("Vinicius", 17, "Central ");
const jogador5 = new Jogador("Pedro", 17, "Ponta");
jogador1.apresentar();
jogador2.apresentar();
jogador3.apresentar();
jogador4.apresentar();
jogador1.atacar();
jogador2.defender();
jogador3.receber();
jogador4.atacar();
jogador5.treinar();
jogador5.descansar();
