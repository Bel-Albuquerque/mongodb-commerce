// 18 - Inclua `bacon` no final da lista de `ingredientes` dos sanduíches `Big Mac` e `Quarteirão com Queijo`.

// Para isso, escreva no arquivo `desafio18.js` duas queries, **nesta ordem**:

// 1. Crie uma query que faça a inclusão de `bacon` no final da lista de `ingredientes` dos sanduíches `Big Mac` e `Quarteirão com Queijo`.

// 2. Crie uma query que retorne o `nome` e `ingredientes` de todos os documentos.

db.produtos.updateMany({
  $or: [
    { nome: "Big Mac" },
    { nome: "Quarteirão com Queijo" },
  ],
}, {
  $push: { ingredientes: "bacon" },
});

db.produtos.find({},
  { _id: 0, ingredientes: 1, nome: 1 });
