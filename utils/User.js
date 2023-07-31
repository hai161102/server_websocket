"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var Vector3_1 = require("./Vector3");
var User = /** @class */ (function () {
    function User(id, position, rotation) {
        this.id = "";
        this.position = new Vector3_1.Vector3();
        this.rotation = new Vector3_1.Vector3();
        if (id)
            this.id = id;
        if (position)
            this.position = position;
        if (rotation)
            this.rotation = rotation;
    }
    return User;
}());
exports.User = User;
