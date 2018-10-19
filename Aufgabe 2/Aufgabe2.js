var Aufgabe2;
(function (Aufgabe2) {
    function uno() {
        var k0 = {
            name: "0",
            red: 1,
            blue: 1,
            green: 1,
            yellow: 1
        };
        var k1 = {
            name: "1",
            red: 2,
            blue: 2,
            green: 2,
            yellow: 2
        };
        var k2 = {
            name: "2",
            red: 2,
            blue: 2,
            green: 2,
            yellow: 2
        };
        var k3 = {
            name: "3",
            red: 2,
            blue: 2,
            green: 2,
            yellow: 2
        };
        var k4 = {
            name: "4",
            red: 2,
            blue: 2,
            green: 2,
            yellow: 2
        };
        var k5 = {
            name: "5",
            red: 2,
            blue: 2,
            green: 2,
            yellow: 2
        };
        var k6 = {
            name: "6",
            red: 2,
            blue: 2,
            green: 2,
            yellow: 2
        };
        var k7 = {
            name: "7",
            red: 2,
            blue: 2,
            green: 2,
            yellow: 2
        };
        var k8 = {
            name: "8",
            red: 2,
            blue: 2,
            green: 2,
            yellow: 2
        };
        var k9 = {
            name: "9",
            red: 2,
            blue: 2,
            green: 2,
            yellow: 2
        };
        var kr = {
            name: "Reverse",
            red: 2,
            blue: 2,
            green: 2,
            yellow: 2
        };
        var kp2 = {
            name: "Plus 2",
            red: 2,
            blue: 2,
            green: 2,
            yellow: 2
        };
        var ka = {
            name: "Aussetzen",
            red: 2,
            blue: 2,
            green: 2,
            yellow: 2
        };
        var AlleKarten = [k0, k1, k2, k3, k4, k5, k6, k7, k8, k9, kr, kp2, ka]; //Alle Karten im Array gespeichert, um Zugriff darauf zu vereinfachen
        var s1 = 4; //Die schwarzen Karten werden extra deklariert und brauchen lediglich den Zahlenwert 4. Sp�ter f�r den Switch erfoderlich
        var s2 = 4;
        var c = ""; //Variable c ist ein leerer String, sp�ter wird die jeweilige Farbe f�r c eingesetzt
        function random1(x) {
            return Math.floor(Math.random() * Math.floor(x));
        }
        ;
        function placeDiv(_color, _v, _y) {
            var div = document.createElement("div");
            document.body.appendChild(div);
            div.setAttribute("id", "a" + _y); //div bekommt eine ID, damit document.getElementById funktioniert.
            document.getElementById("a" + _y).innerHTML += _v; //Es wird auf die oben erstellte Id zugegriffen und _v �bergibt den Text der in der Karte stehen soll
            var s = div.style;
            s.border = "thin solid black";
            s.textAlign = "center";
            s.position = "absolute";
            s.backgroundColor = _color;
            s.width = 100 + "px";
            s.height = 200 + "px";
            s.left = (_y + 0.2) * 110 + "px";
            s.bottom = 40 + "px";
            if (_color == "#000000") {
                s.color = "white";
            }
            if (_color == "#0000ff") {
                s.color = "white";
            }
        }
        var z;
        var input = prompt("Anzahl der Karten auswaehlen"); //prompt �ffnet ein Dialogfenster, jedoch wird das Eingabe als string angegeben
        z = Number(input); //der Input wird in eine Number gewechselt und damit an z �bergeben
        for (var d = 0; d < z; d++) {
            var l = random1(15); //Funktion random wird ausgef�hrt und gibt eine Zahl von 0-14 aus
            if (l == 13 && s1 > 0) {
                c = "#000000"; //...wird die Farbe auf Schwarz gesetzt...
                s1--; //...und die Anzahl der schwarzen Karte -1 gesetzt
                placeDiv(c, "+4", d); //Werte werden an die Funktion PlaceDiv �bergeben, welche auch ausgef�hrt wird
                continue; //Duch Continue beginnt die For-Schleife von Vorne
            }
            else if (l == 13 && s1 <= 0) {
                d--; //d--, weil sonst durch continue d+=1 wird und eine Karte weniger generiert wird
                continue;
            }
            else {
                if (l == 14 && s2 > 0) {
                    c = "#000000";
                    s2--;
                    placeDiv(c, "Farbauswahl", d);
                    continue;
                }
                else if (l == 14 && s2 <= 0) {
                    d--;
                    continue;
                }
                else {
                    var b = random1(4); //random-Funktion wird ausgef�hrt, um die Farbe zu ermitteln
                    switch (b) {
                        case 0:
                            c = "#ff0000";
                            if (AlleKarten[l].red > 0) {
                                placeDiv(c, AlleKarten[l].name, d); //PlaceDiv wird �bergeben mit c f�r die Farbe, der zuf�lligen Zahl l und dem Wert d, welcher den Abstand zwischen den Karten generiert
                                AlleKarten[l].red--;
                                continue;
                            }
                        case 1:
                            c = "#00ff00";
                            if (AlleKarten[l].green > 0) {
                                placeDiv(c, AlleKarten[l].name, d);
                                AlleKarten[l].green--;
                                continue;
                            }
                        case 2:
                            c = "#0000ff";
                            if (AlleKarten[l].blue > 0) {
                                placeDiv(c, AlleKarten[l].name, d);
                                AlleKarten[l].blue--;
                                continue;
                            }
                        case 3:
                            c = "#ffff00";
                            if (AlleKarten[l].yellow > 0) {
                                placeDiv(c, AlleKarten[l].name, d);
                                AlleKarten[l].yellow--;
                                continue;
                            }
                            else {
                                d--;
                                continue;
                            }
                    }
                }
            }
        }
        function Stapel() {
            var div = document.createElement("div");
            document.body.appendChild(div);
            div.setAttribute("id", "Kartenstapel");
            document.getElementById("Kartenstapel").innerHTML += "Kartenstapel";
            var s = div.style;
            s.border = "solid black";
            s.textAlign = "center";
            s.position = "absolute";
            s.backgroundColor = "#A04000";
            s.width = 100 + "px";
            s.height = 200 + "px";
            s.left = 50 + "px";
            s.top = 20 + "px";
        }
        function AblageStapel() {
            var div = document.createElement("div");
            document.body.appendChild(div);
            div.setAttribute("id", "Ablage");
            document.getElementById("Ablage").innerHTML += "Ablage";
            var s = div.style;
            s.border = "solid black";
            s.textAlign = "center";
            s.position = "absolute";
            s.backgroundColor = "#717D7E";
            s.width = 100 + "px";
            s.height = 200 + "px";
            s.right = 50 + "px";
            s.top = 20 + "px";
        }
        AblageStapel(); //Funktionen werden aufgerufen
        Stapel();
    }
    document.addEventListener("DOMContentLoaded", (uno)); //Die Funktion uno wird es aufgerufen, wenn der DOM bereits geladen wurde
})(Aufgabe2 || (Aufgabe2 = {}));
//# sourceMappingURL=Aufgabe2.js.map