// 14 - Crie uma query que retorne todos os lanches que possuem *picles* em seus ingredientes e mostre apenas os `3` primeiros itens contidos no array `valoresNutricionais`.

// Para isso, escreva no arquivo `desafio14.js` duas queries, **nesta ordem**:

// 1. Sua query deve retornar apenas os campos `nome`, `ingredientes` e `valoresNutricionais`.

db.produtos.find({
  ingredientes: "picles",
}, {
  _id: 0,
  valoresNutricionais: { $slice: ["$valoresNutricionais", 3] },
  nome: 1,
  ingredientes: 1,
});
