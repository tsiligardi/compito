const express= require ('express');
const app= express();


app.get('/',(req,res)=>{
    res.send(`ciao ${req.query.nome}`)
})

app.get('/mare',(req,res)=>{
    res.send(req.headers)
})

app.listen(8000,()=>console.log('server listnening on port 8000'))