
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


function randomIngredient()
{
    for(let i = 0; i < 4 ; i++)
    {
        let random = Math.floor(Math.random() * (globals.arrayPotions.ingredients.length));
        globals.arrayRandomIngredient.push(globals.arrayPotions.ingredients[random]); 
        console.log(globals.arrayRandomIngredient)
    }
    
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
    


