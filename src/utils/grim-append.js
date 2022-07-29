function append(socket = net.Socket) {
  return {
    credentials: socket.remoteAddress,
    command: socket,
  };
}

module.exports = { append };
