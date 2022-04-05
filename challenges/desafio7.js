db.produtos.find({
  vendidos: { $ne: 10 },
  tags: { $exists: 0 },
},
  { nome: 1, vendidos: 1, _id: 0 });