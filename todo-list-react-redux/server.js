var express = require('express');
const path = require('path');

app.use(express.static('build'))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build/index.html'));
})