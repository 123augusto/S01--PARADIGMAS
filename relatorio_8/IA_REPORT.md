# Relatorio de Uso de IA
## POO com Python

Aluno: Augusto Leite
Matricula: 866
Inatel

Modelo usado em todas as perguntas: Claude (claude-sonnet-4)

---

## Introducao

Esse relatorio mostra as perguntas que eu fiz pra IA enquanto fazia os exercicios 1 a 4 de POO com Python, com base no material do professor Pedro Henrique Ribeiro Dias. Pra cada exercicio coloquei a pergunta que mandei, a resposta que recebi e um comentario curto sobre o que aprendi.

---

## Exercicio 1 - Dark Souls (Personagem e Cavaleiro)

### Pergunta

como eu deixo a vida com um controle pra nunca ficar negativa? quero poder ler e alterar a vida, mas com uma regra.

### Resposta

Use uma property com getter e setter. O setter e onde voce coloca a regra:

```python
class Personagem:
    def __init__(self, vida, resistencia):
        self._vida = vida
        self._resistencia = resistencia

    @property
    def vida(self):
        return self._vida

    @vida.setter
    def vida(self, valor):
        self._vida = 0 if valor < 0 else valor
```

Com isso `personagem.vida` le o valor e `personagem.vida = -20` passa pela regra do setter, que trava em 0.

### O que aprendi

Aprendi a usar property e vida.setter pra ler e escrever com controle. Usei isso pra travar a vida do Personagem em 0, e o super().__init__ pra reaproveitar tudo na classe filha Cavaleiro.

---

## Exercicio 2 - Overwatch (Heroi, Tanque e Dano)

### Pergunta

como eu obrigo as classes filhas a implementarem o usar_ultimate()? se a filha nao fizer, era pra dar erro.

### Resposta

Use o modulo `abc`: a classe base herda de `ABC` e o metodo recebe o decorador `@abstractmethod`:

```python
from abc import ABC, abstractmethod

class Heroi(ABC):
    @abstractmethod
    def usar_ultimate(self):
        pass
```

Assim a classe Heroi vira abstrata e nao pode ser instanciada direto. Qualquer filha que nao implementar usar_ultimate() tambem nao pode ser criada, entao o erro aparece na hora de instanciar.

### O que aprendi

Aprendi a criar interface/contrato em Python com `ABC` e `@abstractmethod`. Foi o que forcou Tanque e Dano a terem o seu proprio usar_ultimate(), e quando percorri a lista com for, cada um chamou a sua versao (polimorfismo).

---

## Exercicio 3 - Persona 5 (Joker)

### Pergunta

no Joker eu preciso de uma arma que ele cria sozinho e de uma equipe que vem pronta de fora. qual a diferenca disso no codigo?

### Resposta

Sao os dois tipos de relacao entre classes.

Composicao: a arma e criada dentro do `__init__`, faz parte do Joker.

```python
self.arma = ArmaCorpoACorpo(nome_faca, dano_faca)  # criado aqui dentro
```

Agregacao: a equipe chega pronta como parametro, o Joker so usa.

```python
def __init__(self, nome_faca, dano_faca, equipe):
    self.equipe = equipe  # recebido pronto de fora
```

Resumo: o que a classe cria dentro dela e composicao; o que ela recebe pronto e agregacao.

### O que aprendi

Aprendi a diferenca pelo lugar onde o objeto nasce: a arma o Joker cria (composicao) e a equipe ele recebe pronta (agregacao). Depois foi so iterar a equipe com for pra mostrar os membros.

---

## Exercicio 4 - Cyberpunk (NetRunner e Faccao)

### Pergunta

como junto interface, composicao e agregacao no mesmo exercicio? o NetRunner tem que implementar um metodo abstrato e ter um implante dentro, e a Faccao recebe varios membros.

### Resposta

Cada parte usa um recurso:

```python
class Cibernetico(ABC):           # interface
    @abstractmethod
    def realizar_hack(self):
        pass

class NetRunner(Cibernetico):
    def __init__(self, nome, custo, funcao):
        self.nome = nome
        self.implante = Implante(custo, funcao)  # composicao: cria dentro
    def realizar_hack(self):
        print(f"{self.nome} hackeando com {self.implante.funcao}")

class Faccao:
    def __init__(self, nome, membros):
        self.membros = membros    # agregacao: recebe pronto
```

O NetRunner implementa o metodo abstrato (interface), cria o Implante dentro (composicao) e a Faccao recebe a lista de membros de fora (agregacao). No `for` da Faccao, cada membro executa o seu `realizar_hack()`.

### O que aprendi

Aprendi a juntar os tres conceitos num so exercicio: abstractmethod pro contrato, composicao pro Implante dentro do NetRunner e agregacao pros membros da Faccao. Foi o exercicio que amarrou tudo

Augusto Leite - Matricula 866 - Inatel
