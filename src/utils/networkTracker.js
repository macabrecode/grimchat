const { networkInterfaces } = require('os');

const net = networkInterfaces();

const { address } = net['Wi-Fi'][1];

module.exports = address;
