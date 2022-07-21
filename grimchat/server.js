require('dotenv');
const net = require('net');

const server = net.createServer((socket) => {
  socket.write('Server is ready');
  console.log('New connection');

  socket.pipe(socket);

  socket.on('data', (data) => {
    console.log(data.toString());
  });

  socket.on('close', () => {
    console.log('CLIENT-DISCONNECTED');
  });

  socket.on('error', (err) => {
    console.log('ErrorServer: ' + err);
  });
});

server.listen(3030, process.env.ADDRESS);
