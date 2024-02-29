let a1 = localStorage.getItem('correct_ans');
let a2 = localStorage.getItem('incorrect_ans');

console.log(a1, a2);

document.getElementById('crt').innerText = a1;
document.getElementById('incrt').innerText = a2;

let counter = 1;
while (counter <= 5) {
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
