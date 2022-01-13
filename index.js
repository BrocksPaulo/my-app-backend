const express = require('express');
const app = express();
app.use(express.json());

app.get('/users', (request, response) => {   

    return response.json({
        nome: 'Xao',
        sobrenome: 'Lolo'
    });
});

app.get('/filtranome', (request, response) => { 
    const params = request.query;
    
    console.log(params);
});

app.get('/filtraid/:id', (request, response) => { 
    const id = request.params;
    
    console.log(id);
});

app.post('/gravanome', (request, response) => { 
    const body = request.body;
    
    console.log(body);
});

app.listen(3333);