import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import fs from 'fs';

const app = express();
const port = process.env.PORT || 8080;

app.use(express.static('public'))
app.use(morgan("tiny"))
app.use(bodyParser.urlencoded({extended: true}));

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

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
})