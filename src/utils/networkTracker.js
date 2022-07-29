const { networkInterfaces } = require("os");

switch (process.platform) {
  case "linux":
    module.exports = networkInterfaces()["wlo1"][0].address;
    break;
  default:
    module.exports = networkInterfaces()["Wi-Fi"][1].address;
}
