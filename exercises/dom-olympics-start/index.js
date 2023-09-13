var header = document.getElementById("header"); {
    header.style.textAlign ="center"
}

var newH1 = document.createElement("h1"); {
newH1.textContent = "JavaScript Made This!!";
header.append(newH1);
}
var mySpan = document.createElement ("span"); {
    mySpan.textContent = "Gary Gritsch"
    mySpan.style.textAlign = "left"
    mySpan.style.display = "inline"
    mySpan.style.color = "blue"
    mySpan.style.fontSize = "18px"
    header.append(mySpan)
}
var newH3 = document.createElement("h3"); {
    newH3.textContent = "wrote the JavaScript"
    newH3.style.textAlign ="right"
    newH3.style.display = "inline"
    newH3.style.paddingInline ="5px"
    header.append(newH3)
}
document.getElementsByClassName("left")[0].textContent = "I just graduated Vschool!";
document.getElementsByClassName("left")[1].textContent = "About 5 months!";
document.getElementsByClassName("right")[0].textContent = "Thats awesome! How long did it take you?";
document.getElementsByClassName("right")[1].textContent = "Good job! That was fast! "; 

var clear = document.getElementsByClassName("messages")
var btn = document.getElementById("clear-button")
btn.addEventListener("click", function() { 
    for(var i = 0; i< clear.length; i++) {
        clear[i].textContent = " "
}});  