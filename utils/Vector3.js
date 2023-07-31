"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vector3 = void 0;
var Vector3 = /** @class */ (function () {
    function Vector3(x, y, z) {
        this.x = 0;
        this.y = 0;
        this.z = 0;
        if (x !== undefined)
            this.x = x;
        if (y !== undefined)
            this.y = y;
        if (z !== undefined)
            this.z = z;
    }
    return Vector3;
}());
exports.Vector3 = Vector3;
