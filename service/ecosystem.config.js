module.exports = {
	apps: [
		{
			name: 'socket.server',
			script: './server.js',
			instances: 1
		},
		{
			name: 'socket.client',
			script: './client.js',
			instances: 1
		}
	]
}