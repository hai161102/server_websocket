import { Vector3 } from "./Vector3";

export class User {
    public id: string = "";
    public position: Vector3 = new Vector3();
    public rotation: Vector3 = new Vector3();

    constructor(id?: string, position?: Vector3, rotation?: Vector3) {
        if (id) this.id = id;
        if (position) this.position = position;
        if (rotation) this.rotation = rotation;
    }
    
}