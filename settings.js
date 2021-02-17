/*
░█████╗░██╗░░██╗░█████╗░██╗░░░░░██╗░░░░░███████╗███╗░░██╗░██████╗░███████╗
██╔══██╗██║░░██║██╔══██╗██║░░░░░██║░░░░░██╔════╝████╗░██║██╔════╝░██╔════╝
██║░░╚═╝███████║███████║██║░░░░░██║░░░░░█████╗░░██╔██╗██║██║░░██╗░█████╗░░
██║░░██╗██╔══██║██╔══██║██║░░░░░██║░░░░░██╔══╝░░██║╚████║██║░░╚██╗██╔══╝░░
╚█████╔╝██║░░██║██║░░██║███████╗███████╗███████╗██║░╚███║╚██████╔╝███████╗
░╚════╝░╚═╝░░╚═╝╚═╝░░╚═╝╚══════╝╚══════╝╚══════╝╚═╝░░╚══╝░╚═════╝░╚══════╝

██████╗░░█████╗░██╗░░░██╗██╗░░░░░███████╗████████╗████████╗███████╗
██╔══██╗██╔══██╗██║░░░██║██║░░░░░██╔════╝╚══██╔══╝╚══██╔══╝██╔════╝
██████╔╝██║░░██║██║░░░██║██║░░░░░█████╗░░░░░██║░░░░░░██║░░░█████╗░░
██╔══██╗██║░░██║██║░░░██║██║░░░░░██╔══╝░░░░░██║░░░░░░██║░░░██╔══╝░░
██║░░██║╚█████╔╝╚██████╔╝███████╗███████╗░░░██║░░░░░░██║░░░███████╗
╚═╝░░╚═╝░╚════╝░░╚═════╝░╚══════╝╚══════╝░░░╚═╝░░░░░░╚═╝░░░╚══════╝
*/

document.getElementById("aloc").addEventListener('click', urlrepl);
document.getElementById("chall").addEventListener('click', urlset);

var version = n("*").getUrlValues("v");
var mode = n("*").getUrlValues("style");

function hidesetoverlay() {
    document.getElementById("settings").style.display = "none";
}

function refresh() {
    var newUrl = "./index.html?";

    if (mode != null)
        newUrl += "style=" + mode;
    if (version != null)
        newUrl += "&v=" + version;
    
    window.location.replace(newUrl);
}

function urlset() {
    document.getElementById("settings").style.display = "block";
}

function urlrepl() {
    document.getElementById("overlay").style.display = "block";
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