# Exercicio 2 - Overwatch (Heroi, Tanque e Dano)
# Augusto Leite - Matricula 866

from abc import ABC, abstractmethod


# 1. Classe base Heroi (herdando de ABC para se tornar uma classe abstrata)
class Heroi(ABC):
    def __init__(self, nome: str, funcao: str):
        self.nome = nome
        self.funcao = funcao

    # 2. Metodo usar_ultimate forcando a implementacao nas classes filhas
    @abstractmethod
    def usar_ultimate(self):
        # Se uma classe filha nao sobrescrever este metodo, o Python gerara um erro.
        pass


# 3. Classe filha Tanque herdando de Heroi
class Tanque(Heroi):
    def __init__(self, nome: str):
        # Chama o __init__ da classe base ja fixando a funcao como "Tanque"
        super().__init__(nome, "Tanque")

    # 4. Sobrescrevendo a acao especifica do Tanque
    def usar_ultimate(self):
        print(f"[{self.funcao}] {self.nome} usa o Abalo Terrestre: Derruba e atordoa todos os inimigos a frente!")


# 3. Classe filha Dano herdando de Heroi
class Dano(Heroi):
    def __init__(self, nome: str):
        super().__init__(nome, "Dano")

    # 4. Sobrescrevendo a acao especifica do Dano
    def usar_ultimate(self):
        print(f"[{self.funcao}] {self.nome} usa o Desabrochar da Morte: Causa dano massivo em area girando com suas armas!")


# --- Main ---
if __name__ == "__main__":
    # 5. Criando uma lista e adicionando instancias de Tanque e Dano
    reinhardt = Tanque("Reinhardt")
    reaper = Dano("Reaper")

    lista_de_herois = [reinhardt, reaper]
    print("--- Fogo Livre! Usando Ultimates ---")

    # 6. Percorrendo a lista e chamando o metodo usar_ultimate()
    for heroi in lista_de_herois:
        # Aqui a magica do Polimorfismo acontece: o Python sabe qual versao
        # do metodo chamar dependendo do tipo do objeto na iteracao atual.
        heroi.usar_ultimate()
