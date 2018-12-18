const config = {
    canvasWidth: 800,
    canvasHeight: 400
}

const colorSpectrumSketch = (p5) => {
    const { canvasWidth, canvasHeight } = config
    // Grid
    const Grid = () => {
        let stepX, stepY;
        const createGrid = () => {
            stepX = p5.mouseX + 2
            stepY = p5.mouseY + 2
            for (let gridY = 0; gridY < p5.height; gridY += stepY) {
                for (let gridX = 0; gridX < p5.width; gridX += stepX) {
                    p5.fill(gridX, p5.height - gridY, 100)
                    p5.rect(gridX, gridY, stepX, stepY)
                    
                }
            }
        }
        createGrid()   
    }
    p5.setup = () => {
        p5.createCanvas(canvasWidth, canvasHeight)
        p5.noStroke()
        p5.colorMode(p5.HSB, p5.width, p5.height, 100)
        // p5.noStroke()
    }
    p5.draw = () => {
        Grid()
    }
}

export  { colorSpectrumSketch }