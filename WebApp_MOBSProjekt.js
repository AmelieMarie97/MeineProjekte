// Datum und Uhrzeit in die Fußzeile schreiben
function AnzeigeDatumUhr() {
    var Tag, Monat, Jahr;
    var stunden, minuten;
    var StundenZahl, MinutenZahl;
    var heute;

    heute = new Date();
    Tag = heute.getDate();
    Monat = heute.getMonth() + 1;
    Jahr = heute.getFullYear();
    StundenZahl = heute.getHours();
    MinutenZahl = heute.getMinutes();

    if (Tag < 10) {
        Tag = '0' + Tag;
    }
    if (Monat < 10) {
        Monat = '0' + Monat;
    }

    stunden = StundenZahl + ":";
    if (MinutenZahl < 10) { minuten = "0" + MinutenZahl; }
    else { minuten = MinutenZahl; }

    Anzeige = Tag + '.' + Monat + '.' + Jahr + "    -   " + stunden + minuten + " Uhr";
    DatumUhr.innerHTML = Anzeige;

    window.setTimeout("AnzeigeDatumUhr();", 1000);
}

window.onload = AnzeigeDatumUhr;


//Klick auf Buttons

const area1 = document.querySelector('.area1');

function Button1() {
    console.log("Hallo!:)");

    var div1 = document.createElement("div");
    div1.innerHTML = "Huhu";
    div1.style.background = "red";
    document.getElementsByTagName("main")[0].appendChild(div1);
}

pushButton1.addEventListener('click', Button1);


//https://elbnetz.com/elemente-nur-mit-css-ein-und-ausblenden/
//https://developer.mozilla.org/de/docs/Web/CSS/visibility
//https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseover_event
