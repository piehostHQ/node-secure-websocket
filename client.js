const WebSocket = require('ws');
const readline = require('readline');

const socket = new WebSocket('ws://localhost:8080');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

socket.on('open', () => {
  console.log('Connected to server');
  
  rl.question('Enter message to send: ', (message) => {
    socket.send(message);
  });
});

socket.on('message', (message) => {
  console.log('Message from server:', message);

  rl.question('Enter message to send: ', (message) => {
    socket.send(message);
  });
});

socket.on('close', () => {
  console.log('Connection closed');
  rl.close(); 
});
