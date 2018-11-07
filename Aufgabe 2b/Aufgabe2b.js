/**
Aufgabe: 2b
Name: Jan Dangschat
Matrikel: 259522
Datum: 28.10.2018
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
**/
var Aufgabe31;
(function (Aufgabe31) {
    var cardblue1 = {
        color: "#0000ff",
        typ: "0",
    };
    var cardblue2 = {
        color: "#0000ff",
        typ: "1",
    };
    var cardblue3 = {
        color: "#0000ff",
        typ: "1",
    };
    var cardblue4 = {
        color: "#0000ff",
        typ: "2",
    };
    var cardblue5 = {
        color: "#0000ff",
        typ: "2",
    };
    var cardblue6 = {
        color: "#0000ff",
        typ: "3",
    };
    var cardblue7 = {
        color: "#0000ff",
        typ: "3",
    };
    var cardblue8 = {
        color: "#0000ff",
        typ: "4",
    };
    var cardblue9 = {
        color: "#0000ff",
        typ: "4",
    };
    var cardblue10 = {
        color: "#0000ff",
        typ: "5",
    };
    var cardblue11 = {
        color: "#0000ff",
        typ: "5",
    };
    var cardblue12 = {
        color: "#0000ff",
        typ: "6",
    };
    var cardblue13 = {
        color: "#0000ff",
        typ: "6",
    };
    var cardblue14 = {
        color: "#0000ff",
        typ: "7",
    };
    var cardblue15 = {
        color: "#0000ff",
        typ: "7",
    };
    var cardblue16 = {
        color: "#0000ff",
        typ: "8",
    };
    var cardblue17 = {
        color: "#0000ff",
        typ: "8",
    };
    var cardblue18 = {
        color: "#0000ff",
        typ: "9",
    };
    var cardblue19 = {
        color: "#0000ff",
        typ: "9",
    };
    var cardblue20 = {
        color: "#0000ff",
        typ: "Reverse",
    };
    var cardblue21 = {
        color: "#0000ff",
        typ: "Reverse",
    };
    var cardblue22 = {
        color: "#0000ff",
        typ: "Plus 2",
    };
    var cardblue23 = {
        color: "#0000ff",
        typ: "Plus 2",
    };
    var cardblue24 = {
        color: "#0000ff",
        typ: "Skip",
    };
    var cardblue25 = {
        color: "#0000ff",
        typ: "Skip",
    };
    var cardred1 = {
        color: "#ff0000",
        typ: "0",
    };
    var cardred2 = {
        color: "#ff0000",
        typ: "1",
    };
    var cardred3 = {
        color: "#ff0000",
        typ: "1",
    };
    var cardred4 = {
        color: "#ff0000",
        typ: "2",
    };
    var cardred5 = {
        color: "#ff0000",
        typ: "2",
    };
    var cardred6 = {
        color: "#ff0000",
        typ: "3",
    };
    var cardred7 = {
        color: "#ff0000",
        typ: "3",
    };
    var cardred8 = {
        color: "#ff0000",
        typ: "4",
    };
    var cardred9 = {
        color: "#ff0000",
        typ: "4",
    };
    var cardred10 = {
        color: "#ff0000",
        typ: "5",
    };
    var cardred11 = {
        color: "#ff0000",
        typ: "5",
    };
    var cardred12 = {
        color: "#ff0000",
        typ: "6",
    };
    var cardred13 = {
        color: "#ff0000",
        typ: "6",
    };
    var cardred14 = {
        color: "#ff0000",
        typ: "7",
    };
    var cardred15 = {
        color: "#ff0000",
        typ: "7",
    };
    var cardred16 = {
        color: "#ff0000",
        typ: "8",
    };
    var cardred17 = {
        color: "#ff0000",
        typ: "8",
    };
    var cardred18 = {
        color: "#ff0000",
        typ: "9",
    };
    var cardred19 = {
        color: "#ff0000",
        typ: "9",
    };
    var cardred20 = {
        color: "#ff0000",
        typ: "Reverse",
    };
    var cardred21 = {
        color: "#ff0000",
        typ: "Reverse",
    };
    var cardred22 = {
        color: "#ff0000",
        typ: "Plus 2",
    };
    var cardred23 = {
        color: "#ff0000",
        typ: "Plus 2",
    };
    var cardred24 = {
        color: "#ff0000",
        typ: "Skip",
    };
    var cardred25 = {
        color: "#ff0000",
        typ: "Skip",
    };
    var cardyellow1 = {
        color: "#ffff00",
        typ: "0",
    };
    var cardyellow2 = {
        color: "#ffff00",
        typ: "1",
    };
    var cardyellow3 = {
        color: "#ffff00",
        typ: "1",
    };
    var cardyellow4 = {
        color: "#ffff00",
        typ: "2",
    };
    var cardyellow5 = {
        color: "#ffff00",
        typ: "2",
    };
    var cardyellow6 = {
        color: "#ffff00",
        typ: "3",
    };
    var cardyellow7 = {
        color: "#ffff00",
        typ: "3",
    };
    var cardyellow8 = {
        color: "#ffff00",
        typ: "4",
    };
    var cardyellow9 = {
        color: "#ffff00",
        typ: "4",
    };
    var cardyellow10 = {
        color: "#ffff00",
        typ: "5",
    };
    var cardyellow11 = {
        color: "#ffff00",
        typ: "5",
    };
    var cardyellow12 = {
        color: "#ffff00",
        typ: "6",
    };
    var cardyellow13 = {
        color: "#ffff00",
        typ: "6",
    };
    var cardyellow14 = {
        color: "#ffff00",
        typ: "7",
    };
    var cardyellow15 = {
        color: "#ffff00",
        typ: "7",
    };
    var cardyellow16 = {
        color: "#ffff00",
        typ: "8",
    };
    var cardyellow17 = {
        color: "#ffff00",
        typ: "8",
    };
    var cardyellow18 = {
        color: "#ffff00",
        typ: "9",
    };
    var cardyellow19 = {
        color: "#ffff00",
        typ: "9",
    };
    var cardyellow20 = {
        color: "#ffff00",
        typ: "Reverse",
    };
    var cardyellow21 = {
        color: "#ffff00",
        typ: "Reverse",
    };
    var cardyellow22 = {
        color: "#ffff00",
        typ: "Plus 2",
    };
    var cardyellow23 = {
        color: "#ffff00",
        typ: "Plus 2",
    };
    var cardyellow24 = {
        color: "#ffff00",
        typ: "Skip",
    };
    var cardyellow25 = {
        color: "#ffff00",
        typ: "Skip",
    };
    var cardgreen1 = {
        color: "#00ff00",
        typ: "0",
    };
    var cardgreen2 = {
        color: "#00ff00",
        typ: "1",
    };
    var cardgreen3 = {
        color: "#00ff00",
        typ: "1",
    };
    var cardgreen4 = {
        color: "#00ff00",
        typ: "2",
    };
    var cardgreen5 = {
        color: "#00ff00",
        typ: "2",
    };
    var cardgreen6 = {
        color: "#00ff00",
        typ: "3",
    };
    var cardgreen7 = {
        color: "#00ff00",
        typ: "3",
    };
    var cardgreen8 = {
        color: "#00ff00",
        typ: "4",
    };
    var cardgreen9 = {
        color: "#00ff00",
        typ: "4",
    };
    var cardgreen10 = {
        color: "#00ff00",
        typ: "5",
    };
    var cardgreen11 = {
        color: "#00ff00",
        typ: "5",
    };
    var cardgreen12 = {
        color: "#00ff00",
        typ: "6",
    };
    var cardgreen13 = {
        color: "#00ff00",
        typ: "6",
    };
    var cardgreen14 = {
        color: "#00ff00",
        typ: "7",
    };
    var cardgreen15 = {
        color: "#00ff00",
        typ: "7",
    };
    var cardgreen16 = {
        color: "#00ff00",
        typ: "8",
    };
    var cardgreen17 = {
        color: "#00ff00",
        typ: "8",
    };
    var cardgreen18 = {
        color: "#00ff00",
        typ: "9",
    };
    var cardgreen19 = {
        color: "#00ff00",
        typ: "9",
    };
    var cardgreen20 = {
        color: "#00ff00",
        typ: "Reverse",
    };
    var cardgreen21 = {
        color: "#00ff00",
        typ: "Reverse",
    };
    var cardgreen22 = {
        color: "#00ff00",
        typ: "Plus 2",
    };
    var cardgreen23 = {
        color: "#00ff00",
        typ: "Plus 2",
    };
    var cardgreen24 = {
        color: "#00ff00",
        typ: "Skip",
    };
    var cardgreen25 = {
        color: "#00ff00",
        typ: "Skip",
    };
    var cardblack1 = {
        color: "#000000",
        typ: "Plus 4",
    };
    var cardblack2 = {
        color: "#000000",
        typ: "Plus 4",
    };
    var cardblack3 = {
        color: "#000000",
        typ: "Plus 4",
    };
    var cardblack4 = {
        color: "#000000",
        typ: "Plus 4",
    };
    var cardblack5 = {
        color: "#000000",
        typ: "Color",
    };
    var cardblack6 = {
        color: "#000000",
        typ: "Color",
    };
    var cardblack7 = {
        color: "#000000",
        typ: "Color",
    };
    var cardblack8 = {
        color: "#000000",
        typ: "Color",
    };
    var AllCards = [cardblue1, cardblue2, cardblue3, cardblue4, cardblue5, cardblue6, cardblue7, cardblue8, cardblue9, cardblue10, cardblue11, cardblue12, cardblue13, cardblue14, cardblue15, cardblue16, cardblue17, cardblue18, cardblue19, cardblue20, cardblue21, cardblue22, cardblue23, cardblue24, cardblue25, cardred1, cardred2, cardred3, cardred4, cardred5, cardred6, cardred7, cardred8, cardred9, cardred10, cardred11, cardred12, cardred13, cardred14, cardred15, cardred16, cardred17, cardred18, cardred19, cardred20, cardred21, cardred22, cardred23, cardred24, cardred25, cardgreen1, cardgreen2, cardgreen3, cardgreen4, cardgreen5, cardgreen6, cardgreen7, cardgreen8, cardgreen9, cardgreen10, cardgreen11, cardgreen12, cardgreen13, cardgreen14, cardgreen15, cardgreen16, cardgreen17, cardgreen18, cardgreen19, cardgreen20, cardgreen21, cardgreen22, cardgreen23, cardgreen24, cardgreen25, cardyellow1, cardyellow2, cardyellow3, cardyellow4, cardyellow5, cardyellow6, cardyellow7, cardyellow8, cardyellow9, cardyellow10, cardyellow11, cardyellow12, cardyellow13, cardyellow14, cardyellow15, cardyellow16, cardyellow17, cardyellow18, cardyellow19, cardyellow20, cardyellow21, cardyellow22, cardyellow23, cardyellow24, cardyellow25, cardblack1, cardblack2, cardblack3, cardblack4, cardblack5, cardblack6, cardblack7, cardblack8];
    var HandCards = [];
    function random(x) {
        return Math.floor(Math.random() * Math.floor(x));
    }
    function uno() {
        var z;
        var input = prompt("Anzahl der Karten auswaehlen");
        z = Number(input);
        function placeDiv(_color, _typ, _y) {
            var div = document.createElement("div");
            document.body.appendChild(div);
            div.setAttribute("id", "a" + _y);
            document.getElementById("a" + _y).innerHTML += _typ;
            var s = div.style;
            s.backgroundColor = _color;
            s.left = (_y + 0.2) * 110 + "px";
            if (_color == "#000000") {
                s.color = "white";
            }
            if (_color == "#0000ff") {
                s.color = "white";
            }
        }
        for (var i = 0; i < z; i++) {
            var b = random(AllCards.length);
            placeDiv(AllCards[b].color, AllCards[b].typ, i);
            AllCards.splice(b, 1);
            continue;
        }
        console.log(HandCards);
        console.log(AllCards);
    }
    document.addEventListener("DOMContentLoaded", (uno));
})(Aufgabe31 || (Aufgabe31 = {}));
//# sourceMappingURL=Aufgabe2b.js.map