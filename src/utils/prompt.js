const entero = require("entero");

const fullMessage = (username, message) => `${username}: ${message}`;

const input = (username, client = new require("net").Socket()) => {
  entero({
    prompt: `${username}: `,
    onLine: (line) => client.write(fullMessage(username, line)),
    commands: {},
  });
};

module.exports = { input };
