export class Vector3 {
    public x: number = 0;
    public y: number = 0;
    public z: number = 0;

    constructor(x?: number, y?: number, z?: number) {
        if (x !== undefined) this.x = x;
        if (y !== undefined) this.y = y;
        if (z !== undefined) this.z = z;        
    }

}