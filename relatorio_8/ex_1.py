# Exercicio 1 - Dark Souls (Personagem e Cavaleiro)
# Augusto Leite - Matricula 866

# 1. Criacao da classe base Personagem
class Personagem:
    # 3. Metodo __init__ para inicializar os atributos
    def __init__(self, vida: int, resistencia: int):
        # 2. Atributos "privados" usando a convencao de sublinhado (_)
        self._vida = vida
        self._resistencia = resistencia

    # 4. Propriedades (Getters e Setters) controlados para a vida
    @property
    def vida(self):
        return self._vida

    @vida.setter
    def vida(self, valor):
        # Controle simples: a vida nao pode ser menor que zero
        if valor < 0:
            self._vida = 0
        else:
            self._vida = valor

    # 7. Metodo __str__ para retornar a descricao formatada na classe base
    def __str__(self):
        return f"Personagem com {self._vida} de vida e {self._resistencia} de resistencia."


# 5. Classe filha Cavaleiro herdando de Personagem
class Cavaleiro(Personagem):
    def __init__(self, vida: int, resistencia: int, armadura_pesada: bool):
        # Chama o inicializador da classe base (Personagem)
        super().__init__(vida, resistencia)

        # 6. Atributo exclusivo da classe Cavaleiro
        self.armadura_pesada = armadura_pesada

    # 7. Metodo __str__ sobrescrito para a classe filha
    def __str__(self):
        status_armadura = "equipada" if self.armadura_pesada else "desequipada"
        return f"Cavaleiro com {self.vida} de vida, {self._resistencia} de resistencia e armadura pesada {status_armadura}."


# --- Testando o codigo ---
if __name__ == "__main__":
    # Testando o Personagem base
    hollow = Personagem(vida=50, resistencia=10)
    print(hollow)

    # Testando o setter com controle (nao deixa ficar negativo)
    hollow.vida = -20
    print(f"Vida apos receber muito dano: {hollow.vida}")

    # Testando o Cavaleiro
    solaire = Cavaleiro(vida=150, resistencia=40, armadura_pesada=True)
    print(solaire)
