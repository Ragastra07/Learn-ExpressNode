const express = require('express');
const userRoutes = require('./routes/users.js', );
const middlewareLogRequest = require('./middleware/logs.js');

const app = express();

app.use(middlewareLogRequest);
app.use(express.json());
app.use((req, res, next) => {
    console.log('middleware ke 2');
    next();
});

// app.method(path, handler);
// app.use("/", (req, res, next) => {
//     res.send('hello world');
// });

app.use('/users', userRoutes);

// app.get("/", (req, res) => {
//     res.json({
//         nama : "ragastra", 
//         email : "ragastr@gmail.com"
//     });
// });

// app.post("/", (req, res) => {
//     res.send('hello post method');
// });

app.listen(5500, () => {
    console.log('KEEP PUSHING THE LINE');
});