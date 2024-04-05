let a1 = localStorage.getItem('correct_ans');
let a2 = localStorage.getItem('incorrect_ans');

console.log(a1, a2);

document.getElementById('crt').innerText = "Correct answers = "+a1;
document.getElementById('incrt').innerText = "Incorrect answers = "+a2;
if(a1<=4){
    document.getElementById('analysis').innerText = "Final conclusion : There is scope of improvement";
}
else if(a1<=7){
    document.getElementById('analysis').innerText = "Final conclusion : You are doing good keep it up !";
}
else{
    document.getElementById('analysis').innerText = "Final conclusion : Your performance is excellent";
}
let counter = 1;
while (counter <= 10) {
    let q = localStorage.getItem('qst' + counter);
    let u = localStorage.getItem('ua' + counter);
    let c = localStorage.getItem('ca' + counter);

    document.getElementById('qst_no' + counter).innerText = q;
    document.getElementById('useranswer' + counter).innerText = u;
    document.getElementById('correctans'+counter).innerText=c;
    let userAnswerElement = document.getElementById('useranswer' + counter);
    let correctAnswerElement = document.getElementById('correctans' + counter);

    // Compare user's answer with correct answer
    if (u === c) {
        // If they match, display both answers in green
        userAnswerElement.style.color = 'green';
        correctAnswerElement.style.color = 'green';
    } else {
        // If they don't match, display user's answer in red and correct answer in green
        userAnswerElement.style.color = 'red';
        correctAnswerElement.style.color = 'green';
    }

    counter++;
}
