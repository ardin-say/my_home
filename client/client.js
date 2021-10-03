$(function () {
    //make connection
    let socket = io.connect('https://ard-home.herokuapp.com');

    //buttons and inputs
    // let btn = $("#btnn");

    //Emit message
    // // If send message btn is clicked
    // btn.click(function(){
        
        socket.emit('ring-it')
        console.log('Ringing.....');
    // });
});
