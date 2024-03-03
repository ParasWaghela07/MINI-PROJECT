const states=[
    'Andaman and Nicobar','Telangana','Andhra Pradesh','Arunachal Pradesh','Assam','Bihar','Chandigarh','Chhattisgarh','Dādra and Nagar Haveli and Damān and Diu','Delhi','Goa','Gujarat','Haryana','Himachal Pradesh','Jharkhand','Karnataka','Kerala','Madhya Pradesh','Maharashtra','Manipur','Meghalaya','Mizoram','Nagaland','Orissa','Puducherry','Punjab','Rajasthan','Sikkim','Tamil Nadu','Tripura','Uttar Pradesh','Uttaranchal','West Bengal','Lakshadweep','Jammu and Kashmir','Ladakh'
];
let p = document.getElementsByTagName('path')
let userAns;
let q;
let lives=3;
let score=0;
function load(){
    let random=Math.floor(Math.random()*states.length);
    q=states[random]
    console.log("Q ka value == ", q);
    document.getElementById('qst').innerText=q;
    states.splice(random, 1);
}


// console.log(allinputs)

        document.getElementById('playAgain').addEventListener('click',function(){
            location.reload();
        })
        Array.from(p).forEach(element => {
            element.addEventListener('click',function(){
                if(lives==0){
                    return;
                }
                userAns=this.getAttribute('name');

                if(q.toUpperCase()===userAns.toUpperCase()){
                    score++;
                    document.getElementById('score').innerText='Score : '+ score;
                    this.style.fill='lightgreen';
                }
                else{
                    let h=document.getElementById('heart'+lives);
                    h.style.color='rgb(255, 204, 203)';
                    lives--;
                    this.style.fill='red';
                }

                if(lives==0){
                    document.getElementById('go').innerText="GAME OVER"
                    return;
                }


                    
        
            console.log(q);
            console.log(userAns);
            load();

            })

        });


    load();












