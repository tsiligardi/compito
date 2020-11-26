const { query } = require('express');
const express= require ('express');
const app= express();

const handlebars = require('express-handlebars')
app.set('view engine', 'hbs')
app.use(express.static('public'))

app.engine('hbs', handlebars({
    layoutsDir: __dirname + '/views/layouts',
    extname: 'hbs',
    defaultLayout: 'index',
    }))

app.get('/',(req,res)=>{
    //console.log(req.headers)
    res.render('main',{nome: req.query.nome, cognome: req.query.cognome, anni: req.query.anni, porta: req.headers.host.substr(10)})
})

app.get('/mare',(req,res)=>{
    res.render('main',{layout: 'mare', nome: req.query.nome, cognome: req.query.cognome, anni: req.query.anni, porta: req.headers.host.substr(10)})
})

app.listen(8000,()=>console.log('server listnening on port 8000'))