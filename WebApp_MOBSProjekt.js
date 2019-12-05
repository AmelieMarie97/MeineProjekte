//Event Button 1 drücken

const pushButton1 = document.querySelector('.pushButton1');

function Button1() {
    console.log("Hallo!:)");
    var image = document.getElementsByClassName("image")[0];
    image.remove(image);

    var div1 = document.createElement("div");
    div1.innerHTML = "Huhu";
    div1.className = "area1";
    div1.style.background = "red";
    document.getElementsByTagName("main")[0].appendChild(div1);

    var div2 = document.createElement("div");
    div2.innerHTML = "Huhu";
    div2.className = "area2";
    div2.style.background = "green";
    document.getElementsByTagName("main")[0].appendChild(div2);

    var div3 = document.createElement("div");
    div3.innerHTML = "Huhu";
    div3.className = "area3";
    div3.style.background = "blue";
    document.getElementsByTagName("main")[0].appendChild(div3);

    var div4 = document.createElement("div");
    div4.innerHTML = "Huhu";
    div4.className = "area4";
    div4.style.background = "yellow";
    document.getElementsByTagName("main")[0].appendChild(div4);

    var div5 = document.createElement("div");
    div5.innerHTML = "Huhu";
    div5.className = "area5";
    div5.style.background = "orange";
    document.getElementsByTagName("main")[0].appendChild(div5);

    var div6 = document.createElement("div");
    div6.innerHTML = "Huhu";
    div6.className = "area6";
    div6.style.background = "pink";
    document.getElementsByTagName("main")[0].appendChild(div6);
}

pushButton1.addEventListener('click', Button1);



/*
//Elemente mit Class "Item" ansprechen und mit neuem Text überschreiben
document.getElementsByClassName("item")[0].innerHTML = "Hello World!";
document.getElementsByClassName("item")[0].style.backgroundColor = "#97FFFF";
document.getElementsByClassName("item")[1].innerHTML = "Wie geht es dir?";
document.getElementsByClassName("item")[1].style.backgroundColor = "#9400D3";
document.getElementsByClassName("item")[2].innerHTML = ":)";
document.getElementsByClassName("item")[2].style.backgroundColor = "#0000FF";
document.getElementsByTagName("main")[0].style.backgroundColor = "white";
document.getElementsByTagName("main")[0].style.borderStyle = "dashed";
document.getElementsByTagName("main")[0].style.borderColor = "#BEBEBE";

//Text andere Elemente ändern
document.getElementsByTagName("header")[0].innerHTML = "Meine tolle Website!";
document.getElementsByTagName("aside")[0].innerHTML = "Seite";
document.getElementsByTagName("footer")[0].innerHTML = "Fußzeile";

//Inhalt von nav löschen und ein ul-Element mit mehreren li-Elementen einfügen
var navigation = document.getElementsByTagName("nav")[0];
navigation.removeChild(navigation.firstChild);
document.getElementsByTagName("nav")[0].innerHTML = "Navigationsleiste: <ul><li>eins</li><li>zwei</li><li>drei</li></ul>";
    //ist in CSS definiert und sieht daher anders aus als normalerweise
/*var myNav = document.createElement("p");
var myText = document.createTextNode("Navigationsleiste");
myNav.appendChild(myText);
var Ausgabebereich = document.getElementByTagName("nav");
Ausgabebereich.appendChild(myNav);*

//Erstes Listenelement in Main-Teil löschen
var navigation = document.getElementsByTagName("li")[3];
navigation.removeChild(navigation.firstChild);

//Funktionalität in Nav-Leiste
const guessSubmit = document.querySelector('.guessSubmit');
guessSubmit.addEventListener('click', checkGuess);
*/