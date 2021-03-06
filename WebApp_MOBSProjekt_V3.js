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


/*ANFANG AUSKOMMENTIERT

//Pi einbinden: Statusinfos
"use Strict";       //Code wird pingelig durchgegangen --> Fehler fallen eher auf, da HTML und JS sonst sehr verzeilich sind
fetch("http://192.168.178.82:5000/status").then(function (response) {         //192.168.0.82 im Labor!!
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
ssh pi@192.168.0.82
ls 
cd python
ls 
python3 services.py
*   HIER ENDE KOMMTENTAR ENTFERNT!!!!!!!!!!!!!!!!!!!!!!!!!!


//Lock Unlock: Auto
let ButtonZu = document.querySelector('.Verriegeln');
function schliessenAuto() {
    fetch("http://192.168.172.82:5000/action/lock").then(console.log("done"));
}
ButtonZu.addEventListener('click', schliessenAuto);

let ButtonAuf = document.querySelector('.Aufschliessen');
function oeffnenAuto() {
    fetch("http://192.168.172.82:5000/action/unlock").then(console.log("done"));
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
*           HIER ENDE KOMMTENTAR ENTFERNT!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//Lock Unlock: Fenster
let ButtonAufFenster = document.querySelector('.Fenster');
function oeffnenFenster() {
    fetch("http://192.168.172.82:5000/window/open").then(console.log("done"));
}
ButtonAufFenster.addEventListener('click', oeffnenFenster); 

let ButtonZuFenster = document.querySelector('.FensterZu');
function schliessenFenster() {
    fetch("http://192.168.172.82:5000/window/close").then(console.log("done"));
}
ButtonZuFenster.addEventListener('click', schliessenFenster);


ENDE AUSKOMMENTIERT*/


"use Strict";

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

        case 'StatusAutoID':
            ClickStatusAuto();
            break;

        case 'StatusWetterID':
            ClickStatusWetter();
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

  document.getElementById("menuContainer").style.display = "none";

  var a = document.getElementById('AutoDatenScreen');
  document.getElementsByTagName("main")[0].appendChild(a.content.cloneNode(true));


  "use Strict";

  fetch("http://192.168.178.82:5000/status").then(function (response) {         //192.168.0.82 im Labor!!
    response.text().then(function (text) {
        console.log(text);
        var array = text.split(',');
        var consumption = array[0].split(":");
        var speed = array[3].split(":");
     
        document.getElementsByClassName("WertGeschwindigkeit")[0].append(speed[1] + " km");
        document.getElementsByClassName("WertVerbrauch")[0].append(consumption[1] + " l");
    });
  });
}

//Klicken Statusinformation Wetter
function ClickStatusWetter() {

  document.getElementById("menuContainer").style.display = "none";

  var w = document.getElementById('WetterDatenScreen');
  document.getElementsByTagName("main")[0].appendChild(w.content.cloneNode(true));


  fetch("http://192.168.178.82:5000/status").then(function (response) {         //192.168.0.82 im Labor!!
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

  fetch("http://192.168.178.82:5000/music").then(function (response) {
        response.text().then(function (text) {
            tracks = JSON.parse(text);
            console.log(text);
        });
  });
}

//Klicken Schloss
function ClickSchloss() {
  document.getElementById("menuContainer").style.display = "none";

  var s = document.getElementById('SchlossScreen');
  document.getElementsByTagName("main")[0].appendChild(s.content.cloneNode(true));

  //Lock Unlock: Auto
    function schliessenAuto() {
        fetch("http://192.168.178.82:5000/action/lock").then(console.log("done: Auto schließen"));
    }
    document.querySelector('.Verriegeln').addEventListener('click', schliessenAuto);

    function oeffnenAuto() {
        fetch("http://192.168.178.82:5000/action/unlock").then(console.log("done: Auto öffnen"));
    }
    document.querySelector('.Aufschliessen').addEventListener('click', oeffnenAuto);
}

//Klicken Fenster
function ClickFenster() {
  document.getElementById("menuContainer").style.display = "none";

  var f = document.getElementById('FensterScreen');
  document.getElementsByTagName("main")[0].appendChild(f.content.cloneNode(true));

  function oeffnenFensterLinks() {
        fetch("http://192.168.178.82:5000/window/leftopen").then(console.log("done: Fenster öffnen"));
  }
  document.querySelector('.FensterLinksRunter').addEventListener('click', oeffnenFensterLinks); 

  function schliessenFensterLinks() {
        fetch("http://192.168.178.82:5000/window/leftclose").then(console.log("done: Fenster schließen"));
  }
  document.querySelector('.FensterLinksHoch').addEventListener('click', schliessenFensterLinks);

  function oeffnenFensterRechts() {
        fetch("http://192.168.178.82:5000/window/rightopen").then(console.log("done: Fenster öffnen"));
  }
  document.querySelector('.FensterRechtsRunter').addEventListener('click', oeffnenFensterRechts); 

  function schliessenFensterRechts() {
        fetch("http://192.168.178.82:5000/window/rightclose").then(console.log("done: Fenster schließen"));
  }
  document.querySelector('.FensterRechtsHoch').addEventListener('click', schliessenFensterRechts);

  function oeffnenFensterAlle() {
        fetch("http://192.168.178.82:5000/window/allopen").then(console.log("done: Fenster öffnen"));
  }
  document.querySelector('.FensterAlleHoch').addEventListener('click', oeffnenFensterAlle); 

  function schliessenFensterAlle() {
        fetch("http://192.168.178.82:5000/window/allclose").then(console.log("done: Fenster schließen"));
  }
  document.querySelector('.FensterAlleRunter').addEventListener('click', schliessenFensterAlle);
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
  }

document.querySelector('main').addEventListener('click', handleMainClick);
document.querySelector('header').addEventListener('click', handleHeaderClick);