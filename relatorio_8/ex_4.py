# Exercicio 4 - Cyberpunk (NetRunner e Faccao)
# Augusto Leite - Matricula 866

from abc import ABC, abstractmethod


# 1. Classe Interface base Cibernetico
# Usamos ABC para garantir que ela funcione como um contrato estrito
class Cibernetico(ABC):

    # 2. Metodo abstrato
    @abstractmethod
    def realizar_hack(self):
        pass


# 3. Classe Implante (Sera usada via Composicao)
class Implante:
    def __init__(self, custo: float, funcao: str):
        self.custo = custo
        self.funcao = funcao


# 4. Classe NetRunner que herda (implementa) Cibernetico
class NetRunner(Cibernetico):
    def __init__(self, nome: str, custo_implante: float, funcao_implante: str):
        self.nome = nome

        # COMPOSICAO: O Implante nasce e morre junto com o NetRunner.
        # Ele e instanciado aqui dentro.
        self.implante = Implante(custo_implante, funcao_implante)

    # Implementacao obrigatoria do metodo da interface
    def realizar_hack(self):
        print(f"[NetRunner: {self.nome}] Invasao iniciada usando '{self.implante.funcao}' (Custo: E${self.implante.custo:.2f}). Acesso concedido!")


# 5. Classe Faccao (Usa Agregacao)
class Faccao:
    # AGREGACAO: A Faccao recebe a lista de ciberneticos de fora.
    # Se a Faccao for destruida, os NetRunners continuam existindo.
    def __init__(self, nome: str, membros: list):
        self.nome = nome
        self.membros = membros

    def executar_protocolo_ataque(self):
        print(f"--- A Faccao '{self.nome}' ordenou um ataque cibernetico em massa! ---")
        if not self.membros:
            print("Nenhum membro disponivel para o ataque.")
            return

        for membro in self.membros:
            # Polimorfismo em acao: A Faccao nao precisa saber quem e o membro,
            # apenas que ele implementa a interface 'Cibernetico'.
            membro.realizar_hack()


# --- 6. Main ---
if __name__ == "__main__":
    # Criando instancias de NetRunners (objetos independentes)
    lucy = NetRunner(nome="Lucy", custo_implante=15000.0, funcao_implante="Monomolecular Wire")
    kiwi = NetRunner(nome="Kiwi", custo_implante=8000.0, funcao_implante="Optics Jammer")
    sasha = NetRunner(nome="Sasha", custo_implante=12500.0, funcao_implante="Cyberdeck Overclock")

    # Agregando os membros em uma Faccao
    lista_de_membros = [lucy, kiwi, sasha]
    edgerunners = Faccao(nome="Edgerunners", membros=lista_de_membros)

    # Demonstrando a Faccao mandando todos executarem a acao
    edgerunners.executar_protocolo_ataque()
