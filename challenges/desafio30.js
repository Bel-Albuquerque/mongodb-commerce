// 30 - Remova o campo `curtidas` do item `Big Mac`.

// Para isso, escreva no arquivo `desafio30.js` duas queries, **nesta ordem**:

// 1. Crie uma query que faça a remoção do campo `curtidas` do item `Big Mac`.

// 2. Crie uma query que retorne o `nome` e `curtidas` de todos os documentos.

db.produtos.updateOne({
  nome: "Big Mac",
}, {
  $unset: { curtidas: "" },
});

db.produtos.find({},
  { _id: 0, nome: 1, curtidas: 1 });
