let a1=localStorage.getItem('correct_ans')
let a2=localStorage.getItem('incorrect_ans')

console.log(a1,a2);

document.getElementById('crt').innerText=a1;
document.getElementById('incrt').innerText=a2;