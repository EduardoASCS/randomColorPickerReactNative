function random() {
    const randomColor = [];
    
    for (let i = 0; i < 3; i++) {
        randomColor.push(Math.floor(Math.random() * 256))
    }
    
    return randomColor
}

export default random