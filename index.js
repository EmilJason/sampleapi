const express = require('express');
let PORT = process.env.PORT || 1995;
const cors = require('cors');
let app = express();
app.use(cors());
app.use(express.urlencoded({extended: false}));
//data
let person=[]
app.get('/',(req, res)=>{
    console.log('homepage visited');
    res.send('welcome to homepage');
});

app.get('/person',(req, res)=>{
    console.log('Personpage visited');
    res.send('welcome to Personpage');

});

app.post('/person/new',(req, res)=>{
    console.log('Personpage visited');
    let newPerson = {
        name: req.body.name,
        age : Number(req.body.age)
    }
    res.send(newPerson.name  + " " + newPerson.age)
});

app.listen(PORT,()=>{
    console.log(`Listening on port: ${PORT}`);
})