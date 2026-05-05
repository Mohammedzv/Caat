const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const path = require('path');
const PORT = process.env.PORT || 3000;
app.get('/', (req, res) => { res.sendFile(path.join(__dirname, 'index.html')); });
io.on('connection', (socket) => {
    socket.on('chat message', (msg) => { socket.broadcast.emit('chat message', msg); });
});
http.listen(PORT, () => { console.log(`Server running at http://localhost:${PORT}`); });