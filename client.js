/*jshint esversion:6*/
const net = require('net');

const client = net.createConnection({port : 6969}, '0.0.0.0', () => {
  process.stdout.write('What is your name?');

  process.stdout.on('data', (data)=>{
    client.write(data);
  });
  client.on('data', (data)=>{
    process.stdout.write(data);
  });

});
