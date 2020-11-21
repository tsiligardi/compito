const express= require ('express');
const app= express();

const handlebars = require('express-handlebars')
app.set('view engine', 'hbs')
app.use(express.static('public'))

app.engine('hbs', handlebars({
    layoutsDir: __dirname + '/views/layouts',
    extname: 'hbs',
    defaultLayout: 'index', //indica il layout di default
    }));

app.get('/',(req,res)=>{
    res.render('main',{name: req.query.nome})
})

app.get('/mare',(req,res)=>{
    res.send(req.headers)
})

app.listen(8000,()=>console.log('server listnening on port 8000'))