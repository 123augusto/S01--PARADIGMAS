-- Exercicio 1 - Cafe Leblanc
-- Augusto Leite - Matricula 866

-- Tipo Bebida com os campos nome, tipo e preco (tipo produto com data)
data Bebida = Bebida
  { nome  :: String
  , tipo  :: String
  , preco :: Double
  }

-- StatusPedido como tipo soma (construtores sem campos, separados por |)
data StatusPedido = Aberto | Entregue | Cancelado
  deriving (Eq)

-- Pedido junta uma lista de bebidas e um StatusPedido
data Pedido = Pedido
  { bebidas :: [Bebida]
  , status  :: StatusPedido
  }

-- valorTotalPedido usa guards: 0.0 se Cancelado, total simples nos demais casos
valorTotalPedido :: Pedido -> Double
valorTotalPedido p
  | status p == Cancelado = 0.0
  | otherwise             = sum (map preco (bebidas p))

-- primeiraBebida usa pattern matching na lista de bebidas
primeiraBebida :: Pedido -> String
primeiraBebida pedido =
  case bebidas pedido of
    []    -> "Nenhuma bebida no pedido"
    (b:_) -> nome b

-- main: dois pedidos, um Entregue e um Cancelado
main :: IO ()
main = do
  let pedido1 = Pedido
        { bebidas =
            [ Bebida { nome = "Cafe Expresso", tipo = "Quente", preco = 6.0 }
            , Bebida { nome = "Cappuccino",    tipo = "Quente", preco = 9.5 }
            , Bebida { nome = "Suco de Laranja", tipo = "Gelado", preco = 7.0 }
            ]
        , status = Entregue
        }

  let pedido2 = Pedido
        { bebidas =
            [ Bebida { nome = "Cha Verde", tipo = "Quente", preco = 5.0 }
            , Bebida { nome = "Agua",      tipo = "Gelado", preco = 3.0 }
            ]
        , status = Cancelado
        }

  putStrLn "=== Cafe Leblanc ==="
  putStrLn ("Pedido 1 - primeira bebida: " ++ primeiraBebida pedido1)
  putStrLn ("Pedido 1 - valor total: R$ " ++ show (valorTotalPedido pedido1))
  putStrLn ""
  putStrLn ("Pedido 2 - primeira bebida: " ++ primeiraBebida pedido2)
  putStrLn ("Pedido 2 - valor total: R$ " ++ show (valorTotalPedido pedido2))
