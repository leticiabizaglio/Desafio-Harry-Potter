const express = require('express');
const {Pool} = require('pg');

const app = express();
const port = 4000;

app.use(express.json());


const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'harrypotter',
    password: 'ds564',
    port: 7007,
});

// BRUXOS:

// Rota para buscar todos os bruxos
app.get('/bruxos', async (req, res) => {
    try{
        const resultado = await pool.query('SELECT * FROM bruxos');
        res.json({
            // total: resultado.rows,
            bruxos: resultado.rows
        })
    } catch(error){
        console.log("Erro ao obter todos os bruxos: " + error);
        res.sendStatus(500).send("Erro ao obter todos os bruxos");
    }
});

// Rota para buscar um bruxo especifico
app.get('/bruxo/:id', async (req, res) => {
    try{
        const {id} = req.params;
        const resultado = await pool.query('SELECT * FROM bruxos WHERE id = $1', [id]);
        if(!resultado.rowCount === 0){
            res.status(404).send({message: 'Bruxo não encontrado'});
        } else {
            res.status(200).send({message: 'Bruxo encontrado', bruxo: resultado.rows[0]});
    } 
    } catch(error){
        console.log("Erro ao obter o bruxo: " + error);
        res.sendStatus(500).send("Erro ao obter o bruxo");
    }
});

// Rota para adicionar um novo bruxo
app.post('/bruxos', async (req, res) => {
    try{
        const {nome, idade, casa, habilidade, status_sangue, patrono} = req.body;
        await pool.query('INSERT INTO bruxos (nome, idade, casa, habilidade, status_sangue, patrono) VALUES ($1, $2, $3, $4, $5, $6)', [nome, idade, casa, habilidade, status_sangue, patrono]);
        res.status(201).send({message: 'Bruxo adicionado com sucesso'});
    } catch(error){
        console.log("Erro ao adicionar o bruxo: " + error);
        res.sendStatus(500).send("Erro ao adicionar o bruxo");
    }
});

// Rota para atualizar um bruxo
app.put('/bruxos/:id', async (req, res) => {
    try{
        const {id} = req.params;
        const {nome, idade, casa, habilidade, status_sangue, patrono} = req.body;

        await pool .query('UPDATE bruxos SET nome = $1, idade = $2, casa = $3, habilidade = $4, status_sangue = $5, patrono = $6 WHERE id = $7', [nome, idade, casa, habilidade, status_sangue, patrono, id]);
        res.status(200).send({message: 'Bruxo atualizado com sucesso'});
    } catch(error){
        console.log("Erro ao atualizar o bruxo: " + error);
        res.sendStatus(500).send("Erro ao atualizar o bruxo");
    }
});

// Rota para excluir um bruxo
app.delete('/bruxos/:id', async (req, res) => {
    try{
        const {id} = req.params;
        await pool.query('DELETE FROM bruxos WHERE id = $1', [id]);
        res.status(200).send({message: 'Bruxo excluido com sucesso'});
    } catch(error){
        console.log("Erro ao excluir o bruxo: " + error);
        res.sendStatus(500).send("Erro ao excluir o bruxo");
    }
});


// VARINHAS: 

// Rota para buscar todas as varinhas
app.get('/varinhas', async (req, res) => {
    try{
        const resultado = await pool.query('SELECT * FROM varinhas');
        res.json({
            // total: resultado.rows,
            varinhas: resultado.rows
        })
    } catch(error){
        console.log("Erro ao obter todas as varinhas: " + error);
        res.sendStatus(500).send("Erro ao obter todas as varinhas");
    }
});

// Rota para buscar uma varinha especifica
app.get('/varinhas/:id', async (req, res) => {
    try{
        const {id} = req.params;
        const resultado = await pool.query('SELECT * FROM bruxos WHERE id = $1', [id]);
        if(!resultado.rowCount === 0){
            res.status(404).send({message: 'Bruxo não encontrado'});
        } else {
            res.status(200).send({message: 'Bruxo encontrado', bruxo: resultado.rows[0]});
    } 
    } catch(error){
        console.log("Erro ao obter o bruxo: " + error);
        res.sendStatus(500).send("Erro ao obter o bruxo");
    }
});

// Rota para adicionar uma nova varinha
app.post('/varinhas', async (req, res) => {
    try{
        const {material, comprimento, nucleo, data_fabricacao} = req.body;
        await pool.query('INSERT INTO varinhas (material, comprimento, nucleo, data_fabricacao ) VALUES ($1, $2, $3, $4)', [material, comprimento, nucleo, data_fabricacao]);
        res.status(201).send({message: 'Varinha adicionada com sucesso'});
    } catch(error){
        console.log("Erro ao adicionar a varinha: " + error);
        res.sendStatus(500).send("Erro ao adicionar a varinha");
    }
});

// Rota para atualizar uma varinha
app.put('/varinhas/:id', async (req, res) => {
    try{
        const {id} = req.params;
        const {material, comprimento, nucleo, data_fabricacao} = req.body;

        await pool .query('UPDATE varinhas SET material = $1, comprimento = $2, nucleo = $3, data_fabricacao = $4 WHERE id = $5', [material, comprimento, nucleo, data_fabricacao, id]);
        res.status(200).send({message: 'Varinha atualizada com sucesso'});
    } catch(error){
        console.log("Erro ao atualizar a varinha: " + error);
        res.sendStatus(500).send("Erro ao atualizar a varinha");
    }
});

// Rota para excluir uma varinha
app.delete('/varinhas/:id', async (req, res) => {
    try{
        const {id} = req.params;
        await pool.query('DELETE FROM varinhas WHERE id = $1', [id]);
        res.status(200).send({message: 'Varinha excluida com sucesso'});
    } catch(error){
        console.log("Erro ao excluir a varinha: " + error);
        res.sendStatus(500).send("Erro ao excluir a varinha");
    }
});
// Rota de teste
app.get('/', (req, res) => {
    res.send({message: 'Servidor funcionando'});
});

// Iniciando o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});