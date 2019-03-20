const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => res.send({
    message: 'Hello! This is calc! Try one of the available methods!',
    methods: [
        '/add/:a/:b',
        '/sub/:a/:b',
        '/mul/:a/:b',
        '/div/:a/:b'
    ]
}));

app.get('/add/:a/:b', (req, res) => res.send({
    result: parseInt(req.params.a) + parseInt(req.params.b)
}));

app.get('/sub/:a/:b', (req, res) => res.send({
    result: parseInt(req.params.a) - parseInt(req.params.b)
}));

app.get('/mul/:a/:b', (req, res) => res.send({
    result: parseInt(req.params.a) * parseInt(req.params.b)
}));

app.get('/div/:a/:b', (req, res) => res.send({
    result: parseInt(req.params.a) / parseInt(req.params.b)
}));

app.listen(port, () => console.log(`calc is listening on port ${port}!`));