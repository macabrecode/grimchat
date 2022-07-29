const args = require("arg")({
  "--username": String,
  "--address": String,

  // Aliases;
  "-u": "--username",
  "-a": "--address",
});

if (!args["--username"])
  return console.error("Missing required argument: --username");
if (!args["--address"])
  return console.error("Missing required argument: --address");

const username = args["--username"];
const address = args["--address"];

const { input } = require("./utils/prompt");

const net = require("net");

const client = new net.Socket();

client.connect(3030, address, () => {
  client.write(`Hello, server! I'm ${username}`);
});

client.on("data", (data) => {
  console.log(data.toString());
});

input(username, client);

client.on("close", () => {
  console.log("Connection closed.");
});

client.on("error", (error) => {
  console.log(`There was an error: ${error}`);
});
