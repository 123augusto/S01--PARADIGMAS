// Exercicio 1 - Batalha Pokemon
// Augusto Leite - Matricula 866

// --- CLASSE BASE ---
class Pokemon {
    // ENCAPSULAMENTO: o # garante que a vida não pode ser alterada diretamente
    #vida;
    constructor(nome, tipo, vidaInicial = 100) {
        this.nome = nome;
        this.tipo = tipo;
        this.#vida = vidaInicial;
    }
    // GETTER: Permite ler a vida de fora da classe, mas não alterá-la
    get vida() {
        return this.#vida;
    }
    // Método genérico que será sobrescrito
    atacar() {
        return `${this.nome} realizou um ataque básico!`;
    }
    // Método mutador controlado: a única forma de alterar a #vida
    receberDano(quantidadeDano) {
        this.#vida -= quantidadeDano;

        // Regra de negócio: a vida não pode ficar negativa
        if (this.#vida < 0) {
            this.#vida = 0;
        }

        console.log(`💥 [DANO] ${this.nome} perdeu ${quantidadeDano} HP!`);
    }
}
// --- HERANÇA E SOBRESCRITA (POLIMORFISMO) ---
class Pikachu extends Pokemon {
    constructor() {
        // Chama o construtor da classe base (Pokemon)
        super('Pikachu', 'Elétrico', 90);
    }
    // OVERRIDE: Sobrescreve o ataque genérico com um específico
    atacar() {
        return `⚡ ${this.nome} usou o Choque do Trovão!`;
    }
}
class Charizard extends Pokemon {
    constructor() {
        super('Charizard', 'Fogo/Voador', 150);
    }
    // OVERRIDE
    atacar() {
        return `🔥 ${this.nome} usou o Lança-Chamas!`;
    }
}
// --- MAIN (Execução do Cenário) ---
// 1. Instanciando os objetos
const meuPikachu = new Pikachu();
const meuCharizard = new Charizard();
console.log("--- INÍCIO DA BATALHA ---");
// 2. Acionando o Polimorfismo (cada um ataca do seu jeito)
console.log(meuPikachu.atacar());
console.log(meuCharizard.atacar());
console.log("\n--- TURNO DE DANO ---");
// 3. Modificando o estado de forma encapsulada
// Isso daria ERRO: meuCharizard.#vida = -50; (O encapsulamento protege)
meuCharizard.receberDano(45);
meuPikachu.receberDano(100); // Vai testar a trava de não ficar com vida negativa
console.log("\n--- STATUS FINAL ---");
// 4. Lendo os atributos protegidos através do Getter
console.log(`${meuCharizard.nome} HP Restante: ${meuCharizard.vida}`);
console.log(`${meuPikachu.nome} HP Restante: ${meuPikachu.vida}`);
