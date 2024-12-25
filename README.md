# Node.js Secure WebSocket Project

This project demonstrates a simple WebSocket implementation using Node.js. It includes a WebSocket server and client to establish real-time, bidirectional communication.

## Features

- WebSocket server running on `ws://localhost:8080`
- Client can send messages to the server
- Server responds to client messages
- Handles multiple connections

## Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later recommended)

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/piehostHQ/node-secure-websocket.git
   cd your-repo-name
 
Install dependencies:
```bash
npm install
```
Usage
Start the WebSocket Server
Run the server:
```bash
node server.js
```
The server will start and listen on ws://localhost:8080.
Start the WebSocket Client
Run the client:
```bash
node client.js
```
Enter messages to send to the server.
Example Interaction
Client sends a message:
```
Enter message to send: Hello, Server!
```
Server logs the message and responds:
```
Received: Hello, Server!
```
Client receives the server's response:
```
Message from server: Server received: Hello, Server!
