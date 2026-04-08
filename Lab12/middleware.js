const express = require('express');
const app = express();
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url} ${new Date()}`);
    next();
});
const checkAuth = (req, res, next) => {
    console.log("Auth checked");
    next();
};
app.get('/home', checkAuth, (req, res) => {
    res.send("Welcome Home");
});
app.get('/about', (req, res) => {
    res.send("About Page");
});
app.listen(3000, () => {
    console.log("Server running...");
});