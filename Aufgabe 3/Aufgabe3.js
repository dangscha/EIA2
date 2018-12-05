/**
Aufgabe: 3
Name: Jan Dangschat
Matrikel: 259522
Datum: 10.11.2018
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
**/
var Aufgabe31;
(function (Aufgabe31) {
    document.addEventListener("DOMContentLoaded", uno);
    let allCards = [{ color: "#0000ff", typ: "0" }, { color: "#0000ff", typ: "1" }, { color: "#0000ff", typ: "1" }, { color: "#0000ff", typ: "2" }, { color: "#0000ff", typ: "2" }, { color: "#0000ff", typ: "3" }, { color: "#0000ff", typ: "3" }, { color: "#0000ff", typ: "4" }, { color: "#0000ff", typ: "4" }, { color: "#0000ff", typ: "5" }, { color: "#0000ff", typ: "5" }, { color: "#0000ff", typ: "6" }, { color: "#0000ff", typ: "6" }, { color: "#0000ff", typ: "7" }, { color: "#0000ff", typ: "7" }, { color: "#0000ff", typ: "8" }, { color: "#0000ff", typ: "8" }, { color: "#0000ff", typ: "9" }, { color: "#0000ff", typ: "9" }, { color: "#0000ff", typ: "Reverse" }, { color: "#0000ff", typ: "Reverse" }, { color: "#0000ff", typ: "Plus 2" }, { color: "#0000ff", typ: "Plus 2" }, { color: "#0000ff", typ: "Skip" }, { color: "#0000ff", typ: "Skip" }, { color: "#ff0000", typ: "0" }, { color: "#ff0000", typ: "1" }, { color: "#ff0000", typ: "1" }, { color: "#ff0000", typ: "2" }, { color: "#ff0000", typ: "2" }, { color: "#ff0000", typ: "3" }, { color: "#ff0000", typ: "3" }, { color: "#ff0000", typ: "4" }, { color: "#ff0000", typ: "4" }, { color: "#ff0000", typ: "5" }, { color: "#ff0000", typ: "5" }, { color: "#ff0000", typ: "6" }, { color: "#ff0000", typ: "6" }, { color: "#ff0000", typ: "7" }, { color: "#ff0000", typ: "7" }, { color: "#ff0000", typ: "8" }, { color: "#ff0000", typ: "8" }, { color: "#ff0000", typ: "9" }, { color: "#ff0000", typ: "9" }, { color: "#ff0000", typ: "Reverse" }, { color: "#ff0000", typ: "Reverse" }, { color: "#ff0000", typ: "Plus 2" }, { color: "#ff0000", typ: "Plus 2" }, { color: "#ff0000", typ: "Skip" }, { color: "#ff0000", typ: "Skip" }, { color: "#ffff00", typ: "0" }, { color: "#ffff00", typ: "1" }, { color: "#ffff00", typ: "1" }, { color: "#ffff00", typ: "2" }, { color: "#ffff00", typ: "2" }, { color: "#ffff00", typ: "3" }, { color: "#ffff00", typ: "3" }, { color: "#ffff00", typ: "4" }, { color: "#ffff00", typ: "4" }, { color: "#ffff00", typ: "5" }, { color: "#ffff00", typ: "5" }, { color: "#ffff00", typ: "6" }, { color: "#ffff00", typ: "6" }, { color: "#ffff00", typ: "7" }, { color: "#ffff00", typ: "7" }, { color: "#ffff00", typ: "8" }, { color: "#ffff00", typ: "8" }, { color: "#ffff00", typ: "9" }, { color: "#ffff00", typ: "9" }, { color: "#ffff00", typ: "Reverse" }, { color: "#ffff00", typ: "Reverse" }, { color: "#ffff00", typ: "Plus 2" }, { color: "#ffff00", typ: "Plus 2" }, { color: "#ffff00", typ: "Skip" }, { color: "#ffff00", typ: "Skip" }, { color: "#00ff00", typ: "0" }, { color: "#00ff00", typ: "1" }, { color: "#00ff00", typ: "1" }, { color: "#00ff00", typ: "2" }, { color: "#00ff00", typ: "2" }, { color: "#00ff00", typ: "3" }, { color: "#00ff00", typ: "3" }, { color: "#00ff00", typ: "4" }, { color: "#00ff00", typ: "4" }, { color: "#00ff00", typ: "5" }, { color: "#00ff00", typ: "5" }, { color: "#00ff00", typ: "6" }, { color: "#00ff00", typ: "6" }, { color: "#00ff00", typ: "7" }, { color: "#00ff00", typ: "7" }, { color: "#00ff00", typ: "8" }, { color: "#00ff00", typ: "8" }, { color: "#00ff00", typ: "9" }, { color: "#00ff00", typ: "9" }, { color: "#00ff00", typ: "Reverse" }, { color: "#00ff00", typ: "Reverse" }, { color: "#00ff00", typ: "Plus 2" }, { color: "#00ff00", typ: "Plus 2" }, { color: "#00ff00", typ: "Skip" }, { color: "#00ff00", typ: "Skip" }, { color: "#000000", typ: "Plus 4" }, { color: "#000000", typ: "Plus 4" }, { color: "#000000", typ: "Plus 4" }, { color: "#000000", typ: "Plus 4" }, { color: "#000000", typ: "Color" }, { color: "#000000", typ: "Color" }, { color: "#000000", typ: "Color" }, { color: "#000000", typ: "Color" },];
    let handCards = [];
    let pileCards = [];
    //Hauptfunktion
    function uno() {
        document.getElementById("button").addEventListener("click", sortCards);
        document.getElementById("Nachzieh").addEventListener("click", addCard);
        document.addEventListener("keydown", addCardSpace);
        document.getElementById("content").addEventListener("click", removeCard);
        //Prompt
        let numberCards;
        let input = prompt("Anzahl der Karten auswaehlen");
        numberCards = Number(input);
        //Karten ausgeben
        for (let i = 0; i < numberCards; i++) {
            let randomNumber = createRandomNumber(allCards.length);
            placeDiv(allCards[randomNumber].color, allCards[randomNumber].typ, i);
            let card = allCards.splice(randomNumber, 1)[0];
            handCards.push(card);
            continue;
        }
    }
    //generate random number
    function createRandomNumber(x) {
        return Math.floor(Math.random() * Math.floor(x));
    }
    //discard
    function removeCard(_event) {
        let main = document.getElementById("content");
        let domCard = _event.target;
        if (domCard != main) {
            let index;
            let domAttribute = domCard.getAttribute("id");
            domAttribute = domAttribute.substr(4);
            index = parseInt(domAttribute);
            let karte = handCards.splice(index, 1)[0];
            pileCards.push(karte);
            deleteCards();
            deletePile();
            for (let i = 0; i < handCards.length; i++) {
                placeDiv(handCards[i].color, handCards[i].typ, i);
            }
            for (let i = 0; i < pileCards.length; i++) {
                placePile(pileCards[i].color, pileCards[i].typ, i);
            }
        }
    }
    function deletePile() {
        let node = document.getElementById("Ablagestapel");
        node.innerHTML = "Ablagestapel";
    }
    function placePile(_color, _typ, _y) {
        let div = document.createElement("div");
        document.getElementById("Ablagestapel").appendChild(div);
        div.setAttribute("id", "pile" + _y);
        div.setAttribute("class", "pile");
        document.getElementById("pile" + _y).innerHTML += _typ;
        let s = div.style;
        s.backgroundColor = _color;
        if (_color == "#000000") {
            s.color = "white";
        }
        if (_color == "#0000ff") {
            s.color = "white";
        }
    }
    //Sortieren
    function sortCards() {
        handCards.sort(compareCards);
        deleteCards();
        for (let i = 0; i < handCards.length; i++) {
            placeDiv(handCards[i].color, handCards[i].typ, i);
        }
    }
    function compareCards(card1, card2) {
        var textA = card1.color.toUpperCase();
        var textB = card2.color.toUpperCase();
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    }
    //add Card
    function addCard() {
        deleteCards();
        for (let i = 0; i < 1; i++) {
            let randomNumber = createRandomNumber(allCards.length);
            let card = allCards.splice(randomNumber, 1)[0];
            handCards.push(card);
        }
        for (let i = 0; i < handCards.length; i++) {
            console.log(handCards);
            placeDiv(handCards[i].color, handCards[i].typ, i);
        }
    }
    function addCardSpace(_event) {
        var keyCode = _event.keyCode;
        if (keyCode == 32) {
            addCard();
        }
    }
    //Delete Cards
    function deleteCards() {
        let node = document.getElementById("content");
        node.innerHTML = "";
    }
    //PlaceDiv
    function placeDiv(_color, _typ, _y) {
        let div = document.createElement("div");
        document.getElementById("content").appendChild(div);
        div.setAttribute("id", "card" + _y);
        document.getElementById("card" + _y).innerHTML += _typ;
        let s = div.style;
        s.backgroundColor = _color;
        s.left = (_y + 0.2) * 110 + "px";
        if (_color == "#000000") {
            s.color = "white";
        }
        if (_color == "#0000ff") {
            s.color = "white";
        }
    }
})(Aufgabe31 || (Aufgabe31 = {}));
//# sourceMappingURL=Aufgabe3.js.map