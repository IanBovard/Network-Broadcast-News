/*jshint esversion:6*/
const net = require('net');
const client = [];
const clientServer = net.createServer((socket) => {
  process.stdout.write('User connected to chat\/');
  client.push(socket);
  socket.on('data', (data) => {
    if (socket.hasOwnProperty('name')){
      client.forEach((user)=>{
        user.write(`>${socket.name}${data.toString()}`);
      });
      return;
    }
    const isAvail = client.every((user)=>{
      console.log(`does ${data.toString()} == ${user.name}?`);
      return data.toString().toUpperCase() !== user.name;
    });
    if (isAvail){
      socket.name = data.toString().toUpperCase();
    }else{
      socket.write('Name not available. Enter a new Name: ');
    }
    console.log(isAvail);
  });
  socket.on('close', () =>{
    process.stdout.write(`>>>${socket.name}has disconnected!`);
  });
});


clientServer.listen(6969,'0.0.0.0', () => {
  console.log('listening to port 6969');
});
