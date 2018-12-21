/**
 * todo Update file
 */

const config = { width: 500, height: 500 }

const shapeSketch = (p5) => {
    // const { top, left } 
    const { width, height } = config
    const centerX = width / 2
    const centerY = height / 2

    p5.setup = () => {
        p5.createCanvas( width, height )
       
    }
    p5.draw = () => {
        p5.background(255)
        p5.translate(centerX, centerY)

        const circleRes = p5.map(p5.mouseY, 0, height, 2, 80)
        
        
    }
}

export { shapeSketch }