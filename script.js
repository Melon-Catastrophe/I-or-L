var defaultDisplayPass = "Check i or L here"

function changeText()
{
    var phrase = document.getElementById("password").value;
    var displayPass = document.getElementById('displayPass');
    
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
    }
}

function changeTextOnEnter(e)
{
    if (e.key == 'Enter')
    {
        changeText();
    }
}

function themeClassic()
{
    // document.body.style.backgroundColor = "#89B6A5";
    document.body.style.backgroundColor = "#4E7E6B";
    // document.getElementsByClassName("body").style.backgroundColor = "#4E7E6B"
    document.getElementById("okButton").style.backgroundColor = "#6A706E";
    document.getElementById("okImg").src="assets/images/magnifying-glass-solid-white.svg"
    if (typeof(Storage) != "undefined")
    {
        localStorage.setItem("theme", "classic");
    }
}

function themeMint()
{
    document.body.style.backgroundColor = "#BCCFA9";
    document.getElementById("okButton").style.backgroundColor = "#50514F";
    document.getElementById("okImg").src="assets/images/magnifying-glass-solid-white.svg"
    if (typeof(Storage) != "undefined")
    {
        localStorage.setItem("theme", "mint");
    }
}

function themeJava()
{
    document.body.style.backgroundColor = "#C3B299";
    document.getElementById("okButton").style.backgroundColor = "#50514F";
    document.getElementById("okImg").src="assets/images/magnifying-glass-solid-white.svg"
    if (typeof(Storage) != "undefined")
    {
        localStorage.setItem("theme", "java");
    }
}

function themeCharcoal()
{
    document.body.style.backgroundColor = "#50514F";
    document.getElementById("okButton").style.backgroundColor = "#FFFCFF";
    document.getElementById("okImg").src="assets/images/magnifying-glass-solid.svg"
    if (typeof(Storage) != "undefined")
    {
        localStorage.setItem("theme", "charcoal");
    }
}

// Code for reading theme preferences below.
// Check for browser support.
if (typeof(Storage) != "undefined")
{
    // Retrieve theme preference.
    var theme = localStorage.getItem("theme");
    if (theme == "classic")
    {
        themeClassic();
    }
    else if (theme == "mint")
    {
        themeMint();
    }
    else if (theme == "java")
    {
        themeJava();
    }
    else if (theme == "charcoal")
    {
        themeCharcoal();
    }
    else
    {
        themeClassic();
    }
}

// Listener for password input and search icon click.
document.getElementById("okImg").addEventListener("click", changeText);
document.getElementById("password").addEventListener('keypress', changeTextOnEnter);