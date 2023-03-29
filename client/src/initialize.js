import globals from "./globals.js";
import {btnStartDown} from "./events.js";

window.onload = init()

function init()
{
    console.log("INIT")
    initHTMLelements();

    loadAssets();
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


    globals.buttonStart.addEventListener("mousedown", btnStartDown, false);
}

function loadAssets()
{
    console.log("loadAssets");

    //loadImages();
}


function loadImages()
{
    for(let i = 0 ; i < globals.arrayPotions.length; i ++)
    {
        const image = new Image();
        image.addEventListener("load",loadHandler,false);
        image.src = globals.arrayPotions[i].irudia;
        globals.arrayImages.push(image);
        globals.assetsToLoad.push(image);
    }
    
}