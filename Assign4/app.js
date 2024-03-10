const express = require('express');
const app = express();
const port = 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
    res.render('create');
});

let users = [];

app.post('/user', (req, res) => {
    const username = req.body.username;
    users.push(username);
    res.redirect('/users');
});

app.get('/users', (req, res) => {
    res.render('users', { users: users });
});

// Setting view engine to Pug
app.set('view engine', 'pug');
app.set('views', './views');

// Server
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
