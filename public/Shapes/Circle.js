class Circle {
    constructor(context, options = { x, y, radius, strokeColor }) {
        this.ctx = context
        this.options = {}
        this.setOptions(options)

        this.x = options.x;
        this.y = options.y;

    }
    setOptions(options) {
        Object.assign(this.options, options)
        
    }
    draw() {
        const { x, y, radius, strokeColor } = this.options
        // console.log(x, y, radius, strokeColor)
        this.ctx.strokeStyle = strokeColor
        this.ctx.beginPath()
        this.ctx.arc(this.x, this.y, radius, 0, Math.PI * 2, true)
        this.ctx.closePath()
        this.ctx.stroke()
        // console.log(this.x, this.y)
    }
    animate(x, y) {

    }
}

export default Circle
























// export default class Circle {
//     constructor(context, x, y, color, radius, stroke) {
//         this.ctx = context;
//         this.x = x;
//         this.y = y;
//         this.color = color;
//         this.radius = radius;
//         this.stroke = stroke;
//         this.speed = this.randomSpeed(0.01, 0.05);

//         console.log(this.speed)
//     }
//     draw() {
//         let isStroke = this.stroke ? true : false;

//         if (isStroke) this.ctx.fillStyle = this.color;
//         else this.ctx.strokeStyle = this.color;

//         this.ctx.beginPath();
//         this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
//         this.ctx.closePath();

        
//         if (isStroke)  this.ctx.fill();
//         else this.ctx.stroke()


//         return this.ctx;
//     }
//     randomSpeed(min, max) {
//         return Math.random() * (max - min + 1) + min;

//     }
// }