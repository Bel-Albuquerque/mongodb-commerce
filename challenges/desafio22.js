// 22 - Adicione a quantidade de vendas dos sanduíches por dia da semana.

// Para isso, escreva no arquivo `desafio22.js` quatro queries, **nesta ordem**:

// 1. Crie uma query que inclua um campo `vendasPorDia` em todos os sanduíches. O valor deste campo deverá ser um _array_ com sete posições. Cada uma delas representará um dia da semana, e cada posição iniciará em `0`. O _array_ deve se parecer como abaixo:
//    ```json
//    "vendasPorDia": [0, 0, 0, 0, 0, 0, 0]
//    ```

// - O primeiro item desse _array_ representa as vendas no **domingo**, o segundo item representa as vendas na **segunda-feira**, e assim até chegar ao último item, que representa as vendas no **sábado**.

// 2. Crie uma query que incremente as vendas de `Big Mac` às **quartas-feiras** em `60`.

// 3. Crie uma query que incremente as vendas de todos os sanduíches de carne do tipo `bovino` aos **sábados** em `120`.

// 4. Crie uma query que retorne o `nome` e `vendasPorDia` de todos os documentos.

db.produtos.updateMany({}, {
  $push: { vendasPorDia: { $each: [0, 0, 0, 0, 0, 0, 0] } },
});

db.produtos.updateOne({
  nome: "Big Mac",
},
  { $inc: { "vendasPorDia.3": 60 } });

db.produtos.updateMany({
  tags: "bovino",
}, { $inc: { "vendasPorDia.6": 120 } });

db.produtos.find({},
  { _id: 0, vendasPorDia: 1, nome: 1 });
