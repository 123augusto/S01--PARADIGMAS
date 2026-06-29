// Exercicio 3 - Gravity Falls
// Augusto Leite - Matricula 866

// ==========================================
// PARTE 1: COMPOSIÇÃO (Relação de Morte/Vida)
// ==========================================
class Criatura {
    constructor(nome, perigo) {
        this.nome = nome;
        this.perigo = perigo;
    }
}
class Diario {
    // Encapsulamento da lista de páginas/criaturas
    #criaturas;
    constructor() {
        // COMPOSIÇÃO: O array nasce JUNTO com o Diário.
        // O Diário é o único "dono" absoluto desta lista.
        this.#criaturas = [];
    }
    registrarCriatura(criatura) {
        this.#criaturas.push(criatura);
        console.log(`[Diário 3] Registro atualizado: ${criatura.nome} catalogado.`);
    }
    listarCriaturas() {
        console.log("\n--- PÁGINAS DO DIÁRIO 3 ---");
        // Iteração com arrow function
        this.#criaturas.forEach(criatura => {
            console.log(`> Anomalia: ${criatura.nome} | Ameaça: ${criatura.perigo}`);
        });
    }
}
// ==========================================
// PARTE 2: AGREGAÇÃO (Relação de Associação)
// ==========================================
class Personagem {
    constructor(nome) {
        this.nome = nome;
    }
}
class CabanaMisterio {
    #funcionarios;
    // AGREGAÇÃO: A Cabana recebe um array de objetos que já foram
    // instanciados externamente. Eles não pertencem exclusivamente a ela.
    constructor(equipeInicial = []) {
        this.#funcionarios = equipeInicial;
    }
    listarFuncionarios() {
        console.log("\n--- STAFF DA CABANA DO MISTÉRIO ---");
        this.#funcionarios.forEach(personagem => {
            console.log(`- ${personagem.nome}`);
        });
    }
}
// ==========================================
// MAIN (Executando o Cenário)
// ==========================================
console.log("=== INICIANDO O VERÃO EM GRAVITY FALLS ===\n");
// 1. Cenário de Composição (Diário e Criaturas)
const diario3 = new Diario();
const gnomo = new Criatura("Gnomo", "Baixo");
const multurso = new Criatura("Multurso", "Alto");
const billCipher = new Criatura("Bill Cipher", "Apocalíptico");
diario3.registrarCriatura(gnomo);
diario3.registrarCriatura(multurso);
diario3.registrarCriatura(billCipher);
// Exibindo as criaturas
diario3.listarCriaturas();
// 2. Cenário de Agregação (Personagens e Cabana)
// Os personagens "nascem" livres no escopo global
const stan = new Personagem("Grunkle Stan");
const mabel = new Personagem("Mabel Pines");
const soos = new Personagem("Soos Ramirez");
// Eles são inseridos ("agregados") na Cabana posteriormente
const cabana = new CabanaMisterio([stan, mabel, soos]);
// Exibindo os funcionários
cabana.listarFuncionarios();
