const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;
//Middleware para parsear o corpo das requisições
app.use(bodyParser.json());
//Simulação de um banco de dados em memória
let clientes = [];
let animais = [];
let consultas = [];
//Rota GET para listar todos os clientes
app.get('/clientes', (req,res) =>{
    res.json(clientes);
});
//Rota POST para criar um novo cliente 
app.post('/clientes', (req,res)=>{
    const cliente = req.body;
    clientes.push(cliente);
    res.status(201).json(cliente);
});
//Rota PUT para atualizar um cliente existente 
app.put('/clientes/:id', (req,res)=>{
    const id = req.params.id;
    const clienteIndex = cliente.findIndex(c=> c.id === id);
        if (clienteIndex !== -1){
            clientes[clienteIndex] = {id, ...req.body};
            res.json(clientes[clienteIndex]);
        } 
        else {
            res.status(404).json({message: 'Cliente não encontrado'});
        }
});
//Rota PATCH para atualizar parcialmente um cliente
app.patch('/clientes/:id', (req,res)=>{
    const id = req.params.id;
    const clienteIndex = clientes.findIndex(c=> c.id===id);

    if (clienteIndex !== -1){
        clientes[clienteIndex] = {...clientes[clienteIndex], ...req.body};
        res.json(clientes[clienteIndex]);
    } else {
        res.status(404).json({message: 'Cliente não encontrado'});
    }
});
//Rota DELETE para remover um cliente 
app.delete('/clientes/:id', (req,res)=>{
    const id = req.params.id;
    const clienteIndex = clientes.findIndex(c=> c.id === id);
    if (clienteIndex !== -1){
        clientes.splice(clienteIndex, 1);
        res.status(204).send();
    } else {
        res.status(404).json({message: 'Cliente não encontrado'});
    }
});


// Rotas para Animais
app.get('/animais', (req, res) => {
    res.json(animais);
});

app.post('/animais', (req, res) => {
    const animal = req.body;
    animais.push(animal);
    res.status(201).json(animal);
});

app.put('/animais/:id', (req, res) => {
    const id = req.params.id;
    const animalIndex = animais.findIndex(a => a.id === id);
    if (animalIndex !== -1) {
        animais[animalIndex] = { id, ...req.body };
        res.json(animais[animalIndex]);
    } else {
        res.status(404).json({ message: 'Animal não encontrado' });
    }
});

app.patch('/animais/:id', (req, res) => {
    const id = req.params.id;
    const animalIndex = animais.findIndex(a => a.id === id);
    if (animalIndex !== -1) {
        animais[animalIndex] = { ...animais[animalIndex], ...req.body };
        res.json(animais[animalIndex]);
    } else {
        res.status(404).json({ message: 'Animal não encontrado' });
    }
});

app.delete('/animais/:id', (req, res) => {
    const id = req.params.id;
    const animalIndex = animais.findIndex(a => a.id === id);
    if (animalIndex !== -1) {
        animais.splice(animalIndex, 1);
        res.status(204).send();
    } else {
        res.status(404).json({ message: 'Animal não encontrado' });
    }
});

app.get('/consultas', (req, res) => {
    res.json(consultas);
});

app.post('/consultas', (req, res) => {
    const consulta = req.body;
    consultas.push(consulta);
    res.status(201).json(consulta);
});
app.put('/consultas/:id', (req, res) => {
    const id = req.params.id;
    const consultaIndex = consultas.findIndex(b => b.id === id);
    if (consultaIndex !== -1) {
        consultas[consultaIndex] = { id, ...req.body };
        res.json(consultas[consultaIndex]);
    } else {
        res.status(404).json({ message: 'Consulta não encontrada' });
    }
});

app.patch('/consultas/:id', (req, res) => {
    const id = req.params.id;
    const consultaIndex = consultas.findIndex(b => b.id === id);
    if (consultaIndex !== -1) {
        consultas[consultaIndex] = { ...consultas[consultaIndex], ...req.body };
        res.json(consultas[consultaIndex]);
    } else {
        res.status(404).json({ message: 'Consulta não encontrada' });
    }
});

app.delete('/consultas/:id', (req, res) => {
    const id = req.params.id;
    const consultaIndex = consultas.findIndex(b => b.id === id);
    if (consultaIndex !== -1) {
        consultas.splice(consultaIndex, 1);
        res.status(204).send();
    } else {
        res.status(404).json({ message: 'Consulta não encontrada' });
    }
});

//Inicia o servidor 
app.listen(port, ()=>{
    console.log(`Servidor rodando em http://localhost:${port}`);
});
