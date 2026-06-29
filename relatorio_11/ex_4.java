// Exercicio 4 - Cozinha na Masmorra (Dungeon Meshi)
// Augusto Leite Del' Carlo Carneiro - Matricula 866
// Todas as classes em um unico arquivo (apenas a classe com main e' public).

import java.util.ArrayList;

// Classe abstrata
abstract class Monstro {
    private String nome;

    public Monstro(String nome) {
        this.nome = nome;
    }

    public String getNome() { return nome; }

    public abstract void virarPrato();
}

// Heranca e sobrescrita
class Lagosta extends Monstro {
    public Lagosta(String nome) {
        super(nome);
    }

    @Override
    public void virarPrato() {
        System.out.println("Senshi cozinha a " + getNome()
                + " no vapor com ervas da masmorra ate a carne ficar suculenta.");
    }
}

class Cogumelo extends Monstro {
    public Cogumelo(String nome) {
        super(nome);
    }

    @Override
    public void virarPrato() {
        System.out.println("Senshi refoga o " + getNome()
                + " lentamente, realcando o sabor terroso em um ensopado.");
    }
}

// Composicao: instanciado dentro de cada Prato
class Tempero {
    private String nome;
    private int quantidade;

    public Tempero(String nome, int quantidade) {
        this.nome = nome;
        this.quantidade = quantidade;
    }

    public String getNome() { return nome; }
    public int getQuantidade() { return quantidade; }
}

// Agregacao (recebe Monstro pronto) + composicao (cria Tempero)
class Prato {
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

public class Exercicio4 {
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
