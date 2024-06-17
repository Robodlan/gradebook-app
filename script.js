function getAverage(scores){
    let avg = 0
    for (let x of scores) {
        avg += x / scores.length
    }
    return Math.floor(avg)
}
console.log(getAverage([87,98,55,44,22,33,44]));

function getGrade(score){
 if (score === 100){
    return "A++";
 } else if (score >= 90 && score <= 99) {
    return "A";
 } else if (score >= 80 && score <= 89) {
    return "B";
 } else if (score >= 70 && score <= 79) {
    return "C";
 } else if (score >= 60 && score <= 69) {
    return "D";
 } else  {
    return "F";
 }
};
console.log(getGrade(100));
console.log(getGrade(90));
console.log(getGrade(77));
console.log(getGrade(80));
console.log(getGrade(59));