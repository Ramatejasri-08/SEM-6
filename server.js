const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

let db;

async function connectDB() {
    await client.connect();
    db = client.db("student_notes_db");
    console.log("MongoDB Connected");
}
connectDB();


// GET ALL BOOKS
app.get("/books", async (req, res) => {

    const books = await db.collection("books").find().toArray();

    res.send(books);

});


// FILTER BY CATEGORY
app.get("/books/category/:category", async (req,res)=>{

const category = req.params.category;

const books = await db.collection("books")
.find({category:category})
.toArray();

res.send(books);

});


// SEARCH BY TITLE
app.get("/books/search", async (req,res)=>{

const title = req.query.title;

const books = await db.collection("books")
.find({title:{$regex:title,$options:"i"}})
.toArray();

res.send(books);

});


app.listen(3000, () => {
    console.log("Server running on port 3000");
});