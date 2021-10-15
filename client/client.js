$(function () {
    //make connection
    let socket = io.connect('https://ard-home.herokuapp.com');

    //buttons and inputs
    let btn = $("#btnn");

    btn.click(function(){
        
        socket.emit('ring-it')
        socket.emit('1')

    socket.on('1',function(){
        socket.emit('ring-it')
    })

    
        // console.log('Ringing.....');
    });
});
