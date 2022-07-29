const { networkInterfaces } = require('os');

module.exports = networkInterfaces()['Wi-Fi'][1].address;
