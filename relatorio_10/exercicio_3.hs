-- Exercicio 3 - Casa de Shows
-- Augusto Leite - Matricula 866

-- Tipo Banda com os campos nome, genero e cache
data Banda = Banda
  { nome   :: String
  , genero :: String
  , cache  :: Double
  }

-- StatusEvento como tipo soma
data StatusEvento = Ativo | Encerrado | Cancelado
  deriving (Eq)

-- Evento junta uma lista de bandas e um StatusEvento
data Evento = Evento
  { bandas       :: [Banda]
  , statusEvento :: StatusEvento
  }

-- custoTotalEvento usa guards: 0.0 se Cancelado, senao soma os caches
-- e adiciona 20% de taxa de producao. O where guarda a soma dos caches.
custoTotalEvento :: Evento -> Double
custoTotalEvento e
  | statusEvento e == Cancelado = 0.0
  | otherwise                   = somaCaches * 1.2
  where somaCaches = sum (map cache (bandas e))

-- bandaAbertura pega o primeiro elemento da lista com pattern matching
bandaAbertura :: Evento -> String
bandaAbertura evento =
  case bandas evento of
    []    -> "Nenhuma banda no evento"
    (b:_) -> nome b

-- bandaEncerramento pega o ultimo elemento com last (tratando lista vazia)
bandaEncerramento :: Evento -> String
bandaEncerramento evento =
  case bandas evento of
    [] -> "Nenhuma banda no evento"
    bs -> nome (last bs)

-- main: tres eventos - um Ativo, um Encerrado e um Cancelado
main :: IO ()
main = do
  let evento1 = Evento
        { bandas =
            [ Banda { nome = "Os Abridores", genero = "Rock",  cache = 2000.0 }
            , Banda { nome = "Banda do Meio", genero = "Pop",   cache = 3500.0 }
            , Banda { nome = "Atracao Final", genero = "MPB",   cache = 5000.0 }
            ]
        , statusEvento = Ativo
        }

  let evento2 = Evento
        { bandas =
            [ Banda { nome = "Trio Encerrado", genero = "Jazz", cache = 4000.0 }
            , Banda { nome = "Quarteto Final", genero = "Blues", cache = 4500.0 }
            ]
        , statusEvento = Encerrado
        }

  let evento3 = Evento
        { bandas =
            [ Banda { nome = "Banda Cancelada", genero = "Rock", cache = 3000.0 }
            ]
        , statusEvento = Cancelado
        }

  putStrLn "=== Casa de Shows ==="
  exibirEvento "Evento 1 (Ativo)" evento1
  putStrLn ""
  exibirEvento "Evento 2 (Encerrado)" evento2
  putStrLn ""
  exibirEvento "Evento 3 (Cancelado)" evento3

-- funcao auxiliar pra nao repetir os putStrLn de cada evento
exibirEvento :: String -> Evento -> IO ()
exibirEvento titulo e = do
  putStrLn titulo
  putStrLn ("  Custo total: R$ " ++ show (custoTotalEvento e))
  putStrLn ("  Banda de abertura: " ++ bandaAbertura e)
  putStrLn ("  Banda de encerramento: " ++ bandaEncerramento e)
