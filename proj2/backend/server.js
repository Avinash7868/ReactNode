const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app =express();
app.use(cors());
app.use(express.json());

const dbcon =mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"crud"
});

dbcon.connect((err)=>{
    if (err) throw err;
    console.log("Database is connectd")});


app.get('/',(req,res) => {
    // res.send("Backend is connectd");
    const sql = "SELECT * FROM students";
    dbcon.query(sql,(err , data)=>{
        if (err) throw err;
        return res.json(data);
    })
})

app.post('/create',(req,res) => {
    const sql1="INSERT INTO students (`name`,`email`) VALUES(?)";
    const value = [
        req.body.inputName,
        req.body.inputEmail
    ]
    dbcon.query(sql1,[value],(err,data)=>{
        if (err) return res.json("ERROR");
        return res.json(data);
    })
})

app.put('/update/:id',(req,res) => {
    const sql2="update students SET name=? , email=? WHERE id =?";
    const value = [
        req.body.inputName,
        req.body.inputEmail
    ]
    const id = req.params.id
    dbcon.query(sql2,[...value,id],(err,data)=>{
        if (err) return res.json("ERROR");
        return res.json(data);
    })
})

app.delete('/students/:id',(req,res) => {
    const sql3="DELETE FROM students WHERE id =?";
    const id1 = req.params.id
    dbcon.query(sql3,id1,(err,data)=>{
        if (err) return res.json("ERROR");
        return res.json(data);
    })
})

app.listen(4000 , ()=>{
    console.log("It is listing to Avi's command");
});