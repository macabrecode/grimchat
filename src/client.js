const username = process.argv[2];

const { input } = require("./utils/prompt");

if (username) {
  require("dotenv").config();

  const net = require("net");

  const client = new net.Socket();

  client.connect(3030, process.env.ADDRESS, () => {
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
} else {
  console.log("Please enter a username: `npm run client <username>`");
}
