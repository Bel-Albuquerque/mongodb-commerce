// db.produtos.aggregate([
//   { $match: { ingredientes: "picles" } },
//   { $project: { 
//     _id: 0,
//     nome: 1,
//     ingredientes: 1,
//     valoresNutricionais: { $slice: ["$valoresNutricionais", 3] },
//     },
//   },
// ]);

db.produtos.find({
  ingredientes: "picles",
}, {
  _id: 0,
  valoresNutricionais: { $slice: ["$valoresNutricionais", 3] },
  nome: 1,
  ingredientes: 1,
});
