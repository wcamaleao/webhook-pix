const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Rota Webhook para receber notificações de pagamento do MercadoPago
app.post("/webhook", (req, res) => {
    console.log("Notificação recebida:", req.body);
    res.sendStatus(200);
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
