// 19 - Remova o item `cebola` de todos os sanduíches.

// Para isso, escreva no arquivo `desafio19.js` duas queries, **nesta ordem**:

// 1. Crie uma query que faça a remoção do item `cebola` em todos os sanduíches.

// 2. Crie uma query que retorne o `nome` e `ingredientes` de todos os documentos.

db.produtos.updateMany({}, {
  $pull: { ingredientes: "cebola" },
});

db.produtos.find({},
  { _id: 0, ingredientes: 1, nome: 1 });
