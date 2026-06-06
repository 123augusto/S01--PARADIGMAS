-- Exercicio 4 - Casa de Banhos da Yubaba
-- Augusto Leite - Matricula 866

-- Tipo Servico com os campos nome, tipo e preco
data Servico = Servico
  { nome  :: String
  , tipo  :: String
  , preco :: Double
  }

-- StatusAtendimento como tipo soma
data StatusAtendimento = EmAndamento | Finalizado | Cancelado
  deriving (Eq)

-- Atendimento junta uma lista de servicos e um StatusAtendimento
data Atendimento = Atendimento
  { servicos          :: [Servico]
  , statusAtendimento :: StatusAtendimento
  }

-- totalServicos soma os precos usando map e sum
totalServicos :: [Servico] -> Double
totalServicos lista = sum (map preco lista)

-- valorFinalAtendimento usa guards: 0.0 se Cancelado, 25% de acrescimo
-- se houver mais de 3 servicos, e o total simples nos demais casos.
valorFinalAtendimento :: Atendimento -> Double
valorFinalAtendimento a
  | statusAtendimento a == Cancelado = 0.0
  | length (servicos a) > 3          = total * 1.25
  | otherwise                        = total
  where total = totalServicos (servicos a)

-- primeiroServico usa pattern matching na lista de servicos
primeiroServico :: Atendimento -> String
primeiroServico atendimento =
  case servicos atendimento of
    []    -> "Nenhum servico no atendimento"
    (s:_) -> nome s

-- main: dois atendimentos com servicos variados
main :: IO ()
main = do
  -- atendimento1 tem 4 servicos, entao leva o acrescimo de 25%
  let atendimento1 = Atendimento
        { servicos =
            [ Servico { nome = "Banho Relaxante", tipo = "Banho",     preco = 50.0 }
            , Servico { nome = "Massagem",        tipo = "Terapia",   preco = 80.0 }
            , Servico { nome = "Aromaterapia",    tipo = "Terapia",   preco = 40.0 }
            , Servico { nome = "Cha Especial",    tipo = "Cortesia",  preco = 20.0 }
            ]
        , statusAtendimento = Finalizado
        }

  -- atendimento2 tem 2 servicos, total simples
  let atendimento2 = Atendimento
        { servicos =
            [ Servico { nome = "Banho Rapido", tipo = "Banho",   preco = 30.0 }
            , Servico { nome = "Sabonete",     tipo = "Produto", preco = 15.0 }
            ]
        , statusAtendimento = EmAndamento
        }

  putStrLn "=== Casa de Banhos da Yubaba ==="
  putStrLn ("Atendimento 1 - primeiro servico: " ++ primeiroServico atendimento1)
  putStrLn ("Atendimento 1 - valor final: R$ " ++ show (valorFinalAtendimento atendimento1))
  putStrLn ""
  putStrLn ("Atendimento 2 - primeiro servico: " ++ primeiroServico atendimento2)
  putStrLn ("Atendimento 2 - valor final: R$ " ++ show (valorFinalAtendimento atendimento2))
