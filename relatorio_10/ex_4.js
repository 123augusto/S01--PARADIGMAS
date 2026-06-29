// Exercicio 4 - Hunter x Hunter
// Augusto Leite - Matricula 866

// ==========================================
// PARTE 1: CLASSE BASE
// ==========================================
class Hunter {
    constructor(nome) {
        this.nome = nome;
    }
    // Método genérico
    lutar() {
        return `${this.nome} entra em posição de combate com sua aura de Nen!`;
    }
}
// ==========================================
// PARTE 2: HERANÇA E SOBRESCRITA (Polimorfismo)
// ==========================================
class Gon extends Hunter {
    constructor() {
        // Invocando o construtor da classe base
        super("Gon Freecss");
    }
    // OVERRIDE: Reescrevendo o método lutar
    lutar() {
        return `✊ ${this.nome} concentra sua aura no punho: "Primeiro vem a pedra... Jajanken!"`;
    }
}
class Killua extends Hunter {
    constructor() {
        super("Killua Zoldyck");
    }
    // OVERRIDE
    lutar() {
        return `⚡ ${this.nome} ativa o Kanmuru (Godspeed) e avança na velocidade do relâmpago!`;
    }
}
class Kurapika extends Hunter {
    constructor() {
        super("Kurapika Kurta");
    }
    // OVERRIDE
    lutar() {
        return `⛓️ ${this.nome} revela seus Olhos Escarlates e conjura a Corrente do Julgamento!`;
    }
}
// ==========================================
// PARTE 3: AGREGAÇÃO
// ==========================================
// Classe simples para representar os vilões independentes
class Membro {
    constructor(nome) {
        this.nome = nome;
    }
}
class TrupeFantasma {
    // AGREGAÇÃO: A Trupe recebe uma lista de membros já instanciados.
    // Se a Trupe for desfeita, os criminosos continuam existindo pelo mundo.
    constructor(nomeFaccao, membrosAvistados = []) {
        this.nome = nomeFaccao;
        this.membros = membrosAvistados;
    }
    revelarMembros() {
        console.log(`\n🕷️ [ALERTA] Os integrantes da ${this.nome} foram revelados:`);

        // Iteração com forEach acessando os objetos agrupados
        this.membros.forEach(membro => {
            console.log(`   -> ${membro.nome} (Tatuagem da Aranha confirmada)`);
        });
    }
}
// ==========================================
// MAIN (Executando o Cenário)
// ==========================================
console.log("=== ARCO DE YORKNEW CITY ===\n");
// 1. Instanciando os Heróis e acionando o Polimorfismo
const gon = new Gon();
const killua = new Killua();
const kurapika = new Kurapika();
console.log("--- CAÇADORES PREPARADOS ---");
console.log(gon.lutar());
console.log(killua.lutar());
console.log(kurapika.lutar());
// 2. Criando instâncias independentes dos Vilões
const chrollo = new Membro("Chrollo Lucilfer");
const hisoka = new Membro("Hisoka Morow");
const feitan = new Membro("Feitan Portor");
// 3. Agregando os vilões na formação da Trupe
const aranhas = new TrupeFantasma("Trupe Fantasma", [chrollo, hisoka, feitan]);
// Exibindo os dados agregados
aranhas.revelarMembros();
