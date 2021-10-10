
![Imagem][api]

[api]: api_image.png 

# Creating a simple training API

#### Start step

yarn init -y

#### Step: Add express

yarn add  express

__Going with the project.__

**After installing the dependencies** create the http routes...

Let's use json data as an example to consume, the link below to the json:


**1ª** Create a file to put the routes
**server.js**


**INSIDE THE SERVER.JS**

**2ª** Instantiate the express  

```
const express = require('express');
const app = express();
```

**3ª** Create a file with the json example obtained from the link with datas:
**data.json**

**4ª** Retrive the file  
```
const data = require('./data.json');
```

**5ª** Say that you are going to use json  
```
app.use(express.json());
```
**6ª** make a function to listen on port 3000
```
app.listen(3000, function(){
    console.log('Server is running');
});
```
**8ª** create http methods with callback function, 
you must pass you endpoint > users

```
app.get('/users', function(req, res){
    res.json(data);
});

app.get('/users:id', function(req, res){
    res.json(data);
});

app.post('/users', function(req, res){
    res.json(data);
});

app.put('/users:id', function(req, res){
    res.json(data);
});

app.delete('/users:id', function(req, res){
    res.json(data);
});
```

### To test api json use the insomnia!

Below is an example with methods to use with "insomnia" => Use each request GET, POST, UPDATE,
```
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

```

![Imagem][insomnia]

[insomnia]: insomnia.png 
