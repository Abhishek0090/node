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

connection.connect((err)=>{
  if(err){
    throw err;
  }else{
    console.log("Database Connected Successfully")
  }
})

// Nodemailer configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'palabhishek411@gmail.com',
    pass: 'abhi@972023'
  }
});

// Express.js route to send email
app.get('/send-email', (req, res) => {
  const mailOptions = {
    from: 'palabhishek411@gmail.com',
    to: "palabhishek1029@gmail.com",
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
