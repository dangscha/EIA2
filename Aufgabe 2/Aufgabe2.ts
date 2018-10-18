namespace Aufgabe2 {

    interface Karten {
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

    let AlleKarten: Karten[] = [k0, k1, k2, k3, k4, k5, k6, k7, k8, k9, kr, kp2, ka]
    let s1: number = 4
    let s2: number = 4
    let c: string = "";

    
   
function random1(x: number) {
        return Math.floor(Math.random() * Math.floor(x))};
   
   
    
    function placeDiv(_color: string, _v: string, _y: number):void{
        let div: HTMLDivElement = document.createElement("div");
        document.body.appendChild(div);
    
        let s: CSSStyleDeclaration = div.style;
        s.border = "thin solid black";
        s.position = "absolute";
        s.backgroundColor = _color;
        s.width = 20+"px";
        s.height = 50+"px";
        s.left = (_y+1)*30 + "px";
        s.top = 40+"px";
    }
 let z: number;
    let input: string = prompt("Anzahl der Karten auswaehlen");
    z = Number(input);
  
   
    for (let d: number = 0; d < z; d++) {
        let l = random1(15);
        if (l == 13 && s1 > 0) {
            c = "#000000";
            s1--;
            placeDiv(c, "+4",d);
            continue;
        }

        else if (l == 13 && s1 <= 0) {
            d--;
            continue;
        }
        else {
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
                let b: number = random1(4);
                switch (b) {
                    case 0:
                        c = "#ff0000";
                        if (AlleKarten[l].red > 0) {
                            placeDiv(c,AlleKarten[l].name,d);
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
}
