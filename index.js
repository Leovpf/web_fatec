const express = require('express');

const app = express();
app.use(express.json());
//abrindo o servidor abaixo
app.listen(3000, () =>{
    console.log("O servidor esta rodando na porta 3000");
})

//CRUD
//CREATE

//req: buscar da web 
//res: enviar para a web
app.post("/testePOST", (req, res) => {
    const {nome, sobrenome} = req.body;
    console.log(`Nome: ${nome} \n Sobrenome: ${sobrenome}`);
    res.sendStatus(200);
})