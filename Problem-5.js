function  waitingTime(waitingTimes ,serialNumber) {

    if(!Array.isArray(waitingTimes) || typeof serialNumber !== 'number') {
        return 'Invalid Input';
    }

    let totalTime = 0;

    for(const x of waitingTimes) {
        totalTime += x;
    }

    const avgTime = Math.round(totalTime / waitingTimes.length);

    const serial = (serialNumber - 1) - waitingTimes.length;

    const leftTime = avgTime * serial;

    return leftTime;
}

const result1 = waitingTime([3, 5, 7, 11, 6], 10);
console.log(result1);  

const result2 = waitingTime([13, 2], 6);
console.log(result2); 

const result3 = waitingTime([13, 2, 6, 7, 10], 6);
console.log(result3); 

const result4 = waitingTime([6], 4);
console.log(result4);  

const result5 = waitingTime(7, 10);
console.log(result5);  

const result6 = waitingTime("[6,2]", 9);
console.log(result6);  

const result7 = waitingTime([7, 8, 3, 4, 5], "9");
console.log(result7);
