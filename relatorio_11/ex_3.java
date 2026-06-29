// Exercicio 3 - Registro de Aliens e Youkai
// Augusto Leite Del' Carlo Carneiro - Matricula 866
// Todas as classes em um unico arquivo (apenas a classe com main e' public).

import java.util.HashMap;
import java.util.Map;

// Interface (contrato)
interface Rastreavel {
    String obterCoordenadas();
}

// Composicao: componente que nasce dentro da entidade
class Poder {
    private String nome;
    private int intensidade;

    public Poder(String nome, int intensidade) {
        this.nome = nome;
        this.intensidade = intensidade;
    }

    public String getNome() { return nome; }
    public int getIntensidade() { return intensidade; }
}

// Classe base
class Entidade {
    private String nome;

    public Entidade(String nome) {
        this.nome = nome;
    }

    public String getNome() { return nome; }
}

// Heranca + interface + composicao
class Alien extends Entidade implements Rastreavel {
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

class Youkai extends Entidade implements Rastreavel {
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

// Agregacao com HashMap: bloqueia duplicatas pela chave (nome)
class RegistroOculto {
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

public class Exercicio3 {
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
