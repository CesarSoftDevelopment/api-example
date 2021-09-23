
const express = require('express');
const app = express();

const data = require('./data.json');

app.use(express.json());

app.get('/users', function(req, res){
    res.json(data);
});

app.get('/users/:id', function(req, res){
    const {id} = req.params;
    const user = data.find(user => user.id == id);

    if(!user) return res.status(404).json();

    res.json(user);
});


app.post('/users', function(req, res){
    const {id, username, name} = req.body;

    res.json({id, username, name});
});

app.put('/users/:id', function(req, res){
   const {id} = req.params;
   const user = data.find(user => user.id == id);

   const {name, state, address} = req.body;

   user.name = name;
   user.state = state;
   user.address = address;

   if(!user) return res.status(404).json();

   res.json(user);
});

app.delete('/users/:id', function(req, res){
    const {id} = req.params;
    const usersFilter = data.filter(user => user.id != id);

    if(!usersFilter)  return res.status(404).json();

    res.json(usersFilter);
});


app.listen(3000, function(){
    console.log('Server is running');
});