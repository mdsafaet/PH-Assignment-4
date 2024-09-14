function sendNotification(email) {

    if (!email.includes('@')) {
        return 'Invalid Email';
    }

    const fullEmail = email.split('@');


    if (fullEmail.length !== 2 || fullEmail[0].length === 0 || fullEmail[1].length === 0) {
        return 'Invalid Email';
    }

  
    const notification = fullEmail[0] + ' sent you an email from ' + fullEmail[1];
    return notification;
}

const result = sendNotification('zihad@gmail.com');
console.log(result);

const result2 = sendNotification(' farhan34@yahoo.com ');
console.log(result2);

const result3 = sendNotification(' nadim.naem5@outlook.com ');
console.log(result3);

const result4 = sendNotification(' fahim234.hotmail.com ');
console.log(result4);

const result5 = sendNotification(' sadia8icloud.com ');
console.log(result5);
