db.produtos.updateMany({
  $and: [
    { "valoresNutricionais.tipo": "sódio" },
    { "valoresNutricionais.2.percentual": { $lt: 40, $gt: 20 } },
  ],
}, {
  $push: {
    tags: {
      $each: ["contém sódio"],
    },
  },
});

db.produtos.find({},
  { _id: 0, nome: 1, tags: 1 });