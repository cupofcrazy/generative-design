export default class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        console.log(this.getPoint())
    }
    getPoint() {
        return [this.x, this.y];
    }
    setPoint(x1, y1, x2, y2) {
        return {
            x1: x1,
            y1: y1,
            x2: x2,
            y2: y2
        }
    }
}