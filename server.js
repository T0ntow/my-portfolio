const nodemailer = require('nodemailer');

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

transporter.sendMail({
  from: "Wellington <wellingtonbs109@gmail.com>",
  to: "Wellington B <wellingtonbts10@gmail.com>",
  subject: "Testando nodemailer",
  text: "testando essa bagaça"
}).then (message => {
  console.log(message)
}).catch ( err => {
  console.log(err);
})
