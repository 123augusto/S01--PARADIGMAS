// Exercicio 2 - Time de Valorant
// Augusto Leite - Matricula 866

// --- INTERFACE (Abstração) ---
// Simula um contrato. Qualquer classe que herdar daqui DEVE implementar o usar()
class Habilidade {
    usar() {
        throw new Error("Erro: O método 'usar()' deve ser implementado pela classe filha!");
    }
}
// --- CLASSES COMPONENTES (Herança e Sobrescrita) ---
class Smoke extends Habilidade {
    usar() {
        return "Lançando uma cortina de fumaça para bloquear a visão dos inimigos!";
    }
}
class Flash extends Habilidade {
    usar() {
        return "Disparando um clarão para cegar quem estiver olhando!";
    }
}
class Dash extends Habilidade {
    usar() {
        return "Avançando rapidamente com um salto no ar para fugir ou surpreender!";
    }
}
class Armadilha extends Habilidade {
    usar() {
        return "Posicionando um fio de armadilha oculto para proteger as costas!";
    }
}
// --- COMPOSIÇÃO ---
class Agente {
    constructor(nome, funcao, habilidadeEquipada) {
        this.nome = nome;
        this.funcao = funcao;
        // COMPOSIÇÃO: o Agente "TEM UMA" Habilidade, recebida via construtor
        this.habilidade = habilidadeEquipada;
    }
    entrarEmCombate() {
        console.log(`🔫 [${this.funcao}] O agente ${this.nome} entrou na partida.`);
        // Polimorfismo: o agente confia no contrato de que usar() existe
        const acao = this.habilidade.usar();
        console.log(`   -> Ação Tática: ${acao}`);
    }
}
// --- AGREGAÇÃO ---
class Time {
    // AGREGAÇÃO: o Time recebe agentes que já foram criados externamente.
    // Se o Time acabar, os agentes continuam existindo por conta própria.
    constructor(agentes = []) {
        this.agentes = agentes;
    }
    iniciarPartida() {
        console.log("--- INÍCIO DA PARTIDA ---");
        this.agentes.forEach(agente => agente.entrarEmCombate());
    }
    listarControladores() {
        // filter + instanceof: retorna só os agentes cuja habilidade é Smoke
        return this.agentes.filter(agente => agente.habilidade instanceof Smoke);
    }
}
// --- MAIN (Testando o Cenário) ---
// 1. Criando os Agentes e injetando suas habilidades via construtor
const omen   = new Agente("Omen",   "Controlador", new Smoke());
const skye   = new Agente("Skye",   "Iniciador",   new Flash());
const jett   = new Agente("Jett",   "Duelista",    new Dash());
const cypher = new Agente("Cypher", "Sentinela",   new Armadilha());
// 2. Agregando os agentes em um Time
const time = new Time([omen, skye, jett, cypher]);
// 3. Iniciando a partida (percorre e aciona cada agente)
time.iniciarPartida();
// 4. Listando apenas os controladores (habilidade do tipo Smoke)
console.log("\n--- CONTROLADORES NO TIME ---");
const controladores = time.listarControladores();
controladores.forEach(agente => console.log(`🛡️ ${agente.nome} (${agente.funcao})`));
