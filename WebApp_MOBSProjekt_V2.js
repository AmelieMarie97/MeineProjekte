// Datum und Uhrzeit in die Fußzeile schreiben
function AnzeigeDatum() {
    var Tag, Monat, Jahr;
    var heute;

    heute = new Date();
    Tag = heute.getDate();
    Monat = heute.getMonth() + 1;
    Jahr = heute.getFullYear();

    if (Tag < 10) {
        Tag = '0' + Tag;
    }
    if (Monat < 10) {
        Monat = '0' + Monat;
    }

    heute = Tag + '.' + Monat + '.' + Jahr;

    return heute;
}

var heute = AnzeigeDatum();

document.getElementById("Datum").textContent += heute;

function AnzeigeUhr() {
    var heute = new Date();
    var stunden, minuten;
    var StundenZahl, MinutenZahl;
    var zeit;

    StundenZahl = heute.getHours();
    MinutenZahl = heute.getMinutes();

    stunden = StundenZahl + ":";
    if (MinutenZahl < 10) { minuten = "0" + MinutenZahl; }
    else { minuten = MinutenZahl; }

    zeit = stunden + minuten + " Uhr";

    window.setTimeout("AnzeigeDatumUhr();", 1000);
    return zeit;
}

var zeit = AnzeigeUhr();

document.getElementById("Uhr").textContent += zeit;


//Pi einbinden: Statusinfos
"use Strict";       //Code wird pingelig durchgegangen --> Fehler fallen eher auf, da HTML und JS sonst sehr verzeilich sind
fetch("http://192.168.0.82:5000/status").then(function (response) {
    response.text().then(function (text) {
        console.log(text);
        var array = text.split(',');
        var consumption = array[0].split(":");
        var humidity = array[1].substr(15, 6);
        var pressure = array[2].substr(15, 6);
        var speed = array[3].split(":");
        var temp = array[4].substr(12, 4);

        document.getElementsByClassName("templateStatusdaten")[0].append(speed[1] + " km");
        document.getElementsByClassName("templateStatusdaten")[1].append(consumption[1] + " l");
        document.getElementsByClassName("templateStatusdaten")[2].append(pressure + " Pa");
        document.getElementsByClassName("templateStatusdaten")[3].append(temp + " °C");
        document.getElementsByClassName("templateStatusdaten")[4].append(humidity[1] + " g/m³");
    });
});
/*in Konsole hierfür:
ssh pi@192.168.0.104
ls 
cd python
ls 
python3 services.py
*/

//Lock Unlock: Auto
let ButtonZu = document.querySelector('.Verriegeln');
function schliessenAuto() {
    fetch("http://192.168.0.82:5000/action/lock").then(console.log("done"));
}
ButtonZu.addEventListener('click', schliessenAuto);

let ButtonAuf = document.querySelector('.Aufschliessen');
function oeffnenAuto() {
    fetch("http://192.168.0.82:5000/action/unlock").then(console.log("done"));
}
ButtonAuf.addEventListener('click', oeffnenAuto);

/*in Phython Services Datei ändern:
- Unterfenster Konsole öffnen
- ssh pi@192.168.0.82
- ls 
- cd python
- ls 
- nano services.py
--> dann öffnet sich die Datei und man kann bearbeiten
*/

//Lock Unlock: Fenster
let ButtonZuFenster = document.querySelector('.FensterZu');
function schliessenFenster() {
    fetch("http://192.168.0.82:5000/window/close").then(console.log("done"));
}
ButtonZuFenster.addEventListener('click', schliessenFenster);

let ButtonAufFenster = document.querySelector('.Fenster');
function oeffnenFenster() {
    fetch("http://192.168.0.82:5000/window/open").then(console.log("done"));
}
ButtonAufFenster.addEventListener('click', oeffnenFenster);




//Klick auf Buttons
function handleHeaderClick(event) {

    switch (event.target.id) {

        case 'home':
            ClickHome();
            break;

    }
}

function handleMainClick(event) {

    switch (event.target.id) {

        case 'StatusinformationID':
            ClickStatusinformation();
            break;

        case 'AufschliessenID':
            ClickAuf();
            break;

        case 'AbsperrenID':
            ClickZu();
            break;

        case 'FensterID':
            ClickFenster();
            break;

        case 'MusikID':
            ClickMusik();
            break;

        case 'NavigationID':
            ClickNavi();
            break;
    }
}

//Klick Home
function ClickHome() {
    let mainElement = document.querySelector('main');
    mainElement.innerHTML = '';

    var h = document.getElementById('Home');
    document.getElementsByTagName("main")[0].appendChild(h.content.cloneNode(true));
}


document.querySelector('main').addEventListener('click', handleMainClick);
document.querySelector('header').addEventListener('click', handleHeaderClick);


//https://elbnetz.com/elemente-nur-mit-css-ein-und-ausblenden/
//https://developer.mozilla.org/de/docs/Web/CSS/visibility
//https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseover_event
