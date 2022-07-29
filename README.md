# :busts_in_silhouette: grimchat

![](https://img.shields.io/badge/grimchat-developing-yellow) ![](https://img.shields.io/badge/npm-8.13.2-green) ![](https://img.shields.io/badge/node-v17.6.0-green) ![](https://img.shields.io/badge/macabrecode-purple)

CLI chat through tcp sockets. With the purpose of improving productivity when talking to friends.

Grimchat corresponds of two basic scripts: a client and a server. Currently, it is designed to scale on your local network, so you could use it in your work office or any co-working environment sharing the same connection.

## How to use it

Clone the repo, cd into the folder, and run:

`npm install`

to install the required dependencies.

Turn on the server:

`npm run server`  
or  
`node src/server`

The server will output the address that you will use to connect to it when running the client.

Now it's time to run the client, choose a username and run the command:

`npm run client -- --username "My username" --address <the server ip address>`  
or  
`node src/client --username "My username" --address <the server ip address>`

Try running the client on another machine (connected to the local network) putting the same ip address and another username. Now you can chat between two different machines.
