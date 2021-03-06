// 25 - Adicione o elemento `muito sódio` ao final do _array_ `tags` nos produtos em que o `percentual` de `sódio` seja maior ou igual a `40`.

// Para isso, escreva no arquivo `desafio25.js` duas queries, **nesta ordem**:

// 1. Crie uma query que faça a adição do elemento `muito sódio` ao final do _array_ `tags` nos produtos em que o `percentual` de `sódio` seja maior ou igual a `40`.

// 2. Crie uma query que retorne o `nome` e `tags` de todos os documentos.

db.produtos.updateMany({
  $and: [
    { "valoresNutricionais.tipo": "sódio" },
    { "valoresNutricionais.2.percentual": { $gt: 40 } },
  ],
}, {
  $push: {
    tags: {
      $each: ["muito sódio"],
    },
  },
});

db.produtos.find({},
  { _id: 0, nome: 1, tags: 1 });
