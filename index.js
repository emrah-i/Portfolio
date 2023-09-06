import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import fs from 'fs';
import nodemailer from 'nodemailer';
import path, { dirname }  from 'path';
import { fileURLToPath } from 'url';
import dotenv from "dotenv";
import axios from 'axios'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const dotenvPath = path.join(__dirname, '.env')
dotenv.config({ path: dotenvPath })

const app = express();
const port = process.env.PORT || 8080;

app.use(express.static('public'))
app.use(morgan("tiny"))
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });

app.get('/', async (req, res) => {

    fs.readFile('public/quotes.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading the JSON file:', err);
            return;
            }
        
        const quotes = JSON.parse(data);
        let numb = Math.floor(Math.random() * quotes.length)
        let quote = quotes[numb];
        
        res.render('index.ejs', {author: quote.author, quote: quote.quote})
    });
})

app.post('/email', async (req, res) => {

    const recaptchaResponse = req.body['g-recaptcha-response'];
    const recaptchaSecretKey = process.env.SECRET

    const name_input = req.body.name
    const email_input = req.body.email
    const subject_input = req.body.subject
    const body_input = req.body.body

    const response = await axios.post('https://www.google.com/recaptcha/api/siteverify', null, {
        params: {
        secret: recaptchaSecretKey,
        response: recaptchaResponse,
        },
    });
    
    const { success } = response.data;

    if (success) {
        const mailOptions = {
            from: process.env.SMTP_EMAIL,
            to: process.env.SMTP_EMAIL,
            subject: subject_input,
            text: `${name_input} sent you the following email:\n\n${body_input}\n\nThey can be contacted at ${email_input}.`
        };
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                res.status(400).json({success: false, message: 'Error sending email: ' + error});
            } else {
                res.status(200).json({success: true, message: 'Email sent: ' + info.response});
            }
        });
    } else {
        res.status(400).json({success: false, message: 'Failed reCAPTCHA'});
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
})