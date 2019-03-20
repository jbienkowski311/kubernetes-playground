const axios = require('axios');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const additionHost = 'addition:8080';
const subtractionHost = 'subtraction:8080';

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

app.get('/add/:a/:b', (req, res) => {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);

    axios.get(`http://${additionHost}/add/${a}/${b}`)
        .then(response => res.send({
            result: response.data.result,
        }));
});

app.get('/sub/:a/:b', (req, res) => {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);

    axios.get(`http://${subtractionHost}/sub/${a}/${b}`)
        .then(response => res.send({
            result: response.data.result,
        }));
});

app.get('/mul/:a/:b', (req, res) => res.send({
    result: parseInt(req.params.a) * parseInt(req.params.b)
}));

app.get('/div/:a/:b', (req, res) => res.send({
    result: parseInt(req.params.a) / parseInt(req.params.b)
}));

app.listen(port, () => console.log(`calc is listening on port ${port}!`));