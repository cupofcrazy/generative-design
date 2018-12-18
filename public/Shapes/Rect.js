export default class Rect {
    constructor(context, x, y, width, height, color) {
        this.ctx = context;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }
    draw() {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, this.width, this.height);

        return this.ctx;
    }
}