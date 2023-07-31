import { WebSocket, WebSocketServer } from "ws";
import { Vector3 } from "./utils/Vector3";
import { User } from "./utils/User";

const wss = new WebSocketServer({port: 8080});
const users : User[] = [];
wss.on('connection', (ws : WebSocket) => {
    let user : User = new User();
    user.position = new Vector3(Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10));
    users.push(user);
    let data = {
        tag : '',
        data : '',
    }
    data.tag = 'USER_IN';
    data.data = JSON.stringify(user);
    ws.send(JSON.stringify(data));
    data.tag = 'LIST_USER';
    data.data = JSON.stringify(user);
    ws.send(JSON.stringify(data));
    ws.on('message', (msg) => {
        console.log('User send', JSON.parse(msg.toString()));
    });
});