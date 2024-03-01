const states=[
    'Maharashtra','gujarat','rajasthan','madhya-pradesh','andhra-pradesh','karnataka','tamil-nadu','jammu & kashmir','uttar-pradesh','orrisa','chhattisgarh','bihar','jharkhand','west-bengal','punjab','himanchal-pradesh','uttaranchal'
];
let allinputs=document.querySelectorAll("input[type='radio']");
let userAns;
let q;
function load(){
    q=states[Math.floor(Math.random()*states.length)]
    console.log("Q ka value == ", q);
    document.getElementById('qst').innerText=q;
}


// console.log(allinputs)

    
    document.getElementById('btn').addEventListener('click',function(){
        allinputs.forEach(element => {
            if(element.checked==true){
                userAns=element.value
                return;
            }
        });
    
        if(q.toUpperCase()===userAns.toUpperCase()){
            document.getElementById('res').innerText="Sahi he";
        }
        else{
            document.getElementById('res').innerText="galt he";
        }
        console.log(q);
        console.log(userAns);
    })

    load();





