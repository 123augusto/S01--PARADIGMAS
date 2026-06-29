-- Exercicio 2 - Lojas de Hyrule
-- Augusto Leite - Matricula 866

-- Tipo Item com os campos nome, categoria e preco
data Item = Item
  { nome      :: String
  , categoria :: String
  , preco     :: Double
  }

-- StatusCompra como tipo soma
data StatusCompra = Pendente | Concluida | Cancelada
  deriving (Eq)

-- Compra junta uma lista de itens e um StatusCompra
data Compra = Compra
  { itens        :: [Item]
  , statusCompra :: StatusCompra
  }

-- totalItens soma os precos usando map e sum
totalItens :: [Item] -> Double
totalItens lista = sum (map preco lista)

-- valorFinal usa guards: 0.0 se Cancelada, 10% de desconto se passar de 200,
-- e o total simples nos demais casos. O where evita repetir a soma.
valorFinal :: Compra -> Double
valorFinal c
  | statusCompra c == Cancelada = 0.0
  | total > 200                 = total * 0.9
  | otherwise                   = total
  where total = totalItens (itens c)

-- main: uma compra com pelo menos tres itens
main :: IO ()
main = do
  let compra = Compra
        { itens =
            [ Item { nome = "Escudo Hyliano", categoria = "Defesa", preco = 120.0 }
            , Item { nome = "Espada Mestra",  categoria = "Arma",   preco = 150.0 }
            , Item { nome = "Pocao de Vida",  categoria = "Item",   preco = 45.0 }
            ]
        , statusCompra = Concluida
        }

  putStrLn "=== Lojas de Hyrule ==="
  putStrLn ("Total dos itens: R$ " ++ show (totalItens (itens compra)))
  putStrLn ("Valor final (com desconto se houver): R$ " ++ show (valorFinal compra))
