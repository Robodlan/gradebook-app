function getAverage(scores){
    let avg = 0
    for (let x of scores) {
        avg += x / scores.length
    }
    return Math.floor(avg)
}
console.log(getAverage([87,98,55,44,22,33,44]));