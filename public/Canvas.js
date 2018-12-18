/**
 * 
 * @param { String } id Canvas id attribute 
 * @param { Number } width Width of the canvas element
 * @param { Number } height Height of the canvas element
 * @param { String } backgroundColor The background color of canvas element 
 * 
 */
const createCanvas = ({ id, width, height, backgroundColor }) => {
    const canvasEl = document.createElement('canvas')
    canvasEl.setAttribute('id', id)
    canvasEl.width = width
    canvasEl.height = height
    canvasEl.style.backgroundColor = backgroundColor

    return canvasEl
}


module.exports =  { createCanvas }