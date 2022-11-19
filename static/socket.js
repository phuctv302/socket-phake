var Socket = new function __Socket(){
	
	this.on = function(event, cb){

		var socket = io.connect('http://localhost:3232');

		
		socket.on('connect', function(){
			socket.on(event, function(data){
				cb(data);
			})
		});
	}

	this.emit = function(event, data){
		var socket = io.connect('http://localhost:3232');

		var message = {
			event: event,
			data: data
		}

		socket.on('connect', function(){
			socket.emit('message_from_server', message);
		});
	}
}