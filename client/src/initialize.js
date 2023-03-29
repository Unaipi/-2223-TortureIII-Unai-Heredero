import globals from "./globals.js";
import {btnStartDown} from "./events.js";


window.onload = init()

function init()
{
    console.log("INIT")
    initHTMLelements();
    initEvents();

    
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

function initEvents()
{
    globals.buttonStart.addEventListener("mousedown", btnStartDown, false);
    //globals.buttonStart.addEventListener("mousedown", btnStartDown, false);
}

export function loadAssets()
{
    console.log("loadAssets");

    loadImages();
}

function loadHandler()
{
    

    globals.assetsLoaded++;
    
    //Una vez que se han cargado todos los activos, pasamos
    if(globals.assetsLoaded === globals.assetsToLoad)
    {
        //Remove EventListener
       
        //initGame();   
        removeLoad();  
        
        console.log("Assets finished loading");

    }
    

}

function removeLoad()
{
  for(let i ; i < globals.arrayImages.length; i++)
  {
    globals.arrayImages[i].removeEventListener("load",loadHandler,false);
  }

}


function loadImages()
{  
    console.log("load images")
    const array = globals.arrayPotions.ingredients;
    
    for(let i = 0 ; i < array.length; i ++)
    {
        const potion = new Image();
        potion.addEventListener("load",loadHandler,false);
        potion.src =array[i].image;
        globals.arrayImages.push(potion);
        globals.assetsToLoad.push(potion);

        
    }
    console.log(globals.arrayImages)
    console.log("images loaded")
}