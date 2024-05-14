const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Replace <password> with your actual password, URL encoded if necessary
const dbURI = 'mongodb+srv://Durgatammineni:myp%40ssw0rd%21@cluster0.uca1l5u.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("DB connected..."))
    .catch(err => console.log('DB connection error:', err));

app.get('/', (req, res) => {
    res.send('hello world');
});

app.listen(3000, () => console.log('Server running on port 3000'));
