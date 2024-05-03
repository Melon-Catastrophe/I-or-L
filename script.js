var defaultDisplayPass = "Check i or L here"

function changeText()
{
    var phrase = document.getElementById("phrase").value;
    var displayPass = document.getElementById('display-phrase');
    
    if (phrase != "")
    {
        displayPass.innerText = "";

        for (let i = 0; i < phrase.length; i++)
        {
            var span = document.createElement('span');
            span.innerText = phrase[i];
            if (isNaN(phrase[i]))
            {
                span.style.color = "white";
                // console.log("not number");
            }
            else
            {
                // console.log("number");
                span.style.color = "red";
            }
            displayPass.appendChild(span);
        }            

        displayPass.style.fontFamily =  "Inconsolata,Consolas,monospace";
        // displayPass.style.fontSize = "22px";
    }
}

function changeTextOnEnter(e)
{
    if (e.key == 'Enter')
    {
        changeText();
    }
}

// Listener for password input and search icon click.
document.getElementById("submit").addEventListener("click", changeText);
document.getElementById("phrase").addEventListener('keypress', changeTextOnEnter);