const express = require('express');
const app = express();
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

const port = process.env.PORT || 5000;

const pool = mysql.createPool({
    host: 'localhost',
    password: '568923',
    user: 'root',
    database: 'carfit',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

pool.getConnection((err, con) => {
    if (err) {
        console.error('Error getting MySQL connection', err);
    } else {
        console.log('Connected to MySQL database');
        con.release();
    }
});

app.get('/', (req, res) => {
    res.end('backend is running...')
})

app.get('/cars', (req, res) => {
    const { category, search } = req.query;
    let query = 'SELECT * FROM categories';

    if (category) {
        query += ` WHERE category = '${category}'`
    }

    if (search) {
        if (category) {
            query += ' AND ';
        } else {
            query += ' WHERE ';
        }

        query += `model LIKE '%${search}%'`;
    }

    pool.getConnection((err, con) => {
        if (err) {
            console.error('Error getting MySQL connection', err);
            res.status(500).send('Internal Server Error');
        } else {
            con.query(query, (queryErr, results) => {
                con.release();

                if (queryErr) {
                    console.error('Error executin query', queryErr);
                    res.status(500).send('Internal Server Error');
                } else {
                    res.json(results);
                }
            })
        }
    }) 
})

app.post('/sign-up', (req, res) => {
    const { email, pass} = req.body;

    bcrypt.hash(pass, 10, (err, hash) => {
        if (err) throw err;

        const user = { email, pass: hash};

        pool.query('INSERT INTO user SET ?', user, (err, result) => {
            if (err) throw err;
            console.log('User registered:', result);
            res.sendStatus(200);
        })
    })
})

app.post('/login', (req, res) => {
    const { email, pass} = req.body;

    pool.query('SELECT * FROM user WHERE email = ?', [email], (err, result) => {
        if (err) throw err;

        if (result.length > 0) {
            const user = result[0];
            
            bcrypt.compare(pass, user.pass, (err, match) => {
                if (err) throw err;

                if (match) {
                    res.sendStatus(200);
                } else {
                    res.sendStatus(401);
                }
            });
        } else {
            res.sendStatus(401);
        }
    })
})

app.listen(port, (req, res) => {
    console.log(`Server listening on port: ${port}...`)
})

