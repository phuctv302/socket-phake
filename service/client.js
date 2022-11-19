const express = require('express');
const io = require('socket.io-client');
const cors = require('cors');

const app = express();

app.use(cors());
app.options('*', cors());

app.use(express.json());

app.post('/api/v1/socket', (req, res, next) => {
	const { event, data } = req.body;

	const socket = io.connect('http://localhost:3232');
	socket.on('connect', () => {
		socket.emit(event, data);
	});

	res.status(200).json({
		status: 'success'
	});
});

const PORT = 3233;
app.listen(PORT, () => {
	console.log(`Socket client is listening on port ${PORT}`);
});
