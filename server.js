const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const port = 3002;

// Configurar o transporte de email
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: "wellingtonbs109@gmail.com",
    pass: "naphzcjujqkpnezi"
  }
});

app.use(cors());
app.use(express.json());

// Rota para enviar e-mail
app.post('/enviar-email', (req, res) => {

  const nome = req.body.nome;
  const from = req.body.from;
  const to = req.body.to;
  let texto = req.body.texto;

  texto = `texto enviado por ${nome} de email ${from}: ${texto}`

  const mailOptions = {
    from: `${nome} <${from}>`,
    to: to,
    subject: "Contato",
    text: texto
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).json({ error: 'Erro ao enviar e-mail' });
    } else {
      console.log('E-mail enviado: ' + info.response);
      res.json({ message: 'E-mail enviado com sucesso' });
    }
  });
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
