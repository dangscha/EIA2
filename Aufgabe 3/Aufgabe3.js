/**
Aufgabe: 2b
Name: Jan Dangschat
Matrikel: 259522
Datum: 28.10.2018
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
**/
var Aufgabe31;
(function (Aufgabe31) {
    document.addEventListener("DOMContentLoaded", uno);
    var AllCards = [{ color: "#0000ff", typ: "0" }, { color: "#0000ff", typ: "1" }, { color: "#0000ff", typ: "1" }, { color: "#0000ff", typ: "2" }, { color: "#0000ff", typ: "2" }, { color: "#0000ff", typ: "3" }, { color: "#0000ff", typ: "3" }, { color: "#0000ff", typ: "4" }, { color: "#0000ff", typ: "4" }, { color: "#0000ff", typ: "5" }, { color: "#0000ff", typ: "5" }, { color: "#0000ff", typ: "6" }, { color: "#0000ff", typ: "6" }, { color: "#0000ff", typ: "7" }, { color: "#0000ff", typ: "7" }, { color: "#0000ff", typ: "8" }, { color: "#0000ff", typ: "8" }, { color: "#0000ff", typ: "9" }, { color: "#0000ff", typ: "9" }, { color: "#0000ff", typ: "Reverse" }, { color: "#0000ff", typ: "Reverse" }, { color: "#0000ff", typ: "Plus 2" }, { color: "#0000ff", typ: "Plus 2" }, { color: "#0000ff", typ: "Skip" }, { color: "#0000ff", typ: "Skip" }, { color: "#ff0000", typ: "0" }, { color: "#ff0000", typ: "1" }, { color: "#ff0000", typ: "1" }, { color: "#ff0000", typ: "2" }, { color: "#ff0000", typ: "2" }, { color: "#ff0000", typ: "3" }, { color: "#ff0000", typ: "3" }, { color: "#ff0000", typ: "4" }, { color: "#ff0000", typ: "4" }, { color: "#ff0000", typ: "5" }, { color: "#ff0000", typ: "5" }, { color: "#ff0000", typ: "6" }, { color: "#ff0000", typ: "6" }, { color: "#ff0000", typ: "7" }, { color: "#ff0000", typ: "7" }, { color: "#ff0000", typ: "8" }, { color: "#ff0000", typ: "8" }, { color: "#ff0000", typ: "9" }, { color: "#ff0000", typ: "9" }, { color: "#ff0000", typ: "Reverse" }, { color: "#ff0000", typ: "Reverse" }, { color: "#ff0000", typ: "Plus 2" }, { color: "#ff0000", typ: "Plus 2" }, { color: "#ff0000", typ: "Skip" }, { color: "#ff0000", typ: "Skip" }, { color: "#ffff00", typ: "0" }, { color: "#ffff00", typ: "1" }, { color: "#ffff00", typ: "1" }, { color: "#ffff00", typ: "2" }, { color: "#ffff00", typ: "2" }, { color: "#ffff00", typ: "3" }, { color: "#ffff00", typ: "3" }, { color: "#ffff00", typ: "4" }, { color: "#ffff00", typ: "4" }, { color: "#ffff00", typ: "5" }, { color: "#ffff00", typ: "5" }, { color: "#ffff00", typ: "6" }, { color: "#ffff00", typ: "6" }, { color: "#ffff00", typ: "7" }, { color: "#ffff00", typ: "7" }, { color: "#ffff00", typ: "8" }, { color: "#ffff00", typ: "8" }, { color: "#ffff00", typ: "9" }, { color: "#ffff00", typ: "9" }, { color: "#ffff00", typ: "Reverse" }, { color: "#ffff00", typ: "Reverse" }, { color: "#ffff00", typ: "Plus 2" }, { color: "#ffff00", typ: "Plus 2" }, { color: "#ffff00", typ: "Skip" }, { color: "#ffff00", typ: "Skip" }, { color: "#00ff00", typ: "0" }, { color: "#00ff00", typ: "1" }, { color: "#00ff00", typ: "1" }, { color: "#00ff00", typ: "2" }, { color: "#00ff00", typ: "2" }, { color: "#00ff00", typ: "3" }, { color: "#00ff00", typ: "3" }, { color: "#00ff00", typ: "4" }, { color: "#00ff00", typ: "4" }, { color: "#00ff00", typ: "5" }, { color: "#00ff00", typ: "5" }, { color: "#00ff00", typ: "6" }, { color: "#00ff00", typ: "6" }, { color: "#00ff00", typ: "7" }, { color: "#00ff00", typ: "7" }, { color: "#00ff00", typ: "8" }, { color: "#00ff00", typ: "8" }, { color: "#00ff00", typ: "9" }, { color: "#00ff00", typ: "9" }, { color: "#00ff00", typ: "Reverse" }, { color: "#00ff00", typ: "Reverse" }, { color: "#00ff00", typ: "Plus 2" }, { color: "#00ff00", typ: "Plus 2" }, { color: "#00ff00", typ: "Skip" }, { color: "#00ff00", typ: "Skip" }, { color: "#000000", typ: "Plus 4" }, { color: "#000000", typ: "Plus 4" }, { color: "#000000", typ: "Plus 4" }, { color: "#000000", typ: "Plus 4" }, { color: "#000000", typ: "Color" }, { color: "#000000", typ: "Color" }, { color: "#000000", typ: "Color" }, { color: "#000000", typ: "Color" },];
    var HandCards = [];
    var pileCards = [];
    function CreateRandomNumber(x) {
        return Math.floor(Math.random() * Math.floor(x));
    }
    //Hauptfunktion
    function uno() {
        //Eventlistener
        function EventListenerSortCards() {
            var button = document.getElementById("button");
            button.addEventListener("click", sortCards);
        }
        EventListenerSortCards();
        function EventListenerAddCard() {
            var drawcard = document.getElementById("Nachzieh");
            drawcard.addEventListener("click", addCard);
        }
        EventListenerAddCard();
        //Sortieren
        function sortCards() {
            console.log(HandCards);
            console.log(AllCards);
            HandCards.sort(function (card1, card2) {
                var textA = card1.color.toUpperCase();
                var textB = card2.color.toUpperCase();
                return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
            });
            deleteCards();
            for (var i = 0; i < HandCards.length; i++) {
                placeDiv(HandCards[i].color, HandCards[i].typ, i);
            }
        }
        //Aufnehmen
        function addCard() {
            console.log(HandCards);
            console.log(AllCards);
        }
        //Prompt
        var numbercards;
        var input = prompt("Anzahl der Karten auswaehlen");
        numbercards = Number(input);
        //Delete Cards
        function deleteCards() {
            var node = document.getElementById("content");
            if (node.parentNode) {
                node.parentNode.removeChild(node);
            }
            var main = document.createElement("main");
            main.setAttribute("id", "content");
        }
        //PlaceDiv
        function placeDiv(_color, _typ, _y) {
            console.log(_color, _typ, _y);
            var div = document.createElement("div");
            document.getElementById("content").appendChild(div);
            div.setAttribute("id", "card" + _y);
            document.getElementById("card" + _y).innerHTML += _typ;
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
        //Karten ausgeben
        for (var i = 0; i < numbercards; i++) {
            var b = CreateRandomNumber(AllCards.length);
            placeDiv(AllCards[b].color, AllCards[b].typ, i);
            var card = AllCards.splice(b, 1)[0];
            HandCards.push(card);
            continue;
        }
        console.log(HandCards);
        console.log(AllCards);
    }
})(Aufgabe31 || (Aufgabe31 = {}));
//# sourceMappingURL=Aufgabe3.js.map