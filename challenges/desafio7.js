// 7 - Retorne o `nome` e `vendidos` dos lanches que tenham sido `vendidos` uma quantidade diferente de `50` e que o campo `tags` não exista.

db.produtos.find({
  vendidos: { $ne: 10 },
  tags: { $exists: 0 },
},
  { nome: 1, vendidos: 1, _id: 0 });
