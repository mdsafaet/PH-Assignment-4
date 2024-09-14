
function calculateFinalScore(obj) {
    if (typeof obj !== 'object') {
        return 'Invalid Input';
    }

    const testScore = obj.testScore;
    const schoolGrade = obj.schoolGrade;
    const isFFfamily = obj.isFFamily;

    let totalScore = testScore + schoolGrade;

    if (isFFfamily) {
        totalScore += 20;
    }

  
    return totalScore >= 80;
}

const result = calculateFinalScore({ name: "Rajib", testScore: 45, schoolGrade: 25, isFFamily: true });
console.log(result); 

const result2 = calculateFinalScore({ name: "Rajib", testScore: 50, schoolGrade: 25, isFFamily: false });
console.log(result2); 

const result3 = calculateFinalScore('hello');
console.log(result3); 

const result4 = calculateFinalScore({ name: "Rajib", testScore: 15, schoolGrade: 25, isFFamily: true });
console.log(result4); 



