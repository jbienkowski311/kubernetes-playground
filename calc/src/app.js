const axios = require('axios');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const additionHost = process.env.ADD_HOST || 'addition:8080';
const subtractionHost = process.env.SUB_HOST || 'subtraction:8080';
const multiplicationHost = process.env.MUL_HOST || 'multiplication:5000';
const divisionHost = process.env.DIV_HOST || 'division:5000';

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

app.get('/mul/:a/:b', (req, res) => {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);

    axios.get(`http://${multiplicationHost}/mul/${a}/${b}`)
        .then(response => res.send({
            result: response.data.result,
        }));
});

app.get('/div/:a/:b', (req, res) => {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);

    axios.get(`http://${divisionHost}/div/${a}/${b}`)
        .then(response => res.send({
            result: response.data.result,
        }));
});

app.listen(port, () => console.log(`calc is listening on port ${port}!`));