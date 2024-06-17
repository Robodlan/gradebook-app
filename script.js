function getAverage(scores){
    let avg = 0
    for (let x of scores) {
        avg += x / scores.length
    }
    return Math.floor(avg)
}


function getGrade(score){
 if (score === 100){
    return "A++";
 } else if (score >= 90) {
    return "A";
 } else if (score >= 80) {
    return "B";
 } else if (score >= 70) {
    return "C";
 } else if (score >= 60) {
    return "D";
 } else  {
    return "F";
 }
};

function hasPassingGrade(score){
  if (getGrade(score) !== "F"){
    return true
  } else {
    return false
  }
};

console.log(hasPassingGrade(90));
console.log(hasPassingGrade(77));
console.log(hasPassingGrade(60));
console.log(hasPassingGrade(40));