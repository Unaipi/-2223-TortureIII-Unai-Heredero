
import globals from "./globals.js"
import {loadAssets} from "./initialize.js"


export function btnStartDown()
{
    globals.sectionFase1.style.display = "none";
    globals.sectionFase2.style.display = "block";
    globals.sectionFase3.style.display = "none";

    const request = new XMLHttpRequest();
    request.onreadystatechange = function()
    {
    
        if (this.readyState == 4)
        {
            if (this.status == 200)
            {
                if (this.responseText != null)
                {

                    const resultJSON = JSON.parse(this.responseText);
                    globals.arrayPotions = resultJSON; 
                    console.log(globals.arrayPotions.ingredients)
                    loadAssets();
                    randomIngredient();
                    showIngredients();

                }
                else
                    alert("Communication error: No data received");
                
            }
            else    
                alert( "Communication error: " + this.statusText);

        }
    
    }
request.open("GET", "https://raw.githubusercontent.com/zsiciarz/skyrim-alchemy-toolbox/master/data/ingredients.json");
request.responseType = "text";
request.send(); 



}

export function btnCreateDown()
{
  
    document.getElementById('btnCreatePotion').style.display = "none";

    addIngredientsToFusionArray();
    compareIngredients();
    showFusion();

}

function addIngredientsToFusionArray()
{
    let randomIngredient1 = Math.floor(Math.random() * (3));;
    let randomIngredient2 = 0;

    while(randomIngredient1 == randomIngredient2)
    {
        randomIngredient2 = Math.floor(Math.random() * (3));
    }
    globals.arrayIngredientFusion.push(globals.arrayRandomIngredient[randomIngredient1])
    globals.arrayIngredientFusion.push(globals.arrayRandomIngredient[randomIngredient2])

    console.log(globals.arrayIngredientFusion)
}


function compareIngredients()
{
    
    for(let i = 0; i<4 ; i++)
    {
        console.log(globals.arrayIngredientFusion[0].effects[i])
        console.log(globals.arrayIngredientFusion[1].effects[i])

            if(globals.arrayIngredientFusion[0].effects[0] === globals.arrayIngredientFusion[1].effects[i]) 
            {
                globals.synergyCount++
                console.log(globals.synergyCount)
                globals.repeatedEffect = globals.arrayIngredientFusion[0].effects[0];
            }
            if(globals.arrayIngredientFusion[0].effects[1] === globals.arrayIngredientFusion[1].effects[i])
            {
                globals.synergyCount++
                console.log(globals.synergyCount)
                globals.repeatedEffect = globals.arrayIngredientFusion[0].effects[1];
            }
            if(globals.arrayIngredientFusion[0].effects[2] === globals.arrayIngredientFusion[1].effects[i])
            {
                globals.synergyCount++
                console.log(globals.synergyCount)
                globals.repeatedEffect = globals.arrayIngredientFusion[0].effects[2];
            }
            if(globals.arrayIngredientFusion[0].effects[3] === globals.arrayIngredientFusion[1].effects[i])
            {
                globals.synergyCount++
                console.log(globals.synergyCount)
                globals.repeatedEffect = globals.arrayIngredientFusion[0].effects[3];
            }  
    }
}


function showFusion()
{
    document.getElementById('sectionFase3').style.display = "block";

    let weight1 = parseFloat(globals.arrayIngredientFusion[0].weight);
    let weight2 = parseFloat(globals.arrayIngredientFusion[1].weight);
    let weightSuma = ( weight1 + weight2 ) + 1.2
    console.log(weightSuma)

    if(globals.synergyCount == 1)
    {
        let fsn = document.getElementById("fsn");
        fsn.innerHTML +="<h2>"+globals.arrayIngredientFusion[0].name+"</h2>";
        fsn.innerHTML +="<h2>+</h2>";
        fsn.innerHTML +="<h2>"+globals.arrayIngredientFusion[1].name+"</h2>";


        fsn.innerHTML +="<h3>Potion of "+globals.repeatedEffect+"</h3>";

        fsn.innerHTML +="<h3>Weight: "+weightSuma+"</h3>";

        
        
    }
    else if (globals.synergyCount>1)
    {
        let fsn = document.getElementById("fsn");
        fsn.innerHTML +="<h2>"+globals.arrayIngredientFusion[0].name+"</h2>";
        fsn.innerHTML +="<h2>+</h2>";
        fsn.innerHTML +="<h2>"+globals.arrayIngredientFusion[1].name+"</h2>";


        fsn.innerHTML +="<h3>Potion of "+globals.repeatedEffect+"</h3>";

        fsn.innerHTML +="<h3>Weight: "+weightSuma+"</h3>";
    }
    else if (globals.synergyCount<1)
    {
        let fsn = document.getElementById("fsn");
        fsn.innerHTML +="<h2>POTION FAILED!!</h2>";
    }
}

function randomIngredient()
{
    for(let i = 0; i < 4 ; i++)
    {
        let random = Math.floor(Math.random() * (globals.arrayPotions.ingredients.length));
        globals.arrayRandomIngredient.push(globals.arrayPotions.ingredients[random]); 
        
    }
    console.log(globals.arrayRandomIngredient)
}

function showIngredients()
{


    //COLUMNA 1
    let col1 = document.getElementById("col1");
    
    col1.innerHTML +="<img src ="+globals.arrayRandomIngredient[0].image+"></img>";
    col1.innerHTML +="<li>"+globals.arrayRandomIngredient[0].name+"</li>";
    
    col1.innerHTML +="<li>"+globals.arrayRandomIngredient[0].value+"</li>";

    col1.innerHTML +="<li>"+globals.arrayRandomIngredient[0].weight+"</li>";

    col1.innerHTML +="<li>"+globals.arrayRandomIngredient[0].effects[0]+"</li>";
    col1.innerHTML +="<li>"+globals.arrayRandomIngredient[0].effects[1]+"</li>";
    col1.innerHTML +="<li>"+globals.arrayRandomIngredient[0].effects[2]+"</li>";
    col1.innerHTML +="<li>"+globals.arrayRandomIngredient[0].effects[3]+"</li>";


    //COLUMNA 2
    let col2 = document.getElementById("col2");
    
    col2.innerHTML +="<img src ="+globals.arrayRandomIngredient[1].image+"></img>";
    col2.innerHTML +="<li>"+globals.arrayRandomIngredient[1].name+"</li>";
    
    col2.innerHTML +="<li>"+globals.arrayRandomIngredient[1].value+"</li>";

    col2.innerHTML +="<li>"+globals.arrayRandomIngredient[1].weight+"</li>";

    col2.innerHTML +="<li>"+globals.arrayRandomIngredient[1].effects[0]+"</li>";
    col2.innerHTML +="<li>"+globals.arrayRandomIngredient[1].effects[1]+"</li>";
    col2.innerHTML +="<li>"+globals.arrayRandomIngredient[1].effects[2]+"</li>";
    col2.innerHTML +="<li>"+globals.arrayRandomIngredient[1].effects[3]+"</li>";

    //COLUMNA 3
    let col3 = document.getElementById("col3");
    
    col3.innerHTML +="<img src ="+globals.arrayRandomIngredient[2].image+"></img>";
    col3.innerHTML +="<li>"+globals.arrayRandomIngredient[2].name+"</li>";
    
    col3.innerHTML +="<li>"+globals.arrayRandomIngredient[2].value+"</li>";

    col3.innerHTML +="<li>"+globals.arrayRandomIngredient[2].weight+"</li>";

    col3.innerHTML +="<li>"+globals.arrayRandomIngredient[2].effects[0]+"</li>";
    col3.innerHTML +="<li>"+globals.arrayRandomIngredient[2].effects[1]+"</li>";
    col3.innerHTML +="<li>"+globals.arrayRandomIngredient[2].effects[2]+"</li>";
    col3.innerHTML +="<li>"+globals.arrayRandomIngredient[2].effects[3]+"</li>";

    //COLUMNA 4
    let col4 = document.getElementById("col4");
    
    col4.innerHTML +="<img src ="+globals.arrayRandomIngredient[3].image+"></img>";
    col4.innerHTML +="<li>"+globals.arrayRandomIngredient[3].name+"</li>";
    
    col4.innerHTML +="<li>"+globals.arrayRandomIngredient[3].value+"</li>";

    col4.innerHTML +="<li>"+globals.arrayRandomIngredient[3].weight+"</li>";

    col4.innerHTML +="<li>"+globals.arrayRandomIngredient[3].effects[0]+"</li>";
    col4.innerHTML +="<li>"+globals.arrayRandomIngredient[3].effects[1]+"</li>";
    col4.innerHTML +="<li>"+globals.arrayRandomIngredient[3].effects[2]+"</li>";
    col4.innerHTML +="<li>"+globals.arrayRandomIngredient[3].effects[3]+"</li>";


}
    


