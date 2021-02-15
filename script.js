// NJS (Beta)
/** * The Main Function for NJS * @param Brackets Add '[]' around text to label it as an id * @param Astreiks Use '*' to label the entire body * @param Tags Use HTML Tags ex. h1, h2, h3, b, for all tags in the Body */ function n(obj) { if (obj == "*") { return new body(); } if (contains(obj, "[") && contains(obj, "]")) { let o = obj; o = o.replace("[", ""); o = o.replace("]", ""); return new idbased(o); } return new tagbased(obj); } function contains(ob, string) { if (ob.indexOf(string) >= 0) { return true; } return false; } class tagbased { constructor(object) { this.obj = object; } /** * Deletes The Given Object : Tags, IDs */ del() { var element = document.getElementsByTagName(this.obj), index; for (index = element.length - 1; index >= 0; index--) { element[index].parentNode.removeChild(element[index]); } } /** * Sets The Text of the given object : Tags, IDs */ del(text) { var element = document.getElementsByTagName(this.obj), index; for (index = element.length - 1; index >= 0; index--) { element[index].parentNode.textContent = text; } } } class idbased { constructor(object) { this.obj = object; /** * Returns The Value of Text if the ID Provided is an input : IDs */ this.val = document.getElementById(this.obj).value; } /** * Deletes The Given Object : Tags, IDs */ del() { document.getElementById(this.obj).remove(); } /** * Resets The Value of Object (Only For Inputs) : IDs */ clear() { document.getElementById(this.obj).value = null; } /** * Sets the text of the given ID : IDs * @param text */ setText(text) { document.getElementById(this.obj).textContent = text; } /** * Sets the HTML of the given ID : IDs * @param HTML */ setHTML(text) { document.getElementById(this.obj).innerHTML = text; } /** * Hides the Current Object */ hide() { document.getElementById(this.obj).style.visibility = "hidden"; } /** * Shows the Current Object */ show() { document.getElementById(this.obj).style.visibility = "visible"; } } class body { /** * Adds content to the Body : Body * @param HTML */ add(contents) { document.body.innerHTML += contents; } /** * Create a Static-based PHP (Recommended only for Github Pages) * Credits: * https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript/901144#901144 */ getUrlValues(name, url = window.location.href) { name = name.replace(/[\[\]]/g, '\\$&'); var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'), results = regex.exec(url); if (!results) return null; if (!results[2]) return ''; return decodeURIComponent(results[2].replace(/\+/g, ' ')); } }
// #######################################
document.getElementById("st").addEventListener('click', start);
document.getElementById("aloc").addEventListener('click', urlrepl);
document.getElementById("chall").addEventListener('click', changecolor);

var version = n("*").getUrlValues("v");
var mode = n("*").getUrlValues("style");

function changecolor() {
    var newUrl = "./index.html?";

    if (mode == null || mode != "light")
        newUrl += "style=light";
    else
        newUrl += "style=dark";
    if (version != null)
        newUrl += "&v=" + version;
    
    window.location.replace(newUrl);
}

function urlrepl() {
    
    var newUrl = "./rules.html?";

    if (mode != null)
        newUrl += "style=" + mode;
    if (version != null)
        newUrl += "&v=" + version;
    
    window.location.replace(newUrl);

}

var advancementlist = ["Gather 3 Wood", "Get An Iron Pickaxe", "Create A Nether Portal", "Get Full Diamond", "Kill 10 Cows/Pigs"
                    , "Get An Iron Block", "Find a Village And Trade With A Villager", "Find an Ocean Monument"
                    , "Visit 3 Unique Biomes", "Start a Raid and Finish It", "Create a Dirt Hut", "Get a Diamond Axe", "Find A Woodland Mansion"
                    , "Find A Mineshaft", "Kill a Snowman", "Find a Shipwreck", "Find Pigstep and Play It", "Find and mine coarse dirt"
                    , "Gather 10 Iron Ingots", "Gather 64 Smelted Stone", "Create a piston door", "Barter with a piglin until you get enderpearls"
                    ,"Enchant your current item with Bane of Artheropods", "Get 5 Dogs", "Create a house made entirely with stripped logs"
                    , "Breed 2 dogs", "Find A Bastion", "Get a Netherite Pick", "Create a TNT Cannon", "Find a revine and remove all visable ores", "Mine Obsidian"
                    , "Find a ruined portal and obtain a Golden Apple from the chest", "Ignite TNT", "Enter the Nether \(If you haven't already\) and find any biome"];
if (mode != null && mode == "light") {
    document.getElementsByTagName("html")[0].style.color = "black";
    document.getElementsByTagName("html")[0].style.backgroundColor = "white";
    document.getElementById("st").style.backgroundColor = "#06cc7a";
    document.getElementById("st").style.color = "white";
        
    document.getElementsByTagName("header")[0].style.backgroundColor = "whitesmoke";
    document.getElementsByTagName("header")[0].style.color = "black";
    
    document.getElementsByTagName("h1")[0].style.color = "black";
        
    try {
        document.getElementById("stick").style.background = "whitesmoke";
    } catch (error) {   }
}


if (version != null) {
    switch (version) {
        case "1.2":
            advancementlist = ["Gather 3 Wood", "Get An Iron Pickaxe", "Create A Nether Portal", "Get Full Diamond", "Kill 10 Cows/Pigs"
                    , "Get An Iron Block", "Find a Village And Trade With A Villager", "Find an Ocean Monument"
                    , "Visit 3 Unique Biomes", "Start a Raid and Finish It", "Create a Dirt Hut", "Get a Diamond Axe", "Find A Woodland Mansion"
                    , "Find A Mineshaft", "Kill a Snowman", "Find a Shipwreck", "Find Pigstep and Play It", "Find and mine coarse dirt"
                    , "Gather 10 Iron Ingots", "Gather 64 Smelted Stone", "Create a piston door", "Barter with a piglin until you get enderpearls"
                    ,"Enchant your current item with Bane of Artheropods", "Get 5 Dogs", "Create a house made entirely with stripped logs"
                    , "Breed 2 dogs", "Find A Bastion", "Get a Netherite Pick", "Create a TNT Cannon", "Find a revine and remove all visable ores", "Mine Obsidian"
                    , "Find a ruined portal and obtain a Golden Apple from the chest", "Ignite TNT", "Enter the Nether \(If you haven't already\) and find any biome"];
            break;
        case "1.1":
            advancementlist = ["Gather 3 Wood", "Get An Iron Pickaxe", "Create A Nether Portal", "Get Full Diamond"
                , "Kill 10 Cows/Pigs", "Get An Iron Block", "Find a Village And Trade With A Villager", "Find an Ocean Monument"
                , "Visit 3 Unique Biomes", "Start a Raid and Finish It", "Create a Dirt Hut", "Find Ancient Debris", "Find An Abandoned Mansion"
                , "Find A Mineshaft", "Find 3 Wither Skulls and Prepare to Fight The Wither", "Find a Shipwreck", "Find the Stronghold"
                , "Gather 10 Iron Ingots", "Gather 64 Smelted Stone", "Create a piston door", "Barter with a piglin until you get enderpearls"	                 
                ,"Enchant your current item with Bane of Artheropods", "Tame a parrot", "Get 5 Dogs", "Create a house made entirely with stripped logs"
                , "Breed 2 dogs", "Find A Bastion", "Get a Netherite Pick", "Create a TNT Cannon", "Find a revine and remove all visable ores", "Mine Obsidian"
                , "Find a ruined portal and obtain a Golden Apple from the chest"];
            break;
        case "1.0":
            advancementlist = ["Gather 3 Wood", "Get An Iron Pickaxe", "Create A Nether Portal", "Get Full Diamond", "Kill 10 Cows/Pigs"
                    , "Kill 10 Cows/Pigs", "Get An Iron Block", "Find a Village And Trade With A Villager", "Find an Ocean Monument"
                    , "Visit 3 Unique Biomes", "Start a Raid and Finish It", "Create a Dirt Hut", "Find Ancient Debris", "Find An Abandoned Mansion"
                    , "Find A Mineshaft", "Find 3 Wither Skulls and Prepare to Fight The Wither", "Find a Shipwreck", "Find the Stronghold"
                    , "Gather 10 Iron Ingots", "Gather 64 Smelted Stone", "Create a piston door", "Barter with a piglin until you get enderpearls"];
            break;
        
    }
}


var initlist = advancementlist;

n("[chall]").setText(advancementlist.length + " Challenges Available!");

var amount = 0;
var finished = false;

var playing = false;

function end() {
    finished = true;
    n("*").add(`<br><br>
        <div style="font-size: 50px; width: 60%;">
        <h1 style="text-decoration: underline;">Results</h1>
        <h1>Number of Challenges: ${amount}</h1>
        <h1 style="font-size: 18px;">Refresh The Page To Retry</h1>
        <a href="https://nat3z.github.io/" style="font-size: 17px">nat3z.github.io</a>
        </div><br><br>`)
    document.getElementById("st").innerHTML = "<br><h1>Refresh</h1><br>";
    return;
}

function start() {
    if (playing)
        return;
    n("[chall]").hide();
    playing = true;
    n("[delete]").del();
    document.getElementById("st").innerHTML = "<br><h1>Surrender</h1><br>"
    document.getElementById("st").style.width = "140px";
    document.getElementById("st").style.background = "rgb(136, 19, 21)";
    document.getElementById("st").addEventListener('click', end);
    

    var ins = document.createElement("input");
    ins.type = "number";
    ins.style.display = "inline-block";
    ins.id = "amount";
    ins.placeholder = "0";
    ins.style.float = "left";

    var letter = document.createElement("h1");
    letter.style.color = "rgb(87, 87, 87)";
    letter.style.float = "left";
    letter.style.fontSize = "5px";
    letter.textContent = "acdddd";
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
    if (finished || n("[amount]").val < 0)
        return;
    if (n("[amount]").val >= initlist.length) {
        finished = true;
        n("*").add(`<br><br>
        <div style="font-size: 50px; width: 60%;">
        <h1 style="text-decoration: underline;">Results</h1>
        <h1>Number of Challenges: ${amount}</h1>
        <h1 style="font-size: 18px;">Refresh The Page To Retry</h1>
        <a href="https://nat3z.github.io/" style="font-size: 17px">nat3z.github.io</a>
        </div><br><br>`)
            document.getElementById("st").innerHTML = "<br><h1>Refresh</h1><br>";
        return;
    }
    if (n("[amount]").val == 0) {
        document.getElementById("numid" + (amount - 1)).innerHTML = document.getElementById("numid" + (amount - 1)).textContent
        + `<br><h1 style="color: rgb(221, 221, 221); font-size: 20px;">`+"0 Advancements While Completing Challenge";
    } else {
        document.getElementById("numid" + (amount - 1)).innerHTML = document.getElementById("numid" + (amount - 1)).textContent
        + `<br><h1 style="color: rgb(221, 221, 221); font-size: 20px;">` + document.getElementById(`amount`).value
        + " Advancements While Completing Challenge";
    }

    var number = Math.floor(Math.random() * advancementlist.length);
    const ref = document.getElementById(`amount`).value;

    n("[amount]").clear();


    const idnum = `numid${amount}`;

    amount = amount + 1;
    if (advancementlist.length == 0) {
        finished = true;
        n("*").add(`<br><br>
        <div style="font-size: 50px; width: 60%;">
        <h1 style="text-decoration: underline;">Results</h1>
        <h1>Number of Challenges: ${amount}</h1>
        <h1 style="font-size: 18px;">Refresh The Page To Retry</h1>
        <a href="https://nat3z.github.io/" style="font-size: 17px">nat3z.github.io</a>
        </div><br><br>`)
            document.getElementById("st").innerHTML = "<br><h1>Refresh</h1><br>"; 
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