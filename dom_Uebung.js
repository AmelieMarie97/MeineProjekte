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

//Style der Elemente mit Class "Item" verändern
var x = document.getElementsByClassName("item");
var i;
for (i = 0; i < x.length; i++) {
  x[i].style.borderColor = "#5C5C5C";
}

//Text andere Elemente ändern
document.getElementsByTagName("header")[0].innerHTML = "Meine tolle Website!";
document.getElementsByTagName("aside")[0].innerHTML = "Seite";
document.getElementsByTagName("footer")[0].innerHTML = "Fußzeile";

//Inhalt von nav löschen und ein ul-Element mit mehreren li-Elementen einfügen
var navigation = document.getElementsByTagName("nav")[0];
navigation.removeChild(navigation.firstChild);
document.getElementsByTagName("nav")[0].innerHTML = "Navigationsleiste: <ul><li>eins</li><li>zwei</li><li>drei</li></ul>";
/*var myNav = document.createElement("p");
var myText = document.createTextNode("Navigationsleiste");
myNav.appendChild(myText);
var Ausgabebereich = document.getElementByTagName("nav");
Ausgabebereich.appendChild(myNav);*/

//Erstes Listenelement in Main-Teil löschen
var navigation = document.getElementsByTagName("li")[3];
navigation.removeChild(navigation.firstChild);

//Funktionalität in Nav-Leiste
const guessSubmit = document.querySelector('.guessSubmit');
guessSubmit.addEventListener('click', checkGuess);