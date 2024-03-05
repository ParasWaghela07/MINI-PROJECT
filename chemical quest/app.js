const elements=[
    { key: "I'm the lightest gas, yet I'm found in every star's mass. With just one proton, I'm number one, in the periodic table, I've already won. What am I?", value: "Hydrogen" },
    { key: "Lighter than air, I'll make balloons soar, from the ground to the sky, they'll explore.I'm the gas that makes voices high,Who am I?", value: "Helium" },
    { key: "I'm the lightest of the metals, with a charge that settles. In batteries, I power the way, with ions that sway. What am I?", value: "Lithium" },
    { key: "With an atomic number of four, I'm the element you can't ignore. In aerospace and medical gear, my presence is quite clear. What's my name, in the metal game?", value: "Beryllium" },
    { key: "I'm the metalloid with number five, in compounds, I'm quite alive. Used in detergents and glass, my versatility is first-class. Who am I?", value: "Boron" },
    { key: "In diamonds, I'm a sight to behold, with structures so pure, and stories untold. In pencils, I leave my mark, in every stroke, I embark. Who am I?", value: "Carbon" },
    { key: "In the air, I'm abundant and free, yet in compounds, I help grow a tree. With a triple bond that's strong and true, what am I, in this clue?", value: "Nitrogen" },
    { key: "In the atmosphere, I'm quite the star, in respiration, I play my part. With a double bond, I'm always on demand. Who might I be?", value: "Oxygen" },
    { key: "In the halogen clan, I stand alone, with reactivity that's well known. Used in solvents and pesticides, in chemistry, I preside. What's my name, in this ride?", value: "Fluorine" },
    { key: "In colourful lights, I make my scene, glowing bright, in red, blue, and green. With a noble gas flair, I light up the air. What am I?", value: "Neon" },
    { key: "Put me in water and I burn,From the periodic table, I'm group 1, with reactivity that's second to none. Who am I?", value: "Sodium" },
    { key: "With a burning flare, I ignite the night, in fireworks, I shine so bright.In the periodic table, I'm number 12, with a role in life, I delve. What am I?", value: "Magnesium" },
    { key: "In cans and foil, I make my mark, with properties both light and dark.With a silvery gleam, I catch the eye, What am I?", value: "Aluminium" },
    { key: "In sand and glass, I'm found with ease, in crystals, I form with a squeeze. With a role in semiconductors, I'm a conductor of many factors. Who might I be?", value: "Silicon" },
    { key: "In matches, I strike the flame, in bones, I claim my name. With a glow in the dark, I leave my mark. Arriving 15th is my task, What am I?", value: "Phosphorus" },
    { key: "In gunpowder and medicines, I'm found, in every compound, I'm bound. With a yellow hue, in every view, what element rings true?", value: "Sulphur" },
    { key: "In drinking water and sanitation, I play my part, in every treatment, I impart. With a disinfecting spree, in every spree, what element could I be?", value: "Chlorine" },
    { key: "With the 3rd most abundant gas title, I become a noble,in the Earth's atmosphere, my presence global. What am i?", value: "Argon" },
    { key: "I am silvery white, with a gleaming light, Easy to cut by a knife, I shine so bright.", value: "Potassium" },
    { key: "In the periodic table, I'm number twenty, In every reaction, I'm plenty. With a role in health and strength, In every bone, I extend. Guess my name, in this length.", value: "Calcium" },
    { key: "Named after the Titans, I am strong, In alloys and structures, I belong. With a lustrous sheen, I gleam so bright, In every application, I take flight. What am I?", value: "Titanium" },
    { key: "In steel, I give strength, steadfast and true, In every alloy, I come through. With a magnetic allure, I'm found in ores, In every application, my presence soars. What am I?", value: "Manganese" },
    { key: "In blood, I carry life's breath, In every cell, I prevent death. With a strength that's unmatched, In every alloy, I'm hatched. What am I?", value: "Iron" },
    { key: "In magnets strong, I play a part, With a magnetic field, I impart. In every alloy, I'm found, In every application, I'm renowned. What am I?", value: "Cobalt" },
    { key: "In stainless steel, I provide resistance, In every form, I'm persistence. With a role in plating and coins, In every use, I join. Guess my name, in this groins.", value: "Nickel" },
    { key: "In the periodic table, I'm element 29, In every reaction, I shine. In wires and pipes, I take my stand, In every circuit, I expand. With a role in industry and art, In every function, I play my part. What am I, in this chart?", value: "Copper" },
    { key: "In galvanizing steel, I play a role, In every coat, I console. With a bluish-white sheen, I gleam so bright, In every application, I'm just right. What am I?", value: "Zinc" },
    { key: "In the periodic table, I'm element 35, In every reaction, I survive. In swimming pools, I'm quite the tool, Turning water to a red-brown pool. With a role in fire safety and disinfection, In every function, I take action. What am I, in this collection?", value: "Bromine" },
    { key: "In noble gases, I take my stance, In every reaction, I enhance. With a name that's Greek for \"hidden one\", In every use, I'm second to none. Who am I?", value: "Krypton" },
    { key: "In jewellery and coins, I gleam, a prized adornment's theme, Yet, soft I seem, a metal of a dream.Malleable and dense, with a hue serene,Resistant to corrosion, a treasure unseen, In every use, I'm keen.What am I?", value: "Silver" },
    { key: "In thyroid glands, I'm a crucial part, Regulating hormones, I play my part.In seafood and salt, I'm found with ease, In every dish, I appease. With a role in health and nutrition, In every function, I'm a tradition. Who might I be?", value: "Iodine" },
    { key: "In the periodic table, I'm element 54, In every reaction, I am sore.With a presence that's noble and rare, In every demand, I'm there. What's my name, in this affair?", value: "Xenon" },
    { key: "In precious metals, I'm the king, In every blend, I bring. With a lustre that's bright and bold, In every application, I'm sold. Who am I?", value: "Platinum" },

    { key: "In thermometers and barometers, I take my place, With a silvery gleam, I embrace. Liquid at room temperature, I flow, In every measure, I show. What am I?", value: "Mercury" },
    { key: "In rivers and lakes, I gently flow, In every drop, I bestow. Transparent and clear, I am found, In every life, I am bound. What am I?", value: "Water (H2O)" },
    { key: "In every kitchen, I'm a staple find, Enhancing flavors of every kind. Crystalline and white, I stand, In every dish, I expand. What am I?", value: "NaCl (Salt)" },
    { key: "In every breath, I am expelled, In every plant, I'm compelled. Colorless and odorless, I roam, In every cycle, I find home. What am I?", value: "Carbon Dioxide" },
    { key: "In every sweet treat, I'm the star, In every cell, I travel far. With a molecular formula, C6H12O6, In every energy burst, I fix. What am I?", value: "Glucose" },
    { key: "In swamps and marshes, I bubble and rise, In every cow's gut, I comprise. With a chemical formula, CH4, In every flame, I soar. What am I?", value: "Methane" },
    { key: "In cleaning products, I'm often found, In every solution, I'm renowned. With a pungent smell, I'm quite distinct, In every use, I'm succinct. What am I?", value: "Ammonia" },
    { key: "In drinks and fuels, I play my part, In every fermentation, I start. With a molecular formula, C2H5OH, In every reaction, I go. What am I?", value: "Ethanol" },
    { key: "In batteries and industry, I'm the core, As a strong acid, my presence roars.With sulphur in my name, I'm sure,will corrode everything if I am pure.What am I?", value: "Sulphuric Acid" },
    { key: "In vinegar, I'm the tangy flavor, In every pickle, I savor.As a weak acid, I never waver.Who am I?", value: "Acetic Acid" },
    { key: "In fertilizers and explosives, I'm renowned, As a strong acid, I astound. With a formula HNO3, In every reaction, I decree. What am I?", value: "Nitric Acid" },
    { key: "In laundry and cleaning, I take my place, As washing soda, I embrace.With a white crystalline appearance, I'm found, In every reaction, I'm bound. What am I?", value: "Sodium Carbonate" },
    { key: "In baking and cleaning, I'm the star, As baking soda, I go far.As a white powder, I'm known, In every mixture, I'm shown. What am I?", value: "Sodium Bicarbonate" },
    { key: "In pans and pots, I'm quite slick, In every flip, I do the trick. With a non-stick surface, I'm known, In every kitchen, I'm shown. I am a polymer .What am I?", value: "Teflon" },
    { key: "In pipes and cables, I'm quite strong, In every structure, I belong. With a polymer structure, I'm made, In every use, I don't fade. What am I?", value: "PVC" },
    { key: "In fuels and solvents, I'm the star, With a sweet smell, I'm known from afar. With a hexagonal structure, I'm shown, In every compound, I'm known. What am I?", value: "Benzene" },
    { key: "In anesthetic dreams, I make my mark, In every surgery, I embark. With a formula CHCl3, In every use, I'm set free. What am I?", value: "Chloroform" },
    { key: "In pigments and rust, I'm seen, In every surface, I convene. With a reddish-brown hue, I'm known, In every compound, I'm shown. What am I?", value: "Ferric Oxide" },
    { key: "In antacids and supplements, I'm found, Left after sparkles, I abound. With a formula MgO, In every compound, I show. What am I?", value: "Magnesium Oxide" },
    { key: "In cement and agriculture, I'm the key, Used in mortar, I guarantee. With a chemical formula Ca(OH)2, In every solution, I ensue. With properties of being alkaline, In water treatment, I shine. What am I?", value: "Calcium Hydroxide" },
    { key: "In construction and industry, I play a role, Used in cement, I make things whole. With a chemical formula CaO, In every compound, I go. In the process of making lime, In every reaction, I chime. What am I?", value: "Calcium Oxide" },
    { key: "In winemaking and preservation, I'm key, In every bottle, I guarantee. With a chemical formula SO2, In every compound, I ensue.  What am I?", value: "Sulphur Dioxide" },
    { key: "In air pollution and smog, I thrive, In every city, I connive. With a chemical formula NO2, In every compound, I pursue. What am I? ", value: "Nitrogen Dioxide" },
    { key: "In photography and mirrors, I'm sought, In every image, I'm brought. With a chemical formula AgCl, In every compound, I dwell. What am I?", value: "Silver Chloride" },
    { key: "In jewellery, I gleam, a prized adornment's theme, Yet, soft I seem, a metal of a dream.Malleable and dense, with a hue serene,Resistant to corrosion, a treasure unseen, In every use, I'm keen.What am I?", value: "Gold" },
    { key: "In pencils and pipes, I'm quite dense,In every use, I commence.Used in batteries and shielding,I'm the key,In every function, I guarantee.What am I?", value: "Lead" },
    { key: "In pigments and batteries, I'm the star, In every use, I go far.With a silvery-white hue, I'm known, In every compound, I'm shown.With a unique property of being highly toxic, In every precaution, I'm a topic.What am I?", value: "Cadmium" },
    { key: "In reactors and bombs, I wield great might,In every process, I ignite.With a radioactive glow, I'm known,In every compound, I'm shown.What am I?", value: "Uranium" },
    { key: "In glow-in-the-dark paint, I leave my trace, In every watch, I embrace. With a radioactive gleam, I'm known, In every compound, I'm shown. What am I?", value: "Radium" },
    { key: "In the depths of labs, I'm synthesized, Named after a scientist, I'm prized. With a fleeting existence, I'm known, In every reaction, I'm shown. What am I?", value: "Rutherfordium" },
    { key: "In light bulbs and electrodes, I'm the core, In every filament, I soar. With a high melting point, I'm known, In every compound, I'm shown. What am I?", value: "Tungsten" },
    { key: "In fertilizers and salt substitutes, I'm found, In every soil, I'm renowned. With a chemical formula KCl, In every compound, I dwell. What am I?", value: "Potassium Chloride" },
    { key: "In stomachs and cleaning, I'm the star, As a strong acid, I go far. With a corrosive touch, I'm known, In every solution, I'm shown. What am I?", value: "Hydrochloric Acid (HCl);" },
    { key: "In combustion and poisoning, I'm feared, From vehicles, I'm often steered. With every breath, I'm a foe, In every danger, I show. What am I?", value: "Carbon Monoxide" },
    { key: "In deicing and dust control, I'm used, In every road, I'm infused. As a brine solution, I prevail, In every winter, I never fail. What am I?", value: "Magnesium Chloride" },
    { key: "In sunscreens and ointments, I'm the key, In every protection, I decree. Used to shield from harmful rays, In every application, I'm praised. What am I?", value: "Zinc Oxide" },
    { key: "In soaps and cleaners, I'm quite strong, In every solution, I belong. Used to unclog drains with ease, In every use, I appease. What am I?", value: "Sodium Hydroxide" },
    { key: "In photography and medicine, I shine, In every application, I define. Used to capture images with light, In every reaction, I'm bright. What am I?", value: "Silver Nitrate" },
    { key: "In plastic bags and bottles, I'm the core, In every use, I endure. With a flexible structure, I'm known, In every compound, I'm shown. What am I?", value: "Polythene" },
    { key: "In packaging and insulation, I'm found, Used to make thermocol, I'm renowned. With a lightweight structure, I'm known, In every compound, I'm shown. What am I?", value: "Polystyrene" },
    { key: "In clothing and carpets, I'm quite neat, In every fabric, I compete. With a strong and durable thread, In every use, I'm led. What am I?", value: "Nylon" },
    { key: "In bottles and packaging, I'm seen, In every container, I convene. With a chemical structure that's strong, In every product, I belong. What am I?", value: "Polyethylene Terephthalate" },
    { key: "In clothing and winterwear, I'm quite grand, In every fabric, I expand. With a chemical structure that's tough, In every use, I'm enough. What am I?", value: "Polyacrylonitrile" },
    { key: "In tires and erasers, I'm found, Made by isoprene, I'm renowned. With a stretchy and elastic feel, In every product, I seal. What am I?", value: "Natural Rubber" }
    
];
 
const formcControlCheckbox = document.querySelectorAll('.cbox');

formcControlCheckbox.forEach(onebyone => {
    onebyone.addEventListener('click', function() {
        formcControlCheckbox.forEach(otherCheckbox => {
            if (onebyone !== otherCheckbox) {
                otherCheckbox.checked = false;
            }
        });
        onebyone.checked = true;
    });
});


let to_enter;
let allinputs=document.querySelectorAll("input[type='checkbox']");
let correct=0;
let incorrect=0;
let times=0;
let qstno=1;
let userAns=1;
let crtAns=1;

function checkRepeat(s) {
    if (s === allinputs[0].nextElementSibling.innerText ||
        s === allinputs[1].nextElementSibling.innerText ||
        s === allinputs[2].nextElementSibling.innerText ||
        s === allinputs[3].nextElementSibling.innerText) {
        return true;
    }

    return false; 
}

function load(){
    reset();
    times++;
    console.log(times);
    if(times==10){
        document.getElementById('submitbtn').innerText="SUBMIT";
    }
    if(times==11){
        return finishQuiz();
    }
    console.log("correct=" + correct,"incorret = "+incorrect);
    let random=Math.floor(Math.random()*elements.length)
    to_enter=elements[random];
    elements.splice(random, 1);

    localStorage.setItem('qst'+qstno,to_enter.key);
    console.log(to_enter.key);
    qstno++;

    document.getElementById("qstbox").innerText=`${times}) ${to_enter.key}`;

    for(let i=0;i<=3;i++){
        while(1){
            // console.log("in temp")
            let random=elements[Math.floor(Math.random() * elements.length)].value;
            if(checkRepeat(random)===false){
                allinputs[i].nextElementSibling.innerText=random;
                // console.log("Heyaa")
                break;
            }
        }
    }
    // allinputs[0].nextElementSibling.innerText=elements[Math.floor(Math.random() * elements.length)].value;
    // allinputs[1].nextElementSibling.innerText=elements[Math.floor(Math.random() * elements.length)].value;
    // allinputs[2].nextElementSibling.innerText=elements[Math.floor(Math.random() * elements.length)].value;
    // allinputs[3].nextElementSibling.innerText=elements[Math.floor(Math.random() * elements.length)].value;

    let flag=0;
    for(let i=0;i<=3;i++){
        if(to_enter.value===allinputs[i].nextElementSibling.innerText){
            allinputs[i].nextElementSibling.innerText=to_enter.value;
            flag++;
            break;
        }
    }

    if(flag==0){
    let ansIndex=Math.floor(Math.random()*allinputs.length);
    allinputs[ansIndex].nextElementSibling.innerText=to_enter.value;
    }
}


document.getElementById("submitbtn").addEventListener('click',function(){
    let ans=getAnswer();
    let correctAns = to_enter.value;
    console.log("ANS:",correctAns,"USER ANS :",ans);

    localStorage.setItem('ua'+userAns,ans);
    userAns++;
    localStorage.setItem('ca'+crtAns,correctAns);
    crtAns++;

    if(ans == correctAns){
        correct++;
    }
    else{
        incorrect++;
    }
    load();
})


function getAnswer(){
    let ans;
    allinputs.forEach((it)=>{
        if(it.checked==true){
            ans=it.nextElementSibling.textContent;
        }
    })
    return ans;
}

load();

function reset(){
    allinputs.forEach((it)=>{
        if(it.checked==true){
            it.checked=false;
        }
    })
}

function finishQuiz(){
    localStorage.setItem('correct_ans',correct)
    localStorage.setItem('incorrect_ans',incorrect)
    window.location.href = "sampleresult.html";

}

console.log(elements.length)
