const express = require('express');
const socket = require('socket.io');
const cors = require('cors');

const app = express();

app.use(cors());
app.options('*', cors());

const server = require('http').Server(app);
const io = socket(server, {
	cors: {
		origin: 'https://true.success.beta',
		allowedHeaders: ['Access-Control-Allow-Credentials'],
		credentials: true
	},
	allowEIO3: true
});

app.get('/', (req, res) => {
	res.send('<h1>Welcome to socket server</h1>');
});

io.on('connection', (socket) => {
	console.log('Make socket connection');

	socket.join('bet');

	socket.on('message_from_server', (data) => {
		console.log('Receive message from server: ', data);
		console.log(`Send event ${data.event} to browser`);
		socket.broadcast.emit(data.event, data.data);
	});
});

const PORT = 3232;
server.listen(PORT, () => {
	console.log(`Socket server is running on port ${PORT}`);
	console.log(`http://localhost:${PORT}`);
	console.log('***');
});
