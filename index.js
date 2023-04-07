const express = require('express');
const mysql = require('mysql2');
const nodemailer = require('nodemailer');

const app = express();

// MySQL configuration
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'abhishek',
  database: 'nodemailer'
});

// Nodemailer configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'palabhishek411@gmail.com',
    pass: 'abhi@9999'
  }
});

// Express.js route to send email
app.post('/send-email', (req, res) => {
  const mailOptions = {
    from: 'palabhishek411@gmail.com',
    to: req.body.email,
    subject: 'Test Email',
    text: 'This is a test email sent from Node.js using Nodemailer.'
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
