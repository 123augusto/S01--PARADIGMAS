// Exercicio 2 - Cafe Leblanc
// Augusto Leite Del' Carlo Carneiro - Matricula 866
// Todas as classes em um unico arquivo (apenas a classe com main e' public).

import java.util.ArrayList;

// Classe base
class Cafe {
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

// Heranca e sobrescrita com @Override
class CafeGourmet extends Cafe {
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

// Composicao: cria o proprio ArrayList<Cafe>
class Menu {
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

// Composicao: cria o proprio Menu
class CafeteriaLeblanc {
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

public class Exercicio2 {
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
