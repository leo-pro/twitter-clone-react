const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

//Extrai o servidor do express();
const server = require('http').Server(app);

//Servidor olhe para websocket
const io =  require('socket.io')(server);

mongoose.connect('mongodb://goweek:goweek123@ds051625.mlab.com:51625/goweek-backend', {
    useNewUrlParser: true
});

app.use((req, res, next) => {
    req.io = io;

    return next();
})
app.use(cors());
app.use(express.json());
app.use(require('./routes'));

server.listen(3000, () => {
    console.log('Server started on Port 3000');
});