/*   Server funciona como el nombre lo dice, hace de servidor
 **  a la espera de conexiones en el puerto 3030 con la address
 **  de turno, preestablecida por la computadora que contenga
 **  el servidor.
 */

require('dotenv').config();

const net = require('net');

const { append } = require('./utils/grim-append');

let listSocket = []; //Collection sockets.

const server = net.createServer((socket) => {
  socket.write('Welcome to grimchat ;)');

  //Encargado de enviar y filtrar los mensajes a los demás clientes.
  socket.on('data', (message) => {
    console.log(message.toString());
    listSocket
      .filter((pipe) => pipe.credentials !== socket.remoteAddress)
      .map((client) => client.command.write(message));
  });

  socket.on('close', () => {
    console.log('CLIENT-DISCONNECTED');
  });

  socket.on('error', (err) => {
    console.log('ErrorServer: ' + err);
  });
});

server.on('connection', (socket) => {
  listSocket.push(append(socket));
});

server.listen(3030, process.env.ADDRESS);
