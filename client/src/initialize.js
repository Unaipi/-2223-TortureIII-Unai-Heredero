import globals from "./globals.js";

window.onload = init()

function init()
{
    initHTMLelements();
}


function initHTMLelements()
{
    globals.buttonStart = document.getElementById('btnStart');

    globals.sectionFase1 = document.getElementById('sectionFase1');
    globals.sectionFase2 = document.getElementById('sectionFase2');
    globals.sectionFase3 = document.getElementById('sectionFase3');


    globals.sectionFase1.style.display = "block";
    globals.sectionFase2.style.display = "none";
    globals.sectionFase3.style.display = "none";
}