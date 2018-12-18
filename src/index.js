import p5 from 'p5';


const config = {
    width: 400,
    height: 400
}

const ease = (t) =>  t<.5 ? 2*t*t : -1+(4-2*t)*t;


const sketch = (p5) => {

    const Grid = (width) => {
        let stepX, stepY;
        createGrid()
        const createGrid = () => {
            for (let gridY = 0; gridY < height; gridY += stepY) {
                for (let gridX = 0; gridX < width; gridX += stepX) {
                    p5.fill(gridX, height - gridY, 100)
                    p5.rect(gridX, gridY, stepX, stepY)
                    
                } 
            }
        }
    }
    // console.log(p5)
    
    const { width, height } = config
    const centerX = width / 2
    const centerY = height / 2

    const cursor = (d, weight) => {
        p5.noFill()
        p5.strokeWeight(weight)
        p5.ellipse(p5.mouseX, p5.mouseY, d, d)
    }

    const drawLine = n => {
        for (let i = 0; i < n; i++) {
            p5.line(0, 0, i * 20, p5.mouseY)
            p5.line(p5.mouseX, 0, i * 20, p5.mouseY)
            
        }
    }

    // setup
    p5.setup = () => {
        p5.createCanvas(width, height)
        p5.noCursor()

        p5.colorMode(p5.HSB, 360, 100, 100)
        p5.rectMode(p5.CENTER)
        // p5.noStroke()
    }

    // draw
    p5.draw = () => {
        p5.background(p5.mouseY / 2, 100, 100)
        p5.fill(360 - p5.mouseY / 2, 100, 100)
        p5.noStroke()
        p5.rect(width / 2, height / 2, p5.mouseX, p5.mouseX)
        cursor(30, 2)
        
        
    }
}


const P5 = new p5(sketch)