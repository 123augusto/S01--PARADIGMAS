# IA_REPORT.md

## 1. Identificação

- **Nome completo:** Augusto Leite Del' Carlo Carneiro
- **Matrícula:** 866
- **Disciplina:** POO com Java — Inatel (Prof. Pedro Henrique Ribeiro Dias)

---

## 2. Histórico de Prompts

- **Modelo utilizado:** Claude Opus 4.8 (Anthropic)
- **Interface:** aplicativo de chat da Claude, com ambiente de execução de código (Java 21) habilitado para compilar e testar as soluções.
- **Quantidade de prompts enviados:** 1

### Prompt 1 (íntegra da mensagem enviada)

> você irá fazer um exercício que eu fiz e nao consegui finalizar de um relatório e irá me ajudar desta forma:
> Para validar a atividade, é obrigatório incluir um arquivo chamado IA_REPORT.md dentro da pasta de resolução dos exercícios, contendo:
>
> *
>
> * Identificação: Nome completo e matrícula.
> * Histórico de Prompts: Indicações detalhadas sobre o modelo utilizado e a íntegra de todos os prompts enviados (a mensagem inteira deve ser copiada para o arquivo).
> * Respostas Obtidas: A resposta textual/código que o modelo retornou para cada prompt.
> * Relatório de Satisfação e Aprendizado: Não envie apenas um "foi bom" ou "foi ruim". Escreva um relatório crítico detalhando:
>    * Como a resposta ajudou (ou falhou em ajudar) na solução do problema.
>    * De que forma ela solucionou a sua dúvida.
>    * O que você aprendeu com aquele retorno para aplicar em problemas futuros.
>
> Agora eu irei te dar as informações necessárias para construir e me auxiliar na atividade.
>
> o pdf deve ser usado para fazer os exercícios de 1 a 4(lembrando que o enunciado do exercício 1 só acaba logo antes de começar o exercício 2. Não separe os enunciados por ter 2 exercícios 1, ok? seguindo o seu enunciado e o pdf da teoria (documento enviado) à risca, faça o que eu te pedi acima.
>
> *(Anexo enviado junto ao prompt: `aula_poo_java.pdf` — slides de teoria de POO com Java e os enunciados dos 4 exercícios.)*
fiquei com algumas dúvidas ao fazer o exercício e sobre a teoria. Responda como se fosse um aluno:
Onde entra o `@Override` e por que ele importa?
Qual a diferença prática entre classe abstrata e interface?
Como o `HashMap` evita duplicatas?

---

## 3. Respostas Obtidas

O modelo resolveu os 4 exercícios em Java, organizando **cada classe em seu próprio arquivo `.java`** (convenção padrão da linguagem para classes públicas), com uma pasta por exercício. Em seguida **compilou (`javac`) e executou (`java Main`) cada exercício** no ambiente, confirmando que tudo roda sem erros. Abaixo está o código retornado para cada exercício e a respectiva saída de execução.

### Exercício 1 — Castelo Animado do Howl

Estrutura: classe abstrata `Personagem`, herança em `Mago`, classe simples `Divisao` e `CasteloAnimado` por **agregação** (recebe o `ArrayList<Divisao>` pronto no construtor).

**`Personagem.java`**
```java
public abstract class Personagem {
    private String nome;
    private int idade;

    public Personagem(String nome, int idade) {
        this.nome = nome;
        this.idade = idade;
    }

    public String getNome() { return nome; }
    public int getIdade() { return idade; }
    public void setNome(String nome) { this.nome = nome; }

    public abstract void apresentar();
}
```

**`Mago.java`**
```java
public class Mago extends Personagem {
    private String habilidadeMagica;

    public Mago(String nome, int idade, String habilidadeMagica) {
        super(nome, idade);
        this.habilidadeMagica = habilidadeMagica;
    }

    @Override
    public void apresentar() {
        System.out.println("Sou o mago " + getNome() + ", tenho " + getIdade()
                + " anos e domino a magia de " + habilidadeMagica + ".");
    }
}
```

**`Divisao.java`**
```java
public class Divisao {
    private String nome;
    private String funcao;

    public Divisao(String nome, String funcao) {
        this.nome = nome;
        this.funcao = funcao;
    }

    public String getNome() { return nome; }
    public String getFuncao() { return funcao; }
}
```

**`CasteloAnimado.java`** (agregação)
```java
import java.util.ArrayList;

public class CasteloAnimado {
    private ArrayList<Divisao> divisoes;

    public CasteloAnimado(ArrayList<Divisao> divisoes) {
        this.divisoes = divisoes; // recebe pronto
    }

    public void adicionarDivisao(Divisao divisao) {
        divisoes.add(divisao);
    }

    public void listarDivisoes() {
        System.out.println("Comodos do Castelo Animado de Howl:");
        for (Divisao divisao : divisoes) {
            System.out.println("- " + divisao.getNome() + " (" + divisao.getFuncao() + ")");
        }
    }
}
```

**`Main.java`**
```java
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        Mago howl = new Mago("Howl", 27, "transformacao em passaro");
        howl.apresentar();

        System.out.println();

        ArrayList<Divisao> divisoes = new ArrayList<>();
        divisoes.add(new Divisao("Quarto de Howl", "Descanso"));
        divisoes.add(new Divisao("Laboratorio", "Feiticos"));

        CasteloAnimado castelo = new CasteloAnimado(divisoes);
        castelo.adicionarDivisao(new Divisao("Banheiro", "Higiene"));
        castelo.listarDivisoes();
    }
}
```

**Saída da execução:**
```
Sou o mago Howl, tenho 27 anos e domino a magia de transformacao em passaro.

Comodos do Castelo Animado de Howl:
- Quarto de Howl (Descanso)
- Laboratorio (Feiticos)
- Banheiro (Higiene)
```

---

### Exercício 2 — Café Leblanc

Estrutura: `Cafe` (base), `CafeGourmet` (herança + sobrescrita com `@Override`), `Menu` por **composição** (cria o próprio `ArrayList<Cafe>`) e `CafeteriaLeblanc` por **composição** (cria o próprio `Menu`).

**`Cafe.java`**
```java
public class Cafe {
    private String nome;
    private double preco;

    public Cafe(String nome, double preco) {
        this.nome = nome;
        this.preco = preco;
    }

    public String getNome() { return nome; }
    public double getPreco() { return preco; }
    public double calcularPrecoFinal() { return preco; }
}
```

**`CafeGourmet.java`**
```java
public class CafeGourmet extends Cafe {
    private double bonusAroma;

    public CafeGourmet(String nome, double preco, double bonusAroma) {
        super(nome, preco);
        this.bonusAroma = bonusAroma;
    }

    @Override
    public double calcularPrecoFinal() {
        return getPreco() + bonusAroma;
    }
}
```

**`Menu.java`** (composição)
```java
import java.util.ArrayList;

public class Menu {
    private ArrayList<Cafe> cafes;

    public Menu() {
        this.cafes = new ArrayList<>();
    }

    public void adicionarCafe(Cafe cafe) {
        cafes.add(cafe);
    }

    public void exibirMenu() {
        System.out.println("=== Cardapio do Leblanc ===");
        for (Cafe cafe : cafes) {
            System.out.printf("%s - R$ %.2f%n", cafe.getNome(), cafe.calcularPrecoFinal());
        }
    }
}
```

**`CafeteriaLeblanc.java`** (composição)
```java
public class CafeteriaLeblanc {
    private Menu menu;

    public CafeteriaLeblanc() {
        this.menu = new Menu();
    }

    public void adicionarCafe(Cafe cafe) {
        menu.adicionarCafe(cafe);
    }

    public void abrirCafeteria() {
        System.out.println("Bem-vindo ao Leblanc. Sente-se e fique a vontade.\n");
        menu.exibirMenu();
    }
}
```

**`Main.java`**
```java
public class Main {
    public static void main(String[] args) {
        Cafe coado = new Cafe("Cafe Coado", 8.0);
        Cafe espresso = new Cafe("Espresso", 10.0);
        CafeGourmet gourmet = new CafeGourmet("Blend Especial do Sojiro", 15.0, 7.5);

        CafeteriaLeblanc leblanc = new CafeteriaLeblanc();
        leblanc.adicionarCafe(coado);
        leblanc.adicionarCafe(espresso);
        leblanc.adicionarCafe(gourmet);

        leblanc.abrirCafeteria();
    }
}
```

**Saída da execução:**
```
Bem-vindo ao Leblanc. Sente-se e fique a vontade.

=== Cardapio do Leblanc ===
Cafe Coado - R$ 8.00
Espresso - R$ 10.00
Blend Especial do Sojiro - R$ 22.50
```
> Note como `22.50 = 15.00 + 7.50`: o `CafeGourmet` somou o `bonusAroma`. Isso é **polimorfismo** — o mesmo `calcularPrecoFinal()` se comporta diferente conforme o tipo real do objeto.

---

### Exercício 3 — Registro de Aliens e Youkai

Estrutura: interface `Rastreavel`, `Poder` (componente por composição), `Entidade` (base), `Alien`/`Youkai` (herança + `implements` + composição) e `RegistroOculto` com `HashMap<String, Entidade>` que bloqueia duplicatas.

**`Rastreavel.java`**
```java
public interface Rastreavel {
    String obterCoordenadas();
}
```

**`Poder.java`**
```java
public class Poder {
    private String nome;
    private int intensidade;

    public Poder(String nome, int intensidade) {
        this.nome = nome;
        this.intensidade = intensidade;
    }

    public String getNome() { return nome; }
    public int getIntensidade() { return intensidade; }
}
```

**`Entidade.java`**
```java
public class Entidade {
    private String nome;

    public Entidade(String nome) {
        this.nome = nome;
    }

    public String getNome() { return nome; }
}
```

**`Alien.java`**
```java
public class Alien extends Entidade implements Rastreavel {
    private Poder poder;

    public Alien(String nome) {
        super(nome);
        this.poder = new Poder("Raio Cosmico", 90);
    }

    @Override
    public String obterCoordenadas() {
        return "Orbita baixa terrestre [LAT -22.3 / LON -45.7] | Poder: "
                + poder.getNome() + " (intensidade " + poder.getIntensidade() + ")";
    }
}
```

**`Youkai.java`**
```java
public class Youkai extends Entidade implements Rastreavel {
    private Poder poder;

    public Youkai(String nome) {
        super(nome);
        this.poder = new Poder("Ilusao Espiritual", 70);
    }

    @Override
    public String obterCoordenadas() {
        return "Floresta antiga [LAT -23.5 / LON -46.6] | Poder: "
                + poder.getNome() + " (intensidade " + poder.getIntensidade() + ")";
    }
}
```

**`RegistroOculto.java`**
```java
import java.util.HashMap;
import java.util.Map;

public class RegistroOculto {
    private HashMap<String, Entidade> entidades;

    public RegistroOculto() {
        this.entidades = new HashMap<>();
    }

    public void registrarEntidade(Entidade entidade) {
        if (entidades.containsKey(entidade.getNome())) {
            System.out.println("AVISO: '" + entidade.getNome()
                    + "' ja esta registrado. Registro duplicado ignorado.");
            return;
        }
        entidades.put(entidade.getNome(), entidade);
        System.out.println("'" + entidade.getNome() + "' registrado com sucesso.");
    }

    public void listarEntidades() {
        System.out.println("\n=== Entidades Rastreadas ===");
        for (Map.Entry<String, Entidade> entrada : entidades.entrySet()) {
            Entidade entidade = entrada.getValue();
            String coordenadas = ((Rastreavel) entidade).obterCoordenadas();
            System.out.println(entidade.getNome() + " -> " + coordenadas);
        }
    }
}
```

**`Main.java`**
```java
public class Main {
    public static void main(String[] args) {
        Alien alien1 = new Alien("Zorblax");
        Alien alien2 = new Alien("Krill");
        Youkai youkai1 = new Youkai("Kitsune");
        Youkai youkai2 = new Youkai("Tengu");

        RegistroOculto registro = new RegistroOculto();
        registro.registrarEntidade(alien1);
        registro.registrarEntidade(alien2);
        registro.registrarEntidade(youkai1);
        registro.registrarEntidade(youkai2);

        registro.registrarEntidade(alien1); // duplicado -> bloqueado

        registro.listarEntidades();
    }
}
```

**Saída da execução:**
```
'Zorblax' registrado com sucesso.
'Krill' registrado com sucesso.
'Kitsune' registrado com sucesso.
'Tengu' registrado com sucesso.
AVISO: 'Zorblax' ja esta registrado. Registro duplicado ignorado.

=== Entidades Rastreadas ===
Zorblax -> Orbita baixa terrestre [LAT -22.3 / LON -45.7] | Poder: Raio Cosmico (intensidade 90)
Krill -> Orbita baixa terrestre [LAT -22.3 / LON -45.7] | Poder: Raio Cosmico (intensidade 90)
Tengu -> Floresta antiga [LAT -23.5 / LON -46.6] | Poder: Ilusao Espiritual (intensidade 70)
Kitsune -> Floresta antiga [LAT -23.5 / LON -46.6] | Poder: Ilusao Espiritual (intensidade 70)
```
> Dois detalhes importantes na saída: (1) o registro duplicado de `Zorblax` foi bloqueado pelo `HashMap`; (2) a listagem saiu **fora da ordem de inserção** (`Tengu` antes de `Kitsune`) — exatamente a característica do `HashMap` descrita na teoria do PDF (a ordem interna é baseada no hash code, não na inserção).

---

### Exercício 4 — Cozinha na Masmorra (Dungeon Meshi)

Estrutura: classe abstrata `Monstro`, `Lagosta`/`Cogumelo` (herança + sobrescrita), `Tempero` (componente por composição) e `Prato`, que mistura **agregação** (recebe o `Monstro` pronto) com **composição** (cria o próprio `Tempero`).

**`Monstro.java`**
```java
public abstract class Monstro {
    private String nome;

    public Monstro(String nome) {
        this.nome = nome;
    }

    public String getNome() { return nome; }

    public abstract void virarPrato();
}
```

**`Lagosta.java`**
```java
public class Lagosta extends Monstro {
    public Lagosta(String nome) {
        super(nome);
    }

    @Override
    public void virarPrato() {
        System.out.println("Senshi cozinha a " + getNome()
                + " no vapor com ervas da masmorra ate a carne ficar suculenta.");
    }
}
```

**`Cogumelo.java`**
```java
public class Cogumelo extends Monstro {
    public Cogumelo(String nome) {
        super(nome);
    }

    @Override
    public void virarPrato() {
        System.out.println("Senshi refoga o " + getNome()
                + " lentamente, realcando o sabor terroso em um ensopado.");
    }
}
```

**`Tempero.java`**
```java
public class Tempero {
    private String nome;
    private int quantidade;

    public Tempero(String nome, int quantidade) {
        this.nome = nome;
        this.quantidade = quantidade;
    }

    public String getNome() { return nome; }
    public int getQuantidade() { return quantidade; }
}
```

**`Prato.java`** (agregação de `Monstro` + composição de `Tempero`)
```java
public class Prato {
    private String nome;
    private Monstro monstro; // agregacao
    private Tempero tempero; // composicao

    public Prato(String nome, Monstro monstro) {
        this.nome = nome;
        this.monstro = monstro;
        this.tempero = new Tempero("Sal das Profundezas", 2);
    }

    public void servir() {
        System.out.println("=== Servindo: " + nome + " ===");
        monstro.virarPrato();
        System.out.println("Tempero usado: " + tempero.getNome()
                + " (" + tempero.getQuantidade() + " pitadas)\n");
    }
}
```

**`Main.java`**
```java
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        Lagosta lagosta = new Lagosta("Lagosta Gigante");
        Cogumelo cogumelo = new Cogumelo("Cogumelo Andante");

        Prato pratoLagosta = new Prato("Lagosta ao Vapor", lagosta);
        Prato pratoCogumelo = new Prato("Ensopado de Cogumelo", cogumelo);

        pratoLagosta.servir();
        pratoCogumelo.servir();

        ArrayList<Prato> cardapio = new ArrayList<>();
        cardapio.add(pratoLagosta);
        cardapio.add(pratoCogumelo);

        System.out.println("--- Cardapio completo da expedicao ---");
        for (Prato prato : cardapio) {
            prato.servir();
        }
    }
}
```

**Saída da execução:**
```
=== Servindo: Lagosta ao Vapor ===
Senshi cozinha a Lagosta Gigante no vapor com ervas da masmorra ate a carne ficar suculenta.
Tempero usado: Sal das Profundezas (2 pitadas)

=== Servindo: Ensopado de Cogumelo ===
Senshi refoga o Cogumelo Andante lentamente, realcando o sabor terroso em um ensopado.
Tempero usado: Sal das Profundezas (2 pitadas)

--- Cardapio completo da expedicao ---
=== Servindo: Lagosta ao Vapor ===
Senshi cozinha a Lagosta Gigante no vapor com ervas da masmorra ate a carne ficar suculenta.
Tempero usado: Sal das Profundezas (2 pitadas)

=== Servindo: Ensopado de Cogumelo ===
Senshi refoga o Cogumelo Andante lentamente, realcando o sabor terroso em um ensopado.
Tempero usado: Sal das Profundezas (2 pitadas)


### Como a resposta ajudou na solução do problema

A maior contribuição n foi "escrever o código por mim", e sim traduzir os enunciados para a estrutura correta de classes. O ponto mais delicado dos exercícios era distinguir as coisas, pq o PDF da teoria define isso em uma frase só ("Composição -> dependência total / Agregação -> ligação fraca"). Na prática, a diferença apareceu na forma como cada classe obtém seus objetos internos:

- Agregação: o objeto chega pronto pelo construtor (ex.: "CasteloAnimado(ArrayList<Divisao>)" no Ex. 1, e `Prato(String, Monstro)` no Ex. 4).
- Composição : o objeto foi criado com "new" dentro da própria classe (ex.: `Menu` criando seu `ArrayList`, `CafeteriaLeblanc" criando seu "Menu",  Alien criando seu Poder).

Ver os dois padrões lado a lado, com o "new" em um lugar e o parâmetro de construtor no outro, deixou a regra concreta de um jeito que a definição teórica sozinha n deixava.


### De que forma solucionou minhas duidas

Minhas dúvidas eram três, e cada uma foi resolvida por um detalhe específico do código:

1. **"Onde entra o `@Override` e por que ele importa?"** — Ficou claro nos Ex. 2 (`calcularPrecoFinal`) e Ex. 4 (`virarPrato`): o método existe na classe pai/abstrata e é reescrito na filha. A anotação `@Override` não é decorativa — ela faz o compilador verificar se a assinatura bate mesmo com o método sobrescrito.
2. **"Qual a diferença prática entre classe abstrata e interface?"** — Os exercícios usaram as duas coisas e isso contrastou bem com a teoria: a classe abstrata (`Personagem`, `Monstro`) carrega estado/atributos e obriga a implementar só o que é `abstract`; a interface (`Rastreavel`) é só um contrato sem nenhuma implementação. O Ex. 3 ainda combinou `extends Entidade` **com** `implements Rastreavel` na mesma classe, mostrando que herança e contrato de interface coexistem.
3. **"Como o `HashMap` evita duplicatas?"** — O `registrarEntidade` usa `containsKey` antes de `put`. Entender que a **chave** (o nome) é o que garante unicidade, e não o objeto inteiro, esclareceu por que o enunciado pedia o nome como chave.

### O que aprendi para aplicar em problemas futuros

- **Identificar o relacionamento pela origem do objeto.** Sempre que eu vir uma classe que "tem" outra, a pergunta é: o objeto foi criado aqui dentro (`new`) ou veio de fora pelo construtor? Essa única pergunta decide composição vs. agregação e vale para qualquer projeto, não só para estes exercícios.
- **Rodar o código sempre, não confiar na leitura.** O comportamento de ordenação do `HashMap` me ensinou que estruturas de dados têm garantias específicas (ordem, unicidade) que só ficam evidentes executando. Para futuro: se a ordem importar, eu usaria `LinkedHashMap`/`ArrayList`; se a unicidade importar, `HashSet`/`HashMap`.
- **Programar contra abstrações.** Guardar tudo como `ArrayList<Cafe>` ou `HashMap<String, Entidade>` (tipo da base/interface) e deixar o polimorfismo resolver o comportamento específico em tempo de execução é um padrão que torna o código extensível — dá para adicionar um novo tipo de café ou de entidade sem mexer no `Menu` ou no `RegistroOculto`.
- **Atenção ao detalhe do `cast` no Ex. 3.** Como o `HashMap` guarda `Entidade` (que não conhece `obterCoordenadas`), foi preciso fazer `((Rastreavel) entidade)`. Isso me lembrou que o tipo declarado da coleção limita os métodos visíveis, e que herança e interface são dimensões separadas que às vezes precisam ser reconciliadas com cast.

### Avaliação crítica (pontos de atenção)

Nem tudo foi perfeito e vale registrar:

- O modelo **assumiu valores de exemplo** (idades, preços, coordenadas, nomes dos poderes) que os enunciados não especificavam. Está correto, mas são escolhas minhas a fazer — convém revisar se quero personalizar.
- No Ex. 2, o enunciado pedia para adicionar cafés "através da CafeteriaLeblanc", mas só mandava implementar `abrirCafeteria`. O modelo **acrescentou um método `adicionarCafe` na `CafeteriaLeblanc`** que leva  ao menu interno. Foi uma decisao de projeto razoável para cumprir o enunciado, mas é uma adiçao interpretativa que eu deveria conseguir justificar se perguntado.
- Faltou pedir explicitamente, mas seria útil ter **diagramas UML** ou testes unitários — o modelo entregou código funcional, mas a documentação de design fica por minha conta.

No geral, a interação foi produtiva como **ferramenta de estudo**: ela acelerou a parte mecânica e, principalmente, tornou visíveis conceitos (composição/agregação, ordem do `HashMap`, papel do `@Override`) que eu entendia só superficialmente pela teoria. O ganho real foi de compreensão, não apenas de entrega.
