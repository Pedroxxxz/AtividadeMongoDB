
use suporteTecnico


db.createCollection("chamados")



db.chamados.insertMany([

  {

    solicitante: "João Silva",

    local: "Recife - PE",

    tipoProblema: "Internet",

    descricao: "Sem conexão com a rede da empresa",

    prioridade: "Alta",

    data:  Date("2026-05-20"),

    status: "Pendente"

  },

  {

    solicitante: "Maria Oliveira",

    local: "Olinda - PE",

    tipoProblema: "Impressora",

    descricao: "Impressora não imprime documentos",

    prioridade: "Média",

    data:  Date("2026-05-18"),

    status: "Em andamento"

  },

  {

    solicitante: "Carlos Souza",

    local: "Jaboatão - PE",

    tipoProblema: "Computador",

    descricao: "Computador apresentando lentidão",

    prioridade: "Baixa",

    data: new Date("2026-05-15"),

    status: "Pendente"

  },

  {

    solicitante: "Ana Costa",

    local: "Recife - PE",

    tipoProblema: "Sistema",

    descricao: "Erro ao acessar o sistema interno",

    prioridade: "Alta",

    data:  Date("2026-05-16"),

    status: "Resolvido"

  },

  {

    solicitante: "Pedro Henrique",

    local: "Paulista - PE",

    tipoProblema: "Hardware",

    descricao: "Teclado parou de funcionar",

    prioridade: "Média",

    data:  Date("2026-05-19"),

    status: "Pendente"

  },

  {

    solicitante: "Fernanda Lima",

    local: "Camaragibe - PE",

    tipoProblema: "E-mail",

    descricao: "Não consegue enviar e-mails",

    prioridade: "Alta",

    data:  Date("2026-05-21"),

    status: "Pendente"

  }

])


db.chamados.find()



db.chamados.find({

  status: "Pendente"

})



db.chamados.find({

  prioridade: "Alta"

})



db.chamados.find({

  prioridade: "Média"

})



db.chamados.find({

  prioridade: "Baixa"

})



db.chamados.updateOne(

  { solicitante: "João Silva" },

  {

    $set: {

      status: "Resolvido"

    }

  }

)



db.chamados.deleteOne({

  solicitante: "Carlos Souza"

})


db.chamados.find().pretty()
