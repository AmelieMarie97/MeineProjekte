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

    case 'AufsperrenID':
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
