const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/studentDB')
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

const studentSchema = new mongoose.Schema({
    name: String,
    age: Number
});

const Student = mongoose.model('Student', studentSchema);

app.post('/students', async (req, res) => {
    try {
        const student = new Student(req.body);
        await student.save();
        res.send("Student Added");
    } catch (err) {
        res.send(err);
    }
});

app.get('/students', async (req, res) => {
    try {
        const data = await Student.find();
        res.json(data);
    } catch (err) {
        res.send(err);
    }
});

app.put('/students/:id', async (req, res) => {
    try {
        await Student.findByIdAndUpdate(req.params.id, req.body);
        res.send("Student Updated");
    } catch (err) {
        res.send(err);
    }
});

app.delete('/students/:id', async (req, res) => {
    try {
        await Student.findByIdAndDelete(req.params.id);
        res.send("Student Deleted");
    } catch (err) {
        res.send(err);
    }
});
app.listen(3000, () => {
    console.log("Server running on port 3000");
});