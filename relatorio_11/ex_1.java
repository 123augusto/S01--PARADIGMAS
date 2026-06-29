// Exercicio 1 - Castelo Animado do Howl
// Augusto Leite Del' Carlo Carneiro - Matricula 866
// Todas as classes em um unico arquivo (apenas a classe com main e' public).

import java.util.ArrayList;

// Classe abstrata
abstract class Personagem {
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

// Heranca e sobrescrita
class Mago extends Personagem {
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

// Molde simples
class Divisao {
    private String nome;
    private String funcao;

    public Divisao(String nome, String funcao) {
        this.nome = nome;
        this.funcao = funcao;
    }

    public String getNome() { return nome; }
    public String getFuncao() { return funcao; }
}

// Agregacao: recebe o ArrayList<Divisao> pronto no construtor
class CasteloAnimado {
    private ArrayList<Divisao> divisoes;

    public CasteloAnimado(ArrayList<Divisao> divisoes) {
        this.divisoes = divisoes;
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

public class Exercicio1 {
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
