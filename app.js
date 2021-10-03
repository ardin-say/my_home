const express = require('express');
const app = express();


app.disable('x-powered-by')
app.use(express.static('client'));

//routes
app.get('/', (req,res)=>{
    res.sendFile(__dirname + 'client/index.html');
});

server = app.listen( process.env.PORT || 5000);

const users = {};

const io = require("socket.io")(server);

io.on('connection', (socket) => {
	console.log('New User Connected');
	socket.on('ring-it',function(){
		socket.broadcast.emit('ring-it')
		console.log('Ringing ...... I Am Server');
	});
})

console.log(`running on`);