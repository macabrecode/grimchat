require('dotenv').config();
const net = require('net');

const address = require('./utils/networkTracker');
const { append } = require('./utils/grim-append');

/*   Hace de servidor a la espera de conexiones en el puerto 3030 con la address
 **  de turno, preestablecida por la computadora que contenga
 **  el servidor.
 */

let listSocket = []; //Collection sockets.

const server = net.createServer((socket) => {
  socket.write('Welcome to grimchat ;)');

  socket.on('data', (message) => {
    console.log(message.toString());

    listSocket.map((client) => client.command.write(message));
  });

  socket.on('close', () => {
    console.log('CLIENT-DISCONNECTED');
  });

  socket.on('error', (err) => {
    console.log('ErrorServer: ' + err);
  });
});

server.on('connection', (socket) => {
  //al conectarse, se guarda el socket en concreto que genera con el client
  listSocket.push(append(socket));
});

server.listen(3030, address, () => {
  console.log(`Server is ready for connections: ${address}`);
});
