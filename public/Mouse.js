

import { TweenMax } from 'gsap'
/**
 * @param { String } options Width / Height of mouse
 */

export default class Cursor {
    constructor(parent, options = {}) {
        this.parent = parent;
        this.mouse = null;
        this.options = options;
        this.dim = null;
        this.color = null;

    }
    setOptions(opts) {
        const o = this.options;
        o.dimensions = opts.dimensions
        o.borderWidth = opts.borderWidth;
    }
    init() {
        this.createMouse(this.parent)
        this.setStyles()
        this.initMouseEvents()
        this.dim = this.options.dimensions;
        this.ease = this.options.ease;
        this.color = this.options.color;

        console.log(this.color)
    }
    createMouse(parent) {
        this.mouse = document.createElement('div')
        this.mouse.setAttribute('class', 'js-mouse')
        
        if (parent) {
            console.log({ parent })
            parent.appendChild(this.mouse)
        }

    }
    setStyles() {
        const mouse = this.mouse
        if (this.options.hideCursor) {
            this.parent.style.cursor = 'none';
        }
        
        // const dim = this.options.dimensions;
        console.log(mouse)
        if (mouse) {

            mouse.style.width = `${this.options.dimensions}px`;
            mouse.style.height = `${this.options.dimensions}px`;
            mouse.style.border = `${this.options.borderWidth}px solid ${this.options.color}`
            mouse.style.position = `absolute`
            mouse.style.borderRadius = '50%'
        }
        
    }
    initMouseEvents() {
        this.parent.addEventListener('mousemove', (e) => this.mouseMove(e))
    }
    mouseMove(e) {
        // console.log(this.dim)
        const x = e.pageX - (this.dim / 2)
        const y = e.pageY - (this.dim / 2)

        TweenMax.to(this.mouse, this.ease, {
            x, y,
            ease: Expo.easeInOut
        })

    }
}