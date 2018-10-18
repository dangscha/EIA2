var Aufgabe2;
(function (Aufgabe2) {
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
    var AlleKarten = [k0, k1, k2, k3, k4, k5, k6, k7, k8, k9, kr, kp2, ka];
    var s1 = 4;
    var s2 = 4;
    var c = "";
    function random1(x) {
        return Math.floor(Math.random() * Math.floor(x));
    }
    ;
    function placeDiv(_color, _v, _y) {
        var div = document.createElement("div");
        document.body.appendChild(div);
        var s = div.style;
        s.border = "thin solid black";
        s.position = "absolute";
        s.backgroundColor = _color;
        s.width = 20 + "px";
        s.height = 50 + "px";
        s.left = (_y + 1) * 30 + "px";
        s.top = 40 + "px";
    }
    var z;
    var input = prompt("Anzahl der Karten auswaehlen");
    z = Number(input);
    for (var d = 0; d < z; d++) {
        var l = random1(15);
        if (l == 13 && s1 > 0) {
            c = "#000000";
            s1--;
            placeDiv(c, "+4", d);
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
                placeDiv(c, "Farbauswahl", d);
                continue;
            }
            else if (l == 14 && s2 <= 0) {
                d--;
                continue;
            }
            else {
                var b = random1(4);
                switch (b) {
                    case 0:
                        c = "#ff0000";
                        if (AlleKarten[l].red > 0) {
                            placeDiv(c, AlleKarten[l].name, d);
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
})(Aufgabe2 || (Aufgabe2 = {}));
//# sourceMappingURL=Aufgabe2.js.map