namespace Aufgabe2 {
    
    function uno(){ //Funktion uno deklariert, damit sie sp�ter im DOMContentloaded abgerufen werden kann

    interface Karten { //Interface mit Karten wird erstellt. Wird gemacht, damit es nur eine bestimmte Anzahl an Karten gibt
        name: string;
        red: number;
        blue: number;
        green: number;
        yellow: number;
    }

    let k0: Karten = {
        name: "0",
        red: 1,
        blue: 1,
        green: 1,
        yellow: 1
    }

    let k1: Karten = {
        name: "1",
        red: 2,
        blue: 2,
        green: 2,
        yellow: 2
    }

    let k2: Karten = {
        name: "2",
        red: 2,
        blue: 2,
        green: 2,
        yellow: 2
    }

    let k3: Karten = {
        name: "3",
        red: 2,
        blue: 2,
        green: 2,
        yellow: 2
    }

    let k4: Karten = {
        name: "4",
        red: 2,
        blue: 2,
        green: 2,
        yellow: 2
    }

    let k5: Karten = {
        name: "5",
        red: 2,
        blue: 2,
        green: 2,
        yellow: 2
    }

    let k6: Karten = {
        name: "6",
        red: 2,
        blue: 2,
        green: 2,
        yellow: 2
    }

    let k7: Karten = {
        name: "7",
        red: 2,
        blue: 2,
        green: 2,
        yellow: 2
    }

    let k8: Karten = {
        name: "8",
        red: 2,
        blue: 2,
        green: 2,
        yellow: 2
    }

    let k9: Karten = {
        name: "9",
        red: 2,
        blue: 2,
        green: 2,
        yellow: 2
    }

    let kr: Karten = {
        name: "Reverse",
        red: 2,
        blue: 2,
        green: 2,
        yellow: 2
    }

    let kp2: Karten = {
        name: "Plus 2",
        red: 2,
        blue: 2,
        green: 2,
        yellow: 2
    }

    let ka: Karten = {
        name: "Aussetzen",
        red: 2,
        blue: 2,
        green: 2,
        yellow: 2
    }

    let AlleKarten: Karten[] = [k0, k1, k2, k3, k4, k5, k6, k7, k8, k9, kr, kp2, ka] //Alle Karten im Array gespeichert, um Zugriff darauf zu vereinfachen
    let s1: number = 4 //Die schwarzen Karten werden extra deklariert und brauchen lediglich den Zahlenwert 4. Sp�ter f�r den Switch erfoderlich
    let s2: number = 4
    let c: string = ""; //Variable c ist ein leerer String, sp�ter wird die jeweilige Farbe f�r c eingesetzt

    
   
function random1(x: number) { //Eine Zahl wird zuf�llig durch diese Funktion generiert, damit sp�ter Karten zuf�llig verteilt werden k�nnen
        return Math.floor(Math.random() * Math.floor(x))};
   
   
    
    function placeDiv(_color: string, _v: string, _y: number):void{ //Funktion placeDiv wird eine Karte als Div darstellen
        let div: HTMLDivElement = document.createElement("div");
        document.body.appendChild(div);
    
        div.setAttribute("id", "a" + _y); //div bekommt eine ID, damit document.getElementById funktioniert.
        document.getElementById("a" + _y).innerHTML += _v; //Es wird auf die oben erstellte Id zugegriffen und _v �bergibt den Text der in der Karte stehen soll
        let s: CSSStyleDeclaration = div.style;
        s.border = "thin solid black";
        s.textAlign="center";
        s.position = "absolute";
        s.backgroundColor = _color;
        s.width = 100+"px";
        s.height = 200+"px";
        s.left = (_y+0.2)*110 + "px";
        s.bottom = 40+"px";
        if (_color=="#000000"){
            s.color="white";}
        if (_color=="#0000ff"){
            s.color="white";
            }
        
        
    }
        
    let z: number;
    let input: string = prompt("Anzahl der Karten auswaehlen"); //prompt �ffnet ein Dialogfenster, jedoch wird das Eingabe als string angegeben
    z = Number(input); //der Input wird in eine Number gewechselt und damit an z �bergeben
  
   
    for (let d: number = 0; d < z; d++) { //Begin der For-Schleife
        let l = random1(15); //Funktion random wird ausgef�hrt und gibt eine Zahl von 0-14 aus
        if (l == 13 && s1 > 0) { //Wenn die zuf�llige Zahl 13 entspricht und die schwarzen Karten noch nicht aufgebraucht sind...
            c = "#000000"; //...wird die Farbe auf Schwarz gesetzt...
            s1--; //...und die Anzahl der schwarzen Karte -1 gesetzt
            placeDiv(c, "+4",d); //Werte werden an die Funktion PlaceDiv �bergeben, welche auch ausgef�hrt wird
            continue; //Duch Continue beginnt die For-Schleife von Vorne
        }

        else if (l == 13 && s1 <= 0) { //Wenn es keine schwarzen Karten mehr gibt, beginnt die Schleife vom Neuen
            d--; //d--, weil sonst durch continue d+=1 wird und eine Karte weniger generiert wird
            continue;
        }
        else { //selbe Verfahren f�r die zweite schwarze Karte
            if (l == 14 && s2 > 0) {
                c = "#000000";
                s2--;
                placeDiv(c,"Farbauswahl",d);
                continue;
            }
            else if (l == 14 && s2 <= 0) {
                d--;
                continue;
            }
            else {
                let b: number = random1(4); //random-Funktion wird ausgef�hrt, um die Farbe zu ermitteln
                switch (b) { //f�r jede Farbe ein Case, ausgeschlossen sind die schwarzen Karten
                    case 0:
                        c = "#ff0000";
                        if (AlleKarten[l].red > 0) {
                            placeDiv(c,AlleKarten[l].name,d); //PlaceDiv wird �bergeben mit c f�r die Farbe, der zuf�lligen Zahl l und dem Wert d, welcher den Abstand zwischen den Karten generiert
                            AlleKarten[l].red--;
                            continue;
                        }
                    case 1:
                        c = "#00ff00";
                        if (AlleKarten[l].green > 0) {
                            placeDiv (c,AlleKarten[l].name,d);
                            AlleKarten[l].green--;
                            continue;
                        }

                    case 2:
                        c = "#0000ff";
                        if (AlleKarten[l].blue > 0) {
                            placeDiv(c,AlleKarten[l].name,d);
                            AlleKarten[l].blue--;
                            continue;
                        }

                    case 3:
                        c = "#ffff00";
                        if (AlleKarten[l].yellow > 0) {
                            placeDiv(c,AlleKarten[l].name,d);
                            AlleKarten[l].yellow--;
                            continue;
                        }
                        else{
                            d--;
                        continue}

                }

            }

        }
    }
         function Stapel() { //Mit der Funktion Stapel wird ein weiteres Div generiert
            let div = document.createElement("div");
            document.body.appendChild(div);
            div.setAttribute("id", "Kartenstapel"); 
            document.getElementById("Kartenstapel").innerHTML += "Kartenstapel";
            let s = div.style;
            s.border = "solid black";
             s.textAlign="center";
            s.position = "absolute";
            s.backgroundColor = "#A04000";
            s.width = 100+"px";
            s.height = 200+"px";
            s.left = 50 + "px";
            s.top = 20 + "px";
        }
      
        function AblageStapel() {//Funktion zur Erstellung von dem Ablagestapel
            let div = document.createElement("div");
            document.body.appendChild(div);
            div.setAttribute("id", "Ablage");
            document.getElementById("Ablage").innerHTML += "Ablage";
            let s = div.style;
            s.border = "solid black";
            s.textAlign="center";
            s.position = "absolute";
            s.backgroundColor = "#717D7E";
            s.width = 100+"px";
            s.height = 200+"px";
            s.right = 50 + "px";
            s.top = 20 + "px";
        }
      
        AblageStapel(); //Funktionen werden aufgerufen
          Stapel();   
}
    
    document.addEventListener("DOMContentLoaded", (uno)) //Die Funktion uno wird es aufgerufen, wenn der DOM bereits geladen wurde
     
        
}