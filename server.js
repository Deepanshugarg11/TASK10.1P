require('dotenv').config();
const mailgun = require('mailgun-js');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const mg = mailgun({ apiKey: process.env.MAILGUN_API_KEY, domain: process.env.MAILGUN_DOMAIN });

app.post('/subscribe', async (req, res) => {
  const { email } = req.body;

  const data = {
    from: 'deepanshu4773.be23@chitkara.edu.in', 
    to: email,
    subject: 'Welcome!',
    text: 'Thank you for subscribing to Dev-Deakin!',
    html: '<h3>Thank you for subscribing to Dev-Deakin!</h3>'
  };

  try {
    const result = await mg.messages().send(data);
    console.log('Mailgun response:', result); // Log for debugging
    res.status(200).json({ message: 'Email delivered successfully!' });
  } catch (error) {
    console.error('Mailgun error:', error); // Log for debugging
    res.status(500).json({ message: 'Failed to deliver email. Please try again.' });
  }
});

const PORT = 5001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
