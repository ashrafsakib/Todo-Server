require('dotenv').config();
const express = require('express');
const cors = require('cors');

const { router } = require('./routes/todo.js');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());

app.use('/', router);

app.get("/as", (req, res) => {
    res.send("Welcome");
});

const port = process.env.PORT;

app.listen(port, ()=>{
    console.log(`App is running at http://127.0.0.1:${port}...`)
});