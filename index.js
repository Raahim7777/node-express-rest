
const express = require('express')
const app = express()

app.use(express.json());

const products =[
    {   id:1,
        name: 'Samsung',
        price:500,
        stock: 10,

    },
    {
        id:2,
        name: 'Apple',
        price:1000,
        stock: 10,

        
    },
    {
        id:3,
        name: 'Huawei',
        price:2000,
        stock: 10,
    }
]
//object second
const students =[
    {
        id:1,
        name: '<sokhim>',
        email: '<EMAIL>',
        phone: '0987654321'
    },
    {
        id:2,
        name: '<sokheng>',
        email: '<EMAIL@gmail.com>',
        phone: '0987654321'
    }
]

app.get('/products',function(req,res){
    res.send(products)
})

app.get('/students',function(req,res){
    res.send(students)
})

app.get('/students/:id',function(req,res){
    const {id} = req.params;
    // const id = req.params.id;

    const student = students.find((item) => item.id == id);

    res.send(student)
})


app.post('/students',function(req,res){
    const {id} = req.body;

    const existing = students.some((item) => item.id === id);

    if(existing) {
        res.status(409).send('Student already exists');
        return;
    }

    students.push(req.body)
    res.send(students)
})

app.listen(3000,function(){
    console.log('server is running')
})

    
