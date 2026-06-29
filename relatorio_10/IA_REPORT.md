
# Relatorio de Uso de IA
## POO com JavaScript

Aluno: Augusto Leite
Matricula: 866
Inatel

Modelo usado em todas as perguntas: Claude (claude-sonnet-4-20250514)

---

## Introducao

Esse relatorio mostra as perguntas que eu fiz pra IA enquanto fazia os exercicios 1 a 4 de POO com JavaScript, com base no material do professor Pedro Henrique Ribeiro Dias. Pra cada exercicio coloquei a pergunta que mandei, a resposta que recebi e um comentario curto sobre o que aprendi.

---

## Exercicio 1 - Batalha Pokemon

### Pergunta

como eu deixo um atributo da classe so pra leitura em JS? no Pokemon a vida nao pode ser mudada de fora, so lida.

### Resposta

Use um campo privado com `#` e exponha a leitura com um getter, sem criar um setter:

```javascript
class Pokemon {
    #vida;
    constructor(nome, vida) {
        this.nome = nome;
        this.#vida = vida;
    }
    get vida() {
        return this.#vida;
    }
}
```

O `#vida` so pode ser acessado dentro da classe. O `get vida()` permite ler com `p.vida`, mas como nao existe setter, ninguem consegue alterar de fora.

### O que aprendi

Aprendi a usar `#` pra deixar o atributo privado de verdade e `get` pra liberar so a leitura. Usei isso na #vida do Pokemon.

---

## Exercicio 2 - Time de Valorant

### Pergunta 1

como eu obrigo uma classe filha a implementar um metodo? no slide a classe Habilidade tem que dar erro se a filha nao fizer o usar().

### Resposta 1

Em JavaScript voce simula isso colocando um `throw` no metodo da classe base:

```javascript
class Habilidade {
    usar() {
        throw new Error("O metodo usar() deve ser implementado pela classe filha!");
    }
}
```

Se a filha sobrescrever o `usar()`, roda normal. Se esquecer, o erro dispara quando o metodo for chamado.

### Pergunta 2

como eu percorro a lista de agentes e como retorno so os que tem habilidade do tipo Smoke?

### Resposta 2

Use `forEach` pra percorrer e `filter` com `instanceof` pra selecionar por tipo:

```javascript
iniciarPartida() {
    this.agentes.forEach(agente => agente.entrarEmCombate());
}
listarControladores() {
    return this.agentes.filter(agente => agente.habilidade instanceof Smoke);
}
```

O `forEach` so executa a acao em cada item. O `filter` devolve um array novo com os que passam na condicao, e o `instanceof` testa o tipo do objeto.

### O que aprendi

Aprendi a simular interface com `throw new Error` e a usar `forEach`, `filter` e `instanceof` pra trabalhar com a lista de agentes. Foi onde percebi que tinha esquecido a classe Time, que junta os agentes; depois disso completei o exercicio.

---

## Exercicio 3 - Gravity Falls

### Pergunta

qual a diferenca na pratica entre composicao e agregacao? as duas parecem so uma classe que tem outra dentro.

### Resposta

A diferenca esta em quem cria o objeto interno.

Composicao: a classe cria o objeto dentro dela mesma. Ele so existe junto com ela.

```javascript
class Diario {
    #criaturas;
    constructor() {
        this.#criaturas = []; // criado aqui dentro
    }
}
```

Agregacao: a classe recebe o objeto pronto pelo construtor. Ele existe por conta propria.

```javascript
class CabanaMisterio {
    #funcionarios;
    constructor(equipe = []) {
        this.#funcionarios = equipe; // veio pronto de fora
    }
}
```

Resumo: criou dentro e composicao, recebeu pronto e agregacao.

### O que aprendi

Aprendi a diferenciar os dois pelo lugar onde o objeto nasce. No Diario usei composicao (cria a lista dentro) e na CabanaMisterio usei agregacao (recebe os personagens prontos).

---

## Exercicio 4 - Hunter x Hunter

### Pergunta

como faco as classes filhas herdarem da Hunter e cada uma lutar de um jeito diferente?

### Resposta

Use `extends` pra herdar, `super()` no construtor pra chamar a classe base e sobrescreva o metodo na filha:

```javascript
class Gon extends Hunter {
    constructor() {
        super("Gon Freecss");
    }
    lutar() {
        return `${this.nome}: Jajanken!`;
    }
}
```

O `super()` tem que vir antes de usar `this`. Cada filha com seu proprio `lutar()` gera o polimorfismo: a mesma chamada `.lutar()` se comporta diferente em cada objeto.

### O que aprendi

Aprendi a usar `extends`, `super()` e a sobrescrever metodos pra cada Hunter lutar do seu jeito. Usei isso no Gon, Killua e Kurapika.

---

## Conclusao

As perguntas que fiz cobriram o que eu precisava pra fazer os 4 exercicios. Consegui escrever e rodar os 4 codigos: Batalha Pokemon, Time de Valorant, Gravity Falls e Hunter x Hunter.

Augusto Leite - Matricula 866 - Inatel
