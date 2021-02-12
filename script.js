document.getElementById("st").addEventListener('click', start);

var advancementlist = ["Gather 3 Wood", "Get An Iron Pickaxe", "Create A Nether Portal", "Get Full Diamond", "Kill 10 Cows/Pigs"
                    , "Kill 10 Cows/Pigs", "Get An Iron Block", "Find a Village And Trade With A Villager", "Find an Ocean Monument"
                    , "Visit 3 Unique Biomes", "Start a Raid and Finish It", "Create a Dirt Hut", "Find Ancient Debris", "Find An Abandoned Mansion"
                    , "Find A Mineshaft", "Find 3 Wither Skulls and Prepare to Fight The Wither", "Find a Shipwreck", "Find the Stronghold"
                    , "Gather 10 Iron Ingots", "Gather 64 Smelted Stone", "Create a piston door", "Barter with a piglin until you get enderpearls"];
var initlist = advancementlist;

document.getElementById("chall").textContent = advancementlist.length + " Challenges Available!";

var amount = 0;
var finished = false;

var playing = false;

function end() {
    finished = true;
    document.body.innerHTML = document.body.innerHTML + 
    `<br><br>
    <div style="font-size: 50px; width: 60%;">
        <h1 style="text-decoration: underline;">Results</h1>
        <h1>Number of Challenges: ${amount}</h1>
        <h1 style="font-size: 18px;">Refresh The Page To Retry</h1>
        </div><br><br>`
    return;
}

function start() {
    if (playing)
        return;
    
    playing = true;
    
    document.getElementById("st").textContent = "Give Up"

    document.getElementById("st").style.width = "70px";
    document.getElementById("st").style.fontSize = "19px";
    document.getElementById("st").style.background = "#a30707";
    document.getElementById("st").addEventListener('click', end);

    /*
    var br10 = document.createElement("br");
    document.getElementById("sticky").appendChild(br10);*/
    var br19 = document.createElement("br");
    document.getElementById("sticky").appendChild(br19);
    

    var ins = document.createElement("input");
    ins.type = "number";
    ins.style.display = "inline-block";
    ins.id = "amount";
    ins.placeholder = "0";
    ins.style.float = "left";

    var letter = document.createElement("h1");
    letter.style.color = "white";
    letter.style.float = "left";
    letter.textContent = "ac"
    document.getElementById("sticky").appendChild(letter);

    document.getElementById("sticky").appendChild(ins);

    var ins2 = document.createElement("button");
    ins2.style.borderRadius = "1px";
    ins2.style.display = "inline-block";
    ins2.id = "ins";
    ins2.style.fontSize = "16px";
    ins2.style.background = "#e3e3e3";
    ins2.textContent = "Continue"
    ins2.style.float = "left";
    document.getElementById("sticky").appendChild(ins2);

    document.getElementById("hrthing").remove();

    var hr = document.createElement("hr");
    document.getElementById("sticky").appendChild(hr); 

    var br = document.createElement("br");
    document.body.appendChild(br);
    
    var br2 = document.createElement("br");
    document.body.appendChild(br2);

    document.getElementById("ins").addEventListener('click', insert);

    const idnum = `numid${amount}`;
    amount = amount + 1;
    var button = document.createElement("div");
    var number = Math.floor(Math.random() * advancementlist.length);
    var item = advancementlist[number];
    button.textContent = item;
    button.style.fontSize = "50px";
    advancementlist.splice(number, 1);

    button.style.width = "60%";
    button.id = idnum;

    document.body.appendChild(button);
    console.log(advancementlist)
}

function insert() {
    if (finished || document.getElementById("amount").value < 0)
        return;
    if (document.getElementById("amount").value >= initlist.length) {
        finished = true;
        document.body.innerHTML = document.body.innerHTML + 
        `<br><br>
        <div style="font-size: 50px; width: 60%;">
            <h1 style="text-decoration: underline;">Results</h1>
            <h1>Number of Challenges: ${amount}</h1>
            <h1 style="font-size: 18px;">Refresh The Page To Retry</h1>
            </div><br><br>`
        return;
    }
    if (document.getElementById(`amount`).value == 0) {
        document.getElementById("numid" + (amount - 1)).innerHTML = document.getElementById("numid" + (amount - 1)).textContent
        + `<br><h1 style="color: #b3b3b3; font-size: 20px;">`+"0 Advancements While Completing Challenge";
    } else {
        document.getElementById("numid" + (amount - 1)).innerHTML = document.getElementById("numid" + (amount - 1)).textContent
        + `<br><h1 style="color: #b3b3b3; font-size: 20px;">` + document.getElementById(`amount`).value
        + " Advancements While Completing Challenge";
    }

    var number = Math.floor(Math.random() * advancementlist.length);
    const ref = document.getElementById(`amount`).value;

    document.getElementById("amount").value = null;


    const idnum = `numid${amount}`;

    amount = amount + 1;
    if (advancementlist.length == 0) {
        finished = true;
        document.body.innerHTML = document.body.innerHTML + 
        `<br><br>
        <div style="font-size: 50px; width: 60%;">
            <h1 style="text-decoration: underline;">Results</h1>
            <h1>Number of Challenges: ${amount}</h1>
        </div><br><br>`
        
        return;
    }

    var br = document.createElement("br");
    document.body.appendChild(br);



    var button = document.createElement("div");
    var item = advancementlist[number];
    button.textContent = item;
    button.style.fontSize = "50px";

    button.style.width = "60%";
    button.id = idnum;

    if (ref == 0) {
        advancementlist.splice(number, 1);
        console.log(advancementlist.toString())
        document.body.appendChild(button);
        return;
    }

    advancementlist.splice(number, ref);
    console.log(advancementlist.toString())
    document.body.appendChild(button);
}

/*
* Code below probably from w3 schools idk xdxddxxd
*/

window.onscroll = function() {stickyfunction()};

var header = document.getElementById("sticky");

var sticky = header.offsetTop;

function stickyfunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("stick");
  } else {
    header.classList.remove("stick");
  }
}