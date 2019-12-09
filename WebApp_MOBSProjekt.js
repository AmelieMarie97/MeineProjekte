
function Datum() {
    var heute = new Date();

    var Tag = heute.getDate(); // Tag

    // Monatsangabe startet bei 0!
    var Monat = heute.getMonth() + 1; // Monat

    var Jahr = heute.getFullYear(); // Jahr
    if (Tag < 10) {
        Tag = '0' + Tag;
    }
    if (Monat < 10) {
        Monat = '0' + Monat;
    }
    heute = Tag + '.' + Monat + '.' + Jahr;

    return heute;
}

function DatumUhr() {
    var Tag, Monat, Jahr;
    var stunden, minuten, sekunden;
    var StundenZahl, MinutenZahl, SekundenZahl;
    var heute;

    heute = new Date();
    Tag = heute.getDate();
    Monat = heute.getMonth() + 1;
    Jahr = heute.getFullYear();
    StundenZahl = heute.getHours();
    MinutenZahl = heute.getMinutes();
    SekundenZahl = heute.getSeconds();

    if (Tag < 10) {
        Tag = '0' + Tag;
    }
    if (Monat < 10) {
        Monat = '0' + Monat;
    }
    heute = Tag + '.' + Monat + '.' + Jahr;

    stunden = StundenZahl + ":";
    if (MinutenZahl < 10) { minuten = "0" + MinutenZahl + ":"; }
    else { minuten = MinutenZahl + ":"; }
    if (SekundenZahl < 10) { sekunden = "0" + SekundenZahl + " "; }
    else { sekunden = SekundenZahl + " "; }
    heute = stunden + minuten + sekunden + " Uhr" + heute;
    DatumUhr.innerHTML = heute;

    window.setTimeout("ticken();", 1000);
}

window.onload = ticken;


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
