# Exercicio 3 - Persona 5 (Joker)
# Augusto Leite - Matricula 866

# 1. Classe para a Composicao
class ArmaCorpoACorpo:
    def __init__(self, nome: str, dano: int):
        self.nome = nome
        self.dano = dano


# 2. Classe para a Agregacao
class PhantomThieves:
    def __init__(self, nome: str, arma: str):
        self.nome = nome
        self.arma = arma


# 3. Classe do Protagonista
class Joker:
    # O construtor recebe os dados para criar a propria arma, mas recebe os membros ja prontos
    def __init__(self, nome_faca: str, dano_faca: int, equipe: list):
        self.nome = "Joker"

        # COMPOSICAO: O objeto ArmaCorpoACorpo e instanciado internamente.
        # Ele e "parte" do Joker.
        self.arma = ArmaCorpoACorpo(nome_faca, dano_faca)

        # AGREGACAO: A lista de PhantomThieves e injetada de fora.
        # Joker apenas usa esses objetos, mas nao controla o ciclo de vida deles.
        self.equipe = equipe

    # 4. Iterando e mostrando a equipe
    def mostrar_equipe(self):
        print(f"Lider: {self.nome} | Arma: {self.arma.nome} (Dano: {self.arma.dano})")
        print("-" * 40)
        print("Membros dos Phantom Thieves:")

        if not self.equipe:
            print("A equipe esta vazia no momento.")
            return

        for membro in self.equipe:
            print(f"-> {membro.nome} (Arma: {membro.arma})")
        print("-" * 40)


# --- Testando o codigo ---
if __name__ == "__main__":
    # Criando instancias independentes dos membros (Eles existem por si so)
    ryuji = PhantomThieves("Ryuji Sakamoto", "Bastao de Cano")
    ann = PhantomThieves("Ann Takamaki", "Chicote")
    morgana = PhantomThieves("Morgana", "Espada Curta")

    # Agrupando em uma lista
    membros_da_equipe = [ryuji, ann, morgana]

    # Criando o Joker:
    # Ele criara sua propria "Faca de Combate" (Composicao)
    # E recebera a lista de membros ja criados (Agregacao)
    joker = Joker(nome_faca="Faca de Sobrevivencia", dano_faca=25, equipe=membros_da_equipe)

    # Chamando o metodo para imprimir os dados
    joker.mostrar_equipe()
