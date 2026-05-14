const express = require('express');
const mysql = require('mysql2');
const app = express();

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Maksym35352!', // Твій пароль тут
    database: 'charity_foundation'
});

db.connect(err => {
    if (err) throw err;
    console.log("Connected to MySQL Database!");
});

// Ендпоінт для отримання всіх донорів
app.get('/donors', (req, res) => {
    db.query('SELECT * FROM donors', (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});