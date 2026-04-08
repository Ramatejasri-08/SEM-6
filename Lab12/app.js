const express = require('express');
const app = express();
app.use(express.json());
let users = [
    { id: 1, name: "Teja" },
    { id: 2, name: "Ravi" }
];
app.get('/users', (req, res) => {
    res.json(users);
});
app.get('/users/:id', (req, res) => {
    const user = users.find(u => u.id == req.params.id);
    res.json(user);
});
app.post('/users', (req, res) => {
    const newUser = req.body;
    users.push(newUser);
    res.send("User added");
});
app.put('/users/:id', (req, res) => {
    users = users.map(u =>
        u.id == req.params.id ? req.body : u
    );
    res.send("User updated");
});
app.delete('/users/:id', (req, res) => {
    users = users.filter(u => u.id != req.params.id);
    res.send("User deleted");
});
app.listen(3000, () => {
    console.log("Server running on port 3000");
});