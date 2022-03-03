const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const logger = require('morgan');
const cors = require('cors');


const port = process.env.PORT || 3000;
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(cors());
app.delete('x-powerede-by');

app.set('port', port);



server.listen(3000, '172.31.224.1' || 'localhost', function() {
    console.log('ServerOn')
});

app.get('/', (req,res,) => {
    res.send('home page');
});
app.get('/users', (req,res,) => {
    res.send('users');
});

app.use((err,req, res, next) => {
    console.log(err);
    res.status(err.status || 500).send(err.stack);

});