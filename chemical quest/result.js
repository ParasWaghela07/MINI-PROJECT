let a1=localStorage.getItem('correct_ans')
let a2=localStorage.getItem('incorrect_ans')

console.log(a1,a2);

document.getElementById('crt').innerText=a1;
document.getElementById('incrt').innerText=a2;

let counter=1;
while(counter<=5){
    let q=localStorage.getItem('qst'+counter);
    let u=localStorage.getItem('ua'+counter);
    let c=localStorage.getItem('ca'+counter);
    
    document.getElementById('qst_no'+counter).innerText=q;
    document.getElementById('correctans'+counter).innerText=u;
    document.getElementById('useranswer'+counter).innerText=c;

    counter++;
}


console.log(q);
console.log(u);
console.log(c);