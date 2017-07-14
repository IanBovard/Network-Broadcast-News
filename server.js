/*jshint esversion:6*/
const net = require('net');
let client = [];
const clientServer = net.createServer((socket) => {
  process.stdout.write('User connected to chat\/');

  socket.on('data', (data) => {
    client.forEach((user)=>{
      if (user === socket){
        client.name = data;
        process.stdout.write(`${client.name}`);
      }else{
        user.write(`${client.name} >> ${data.toString()}`);
      }
    });
  });
  socket.on('close', () =>{
    process.stdout.write(' client has disconnected');
  });
});


clientServer.listen(6969,'0.0.0.0', () => {
  console.log('listening to port 6969');
});
