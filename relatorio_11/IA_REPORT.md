# IA_REPORT.md

## Identificacao

- Nome completo: Augusto Leite Del' Carlo Carneiro
- Matricula: 866
- Disciplina: POO com Java - Inatel (Prof. Pedro Henrique Ribeiro Dias)

Modelo usado em todas as perguntas: Claude sonnet

---

## Introducao

Esse relatorio mostra as perguntas que eu fiz pra IA enquanto fazia os exercicios 1 a 4 de POO com Java, com base no material do professor. 

Observacao sobre a entrega: cada exercicio foi entregue em um unico arquivo .java (Exercicio1.java, Exercicio2.java, etc.), com todas as classes juntas no mesmo arquivo. O monitor liberou entregar dessa forma. Vale registrar que esse nao e o jeito mais indicado em Java o padrao da linguagem e uma classe publica por arquivo separado mas como foi autorizado, juntei tudo pra facilitar. Em cada arquivo, so a classe que tem o main fica como public e as demais ficam sem o modificador, que e o que permite varias classes num arquivo so.

---

## Exercicio 1 - Castelo Animado do Howl

### Pergunta

como eu faco uma classe que obriga as filhas a implementarem um metodo, mas que nao pode ser criada sozinha? a Personagem nao deveria existir sozinha, so o Mago.

### Resposta

Use uma classe abstrata. Ela e declarada com abstract e pode ter um metodo abstrato (sem corpo) que as filhas sao obrigadas a implementar:

```java
public abstract class Personagem {
    private String nome;
    public Personagem(String nome) { this.nome = nome; }
    public String getNome() { return nome; }
    public abstract void apresentar();  // sem corpo, a filha implementa
}
```

Como a classe e `abstract`, voce nao consegue dar `new Personagem(...)` direto. So as filhas concretas (Mago) podem ser instanciadas, e elas precisam implementar o `apresentar()` com `@Override`.

### O que aprendi

Aprendi que classe abstract nao pode ser instanciada e que abstract void no metodo forca a filha a implementar. Usei isso na Personagem (com o apresentar) e o Mago herdou com extends e super.

---

## Exercicio 2 - Cafe Leblanc

### Pergunta

o que e esse @Override e por que ele importa? eu nao posso so reescrever o metodo na filha sem ele?

### Resposta

Voce pode reescrever sem o `@Override` que funciona, mas o `@Override` e uma protecao: ele pede pro compilador conferir se voce esta mesmo sobrescrevendo um metodo que existe na classe pai.

```java
public class CafeGourmet extends Cafe {
    private double bonusAroma;
    @Override
    public double calcularPrecoFinal() {
        return getPreco() + bonusAroma;
    }
}
```

Se voce errar o nome ou a assinatura (por exemplo escrever calcularPreco() em vez de calcularPrecoFinal()), sem o @Override o Java cria um metodo novo em silencio e o bug passa. Com o @Override, ele acusa erro na hora da compilacao. Ou seja, ele nao muda o comportamento, mas evita um erro chato de achar.

### O que aprendi

Aprendi que @Override nao e decorativo: ele faz o compilador checar se a assinatura bate com a do pai. Usei no calcularPrecoFinal do CafeGourmet, que soma o bonus e gera o polimorfismo (cada cafe calcula o preco do seu jeito).

---

## Exercicio 3 - Aliens e Youkai

### Pergunta 1

qual a diferenca pratica entre classe abstrata e interface? as duas parecem a mesma coisa.

### Resposta 1

A diferenca esta no que cada uma carrega.

A classe abstrata pode ter atributos e metodos ja implementados, alem dos abstratos. Serve quando as filhas tem uma base comum. Usa `extends` e voce so pode herdar de uma.

A interface e so um contrato: lista os metodos que a classe deve ter, sem nenhuma implementacao. Usa `implements` e voce pode implementar varias.

```java
public interface Rastreavel {
    String obterCoordenadas();  // so o contrato, sem corpo
}

public class Alien extends Entidade implements Rastreavel {
    // herda de Entidade E assina o contrato Rastreavel
}
```

Resumo: classe abstrata quando ha uma base comum pra compartilhar; interface quando classes diferentes so precisam garantir que tem certos metodos. E como o Alien mostra, da pra usar as duas juntas.

### Pergunta 2

como o HashMap evita duplicatas? eu so dou "put" e ele ja bloqueia sozinho?

### Resposta 2

O `HashMap` nao bloqueia: se voce der `put` com uma chave que ja existe, ele sobrescreve o valor antigo. Pra evitar duplicata voce mesmo checa antes com `containsKey`:

```java
public void registrarEntidade(Entidade entidade) {
    if (entidades.containsKey(entidade.getNome())) {
        System.out.println("AVISO: ja registrado.");
        return;
    }
    entidades.put(entidade.getNome(), entidade);
}
```

A unicidade vem da chave (aqui o nome), nao do objeto inteiro. Outro detalhe: o HashMap nao guarda a ordem de insercao, entao na hora de listar a ordem pode sair diferente da que voce colocou.

### O que aprendi

Aprendi a diferenca entre classe abstrata (base com implementacao) e interface (so contrato), e que da pra combinar as duas. No HashMap aprendi que a duplicata e barrada pela chave com containsKey antes do put, e que ele nao mantem a ordem de insercao.

---

## Exercicio 4 - Cozinha na Masmorra

### Pergunta

no Prato eu crio o Tempero dentro da classe e recebo o Monstro de fora. uma coisa e composicao e a outra e agregacao? como sei qual e qual?

### Resposta

Isso mesmo, sao os dois ao mesmo tempo, e a diferenca esta em quem cria o objeto.

Composicao: a classe cria o objeto interno com `new`. Ele so existe junto com ela.

Agregacao: a classe recebe o objeto pronto pelo construtor. Ele existe por conta propria.

```java
public class Prato {
    private Monstro monstro;  // agregacao: vem pronto
    private Tempero tempero;  // composicao: criado aqui dentro

    public Prato(String nome, Monstro monstro) {
        this.monstro = monstro;               // recebido de fora
        this.tempero = new Tempero("Sal", 2); // criado com new aqui
    }
}
```

A pergunta que resolve sempre: o objeto foi criado com `new` aqui dentro (composicao) ou chegou pronto pelo construtor (agregacao)?

### O que aprendi

Aprendi a diferenciar pela origem do objeto: o Tempero o Prato cria (composicao) e o Monstro ele recebe pronto (agregacao).

---

## Conclusao

As perguntas que fiz cobriram o que eu precisava pra fechar os 4 exercicios: classe abstrata com metodo abstrato, @Override e polimorfismo, diferenca entre classe abstrata e interface, HashMap barrando duplicata pela chave, e composicao vs agregacao. Os quatro codigos compilam e rodam.

Augusto Leite Del' Carlo Carneiro - Matricula 866 - Inatel
