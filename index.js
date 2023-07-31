"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ws_1 = require("ws");
var Vector3_1 = require("./utils/Vector3");
var User_1 = require("./utils/User");
var wss = new ws_1.WebSocketServer({ port: 8080 });
var users = [];
wss.on('connection', function (ws) {
    var user = new User_1.User();
    user.position = new Vector3_1.Vector3(Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10));
    users.push(user);
    var data = {
        tag: '',
        data: '',
    };
    data.tag = 'USER_IN';
    data.data = JSON.stringify(user);
    ws.send(JSON.stringify(data));
    data.tag = 'LIST_USER';
    data.data = JSON.stringify(user);
    ws.send(JSON.stringify(data));
    ws.on('message', function (msg) {
        console.log('User send', JSON.parse(msg.toString()));
    });
});
