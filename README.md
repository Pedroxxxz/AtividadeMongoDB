# 📞 Sistema de Registro de Chamados - MongoDB

Projeto simples utilizando MongoDB para registrar atendimentos de suporte técnico.

---

##  Tecnologias

- MongoDB


---

##  Funcionalidades

- Criar banco de dados
- Criar coleção de chamados
- Inserir chamados
- Buscar chamados
- Filtrar chamados pendentes
- Filtrar por prioridade
- Atualizar status de chamados
- Excluir chamados incorretos

---

## Estrutura dos Dados

Cada chamado possui:

- Solicitante
- Local
- Tipo do problema
- Descrição
- Prioridade
- Data
- Status

---

## Como Executar

1. Abra o MongoDB Shell ou Mongo Playground
2. Cole o código do projeto
3. Execute os comandos

---

## Exemplo de Consulta

```js
db.chamados.find({
  status: "Pendente"
})
