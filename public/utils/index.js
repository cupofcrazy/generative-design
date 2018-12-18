module.exports = {
    query: (element) => {
        return document.querySelector(element)
    },
    queryAll: (elements) => {
        // Array.from(Node elements) shorthand
        return [...document.querySelectorAll(elements)]
    },
    randomInt: (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    },
    dist: (x1, y1, x2, y2) => {
        return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
    },
    angToRad: (angle) => {
        return angle * Math.PI / 180;
    },
    colors: [
        '#FFE74C', '#FF5964', '#35A7FF',
        '#FFFFFF', '#011627', '#004E64',
        '#00A5CF', '#9FFFCB', '#25A18E',
        '#E4572E', '#F3A712', '#A8C686',
        '#3D348B', '#7678ED', '#F7B801',
        '#F18701', '#00C9B1', '#005D6C',
        '#00043C', '#AAAAAA', '#BBBBBB',
        '#FFEBB7', '#BFF4ED', '#280F34',
    ]
}