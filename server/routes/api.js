const express = require("express")
const route = express.Router()
require("dotenv").config()
const { neon } = require("@neondatabase/serverless");
const sql = neon(process.env.DATABASE_URL);


// Create
route.post("/doctor", async(req, res) => {
    const {name, age} = req.body;

    try{
        const newValues = await sql `INSERT INTO doctor (name, age) VALUES (${name}, ${age}) RETURNING *`;
        res.json(newValues[0])
    } catch(err) {
        console.error("Create Error")
    }
})

// Read

route.get("/doctor", async(req, res) => {
    try {
        const result = await sql("SELECT * FROM doctor");
        res.json(result)
    } catch (err) {
        console.err("Read Error")
    }
})

// Read Id

route.get("/doctor/:id", async(req, res) => {
    const { id } = req.params;

    try{
        const result = await sql `SELECT * FROM doctor WHERE id = ${id}`;
        res.json(result[0])
    } catch(err) {
        res.send('Id Read Error')
    }
})

// Update
route.put("/doctor/:id", async(req, res) => {
    const { id } = req.params;
    const { name, age } = req.body;

    try{
        const result = await sql `UPDATE doctor SET name = ${name}, age = ${age} WHERE id = ${id}`;
        res.json({ message: "items update successful"})
    } catch (err) {
        console.error("Update Error")
    }
})


// Delete
route.delete("/doctor/:id", async(req, res) => {
    const { id } = req.params;
    try {
        const result = await sql `DELETE FROM doctor WHERE id = ${id}`;
        res.json({ message: "Delete successfull"})
    } catch (err) {
        console.error("Delete Error")
    }
})


module.exports = route;