#language: pt  
Funcionalidade: Carrinho de compras

Cenário: Adicionar um item no carrinho (deslogado)
    Dado que estou "deslogado"
    Quando pesquiso por "iphone 7"
    E ordeno por "Maior preço"
    # E adiciono o primeiro item da lista que tenha "iphone 7" no nome
    # Então verifico se o item foi adicionado na lista de compras

@excluded
Cenário: Adicionar um item no carrinho (logado)
    Dado que estou "logado"
    # Quando pesquiso por "iphone 7"
    # E ordeno por "Maior preço"
    # E adiciono o primeiro item da lista que tenha "iphone 7" no nome
    # Então verifico se o item foi adicionado na lista de compras

@excluded
Cenário: Adicionar um item no carrinho
    Dado que estou "de férias"
