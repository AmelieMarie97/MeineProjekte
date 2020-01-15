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
    var stunden, minuten, sekunden;
    var StundenZahl, MinutenZahl, Sekundenzahl;
    var zeit;

    StundenZahl = heute.getHours();
    MinutenZahl = heute.getMinutes();
    SekundenZahl = heute.getSeconds();

    stunden = StundenZahl + ":";
    if (MinutenZahl < 10) { minuten = "0" + MinutenZahl + ":"; }
    else { minuten = MinutenZahl + ":"; }
    if (SekundenZahl < 10) { sekunden = "0" + SekundenZahl + " "; }
    else { sekunden = SekundenZahl + " "; }

    zeit = stunden + minuten + sekunden + " Uhr";
    Uhr.innerHTML = zeit;

    window.setTimeout("AnzeigeUhr();", 1000);
}

window.onload = AnzeigeUhr;

"use Strict";

var IntervallWetter;
var IntervallAuto;

//Klick auf Buttons
function handleHeaderClick(event) {

    switch (event.target.id) {

        case 'homeID':
            ClickHome();
            clearInterval(IntervallWetter);
            clearInterval(IntervallAuto);
            break;

    }
}

function handleMainClick(event) {

    switch (event.target.id) {

        case 'StatusAutoID':
            ClickStatusAuto();
            IntervallAuto = setInterval(function () {
                ClickStatusAuto();
            }, 200000);
            break;

        case 'StatusWetterID':
            ClickStatusWetter();
            IntervallWetter = setInterval(function () {
                ClickStatusWetter();
            }, 200000);
            break;

        case 'MusikID':
            ClickMusik();
            break;

        case 'SchlossID':
            ClickSchloss();
            break;

        case 'FensterID':
            ClickFenster();
            break;

        case 'NavigationID':
            ClickNavi();
            break;
    }
}

//Klicken Statusinformation Auto
function ClickStatusAuto() {

    let mainElement = document.querySelector('main');
    mainElement.innerHTML = ' ';

    var a = document.getElementById('AutoDatenScreen');
    document.getElementsByTagName("main")[0].appendChild(a.content.cloneNode(true));


    "use Strict";

    fetch("http://192.168.0.82:5000/status").then(function (response) {
        response.text().then(function (text) {
            console.log(text);
            var array = text.split(',');
            var consumption = array[0].split(":");
            var speed = array[3].split(":");

            document.getElementsByClassName("WertGeschwindigkeit")[0].append(speed[1] + " km/h");
            document.getElementsByClassName("WertVerbrauch")[0].append(consumption[1] + " l");
        });
    });
}

//Klicken Statusinformation Wetter
function ClickStatusWetter() {

    let mainElement = document.querySelector('main');
    mainElement.innerHTML = ' ';

    var w = document.getElementById('WetterDatenScreen');
    document.getElementsByTagName("main")[0].appendChild(w.content.cloneNode(true));

    "use Strict";

    fetch("http://192.168.0.82:5000/status").then(function (response) {
        response.text().then(function (text) {
            console.log(text);
            var array = text.split(',');
            var humidity = array[1].substr(15, 6);
            var pressure = array[2].substr(15, 6);
            var temp = array[4].substr(12, 4);

            document.getElementsByClassName("WertDruck")[0].append(pressure + " Pa");
            document.getElementsByClassName("WertTemperatur")[0].append(temp + " °C");
            document.getElementsByClassName("WertLuftfeuchte")[0].append(humidity[1] + " g/m³");
        });
    });
}

//Klicken Musik
function ClickMusik() {
    document.getElementById("menuContainer").style.display = "none";

    var m = document.getElementById('MusikScreen');
    document.getElementsByTagName("main")[0].appendChild(m.content.cloneNode(true));

    "use Strict";

    fetch("http://192.168.0.82:5000/music").then(function (response) {
        response.text().then(function (text) {
            tracks = JSON.parse(text);
            console.log(text);

            document.getElementsByClassName("MusikDaten")[0].append(tracks[0].artist, " - ", tracks[0].title);
            document.getElementsByClassName("MusikDaten")[1].append(tracks[1].artist, " - ", tracks[1].title);
            document.getElementsByClassName("MusikDaten")[2].append(tracks[2].artist, " - ", tracks[2].title);
        });
    });

    var song = document.getElementById("AudioID");
    function PlayAudio() {
        song.play()
    }
    function PauseAudio() {
        song.pause()
    }
    document.querySelector(".Play").addEventListener('click', PlayAudio);
    document.querySelector(".Pause").addEventListener('click', PauseAudio);
}

//Klicken Schloss
function ClickSchloss() {
    document.getElementById("menuContainer").style.display = "none";

    var s = document.getElementById('SchlossScreen');
    document.getElementsByTagName("main")[0].appendChild(s.content.cloneNode(true));

    "use Strict";

    function schliessenAuto() {
        fetch("http://192.168.0.82:5000/action/lock").then(console.log("done: Auto schließen"));
    }
    document.querySelector('.Verriegeln').addEventListener('click', schliessenAuto);

    function oeffnenAuto() {
        fetch("http://192.168.0.82:5000/action/unlock").then(console.log("done: Auto öffnen"));
    }
    document.querySelector('.Aufschliessen').addEventListener('click', oeffnenAuto);
}

//Klicken Fenster
function ClickFenster() {
    document.getElementById("menuContainer").style.display = "none";

    var f = document.getElementById('FensterScreen');
    document.getElementsByTagName("main")[0].appendChild(f.content.cloneNode(true));

    "use Strict";
    function oeffnenFensterLinks() {
        fetch("http://192.168.0.82:5000/window/leftopen").then(console.log("done: Fenster öffnen"));
    }
    document.querySelector('.FensterLinksRunter').addEventListener('click', oeffnenFensterLinks);

    function schliessenFensterLinks() {
        fetch("http://192.168.0.82:5000/window/leftclose").then(console.log("done: Fenster schließen"));
    }
    document.querySelector('.FensterLinksHoch').addEventListener('click', schliessenFensterLinks);

    function oeffnenFensterRechts() {
        fetch("http://192.168.0.82:5000/window/rightopen").then(console.log("done: Fenster öffnen"));
    }
    document.querySelector('.FensterRechtsRunter').addEventListener('click', oeffnenFensterRechts);

    function schliessenFensterRechts() {
        fetch("http://192.168.0.82:5000/window/rightclose").then(console.log("done: Fenster schließen"));
    }
    document.querySelector('.FensterRechtsHoch').addEventListener('click', schliessenFensterRechts);

    function oeffnenFensterAlle() {
        fetch("http://192.168.0.82:5000/window/allopen").then(console.log("done: Fenster öffnen"));
    }
    document.querySelector('.FensterAlleRunter').addEventListener('click', oeffnenFensterAlle);

    function schliessenFensterAlle() {
        fetch("http://192.168.0.82:5000/window/allclose").then(console.log("done: Fenster schließen"));
    }
    document.querySelector('.FensterAlleHoch').addEventListener('click', schliessenFensterAlle);
}

//Klicken Navigation
function ClickNavi() {
    document.getElementById("menuContainer").style.display = "none";

    var n = document.getElementById('NaviScreen');
    document.getElementsByTagName("main")[0].appendChild(n.content.cloneNode(true));
}

//Klick Home
function ClickHome() {
    let mainElement = document.querySelector('main');
    mainElement.innerHTML = '';

    var h = document.getElementById('HomeScreen');
    document.getElementsByTagName("main")[0].appendChild(h.content.cloneNode(true));

    fetch("http://192.168.0.82:5000/window/black").then(console.log("done: LED's aus"));
}

document.querySelector('main').addEventListener('click', handleMainClick);
document.querySelector('header').addEventListener('click', handleHeaderClick);