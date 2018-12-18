import * as p5 from 'p5'

const config = {
    width: 400,
    height: 400
}

const sketch = (p5) => {
    // Grid
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
}