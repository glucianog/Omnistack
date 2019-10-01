const express = require('express');
const mongoose = require('mongoose')

const routes  = require('./routes');


const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack-6ezzu.mongodb.net/aulaweb?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// req.query -> acessar query params (filtros)
// req.params -> acessar route params (edição e delete)
// req.body -> acessar corpo da requisição 

app.use(express.json());
app.use(routes);

app.listen(8000);
