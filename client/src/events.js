
import globals from "./globals.js"

export function btnStartDown()
{

    document.getElementById('sectionFase1').style.display = "none";
    document.getElementById('sectionFase2').style.display = "block";



    const request = new XMLHttpRequest();
    request.onreadystatechange = function()
    {
    
        if (this.readyState == 4)
        {
            if (this.status == 200)
            {
                if (this.responseText != null)
                {
                    //console.log(this.responseText);
                    const resultJSON = JSON.parse(this.responseText);
                    globals.arrayPotions = resultJSON;
                    
                    console.log(resultJSON)
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

    
    


