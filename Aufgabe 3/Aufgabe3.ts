/**
Aufgabe: 2b
Name: Jan Dangschat
Matrikel: 259522 
Datum: 28.10.2018
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
**/

namespace Aufgabe31 {
    document.addEventListener("DOMContentLoaded", uno);

    interface Card {
        color: string;
        typ: string;
    }

    let allCards: Card[] = [{ color: "#0000ff", typ: "0" }, { color: "#0000ff", typ: "1" }, { color: "#0000ff", typ: "1" }, { color: "#0000ff", typ: "2" }, { color: "#0000ff", typ: "2" }, { color: "#0000ff", typ: "3" }, { color: "#0000ff", typ: "3" }, { color: "#0000ff", typ: "4" }, { color: "#0000ff", typ: "4" }, { color: "#0000ff", typ: "5" }, { color: "#0000ff", typ: "5" }, { color: "#0000ff", typ: "6" }, { color: "#0000ff", typ: "6" }, { color: "#0000ff", typ: "7" }, { color: "#0000ff", typ: "7" }, { color: "#0000ff", typ: "8" }, { color: "#0000ff", typ: "8" }, { color: "#0000ff", typ: "9" }, { color: "#0000ff", typ: "9" }, { color: "#0000ff", typ: "Reverse" }, { color: "#0000ff", typ: "Reverse" }, { color: "#0000ff", typ: "Plus 2" }, { color: "#0000ff", typ: "Plus 2" }, { color: "#0000ff", typ: "Skip" }, { color: "#0000ff", typ: "Skip" }, { color: "#ff0000", typ: "0" }, { color: "#ff0000", typ: "1" }, { color: "#ff0000", typ: "1" }, { color: "#ff0000", typ: "2" }, { color: "#ff0000", typ: "2" }, { color: "#ff0000", typ: "3" }, { color: "#ff0000", typ: "3" }, { color: "#ff0000", typ: "4" }, { color: "#ff0000", typ: "4" }, { color: "#ff0000", typ: "5" }, { color: "#ff0000", typ: "5" }, { color: "#ff0000", typ: "6" }, { color: "#ff0000", typ: "6" }, { color: "#ff0000", typ: "7" }, { color: "#ff0000", typ: "7" }, { color: "#ff0000", typ: "8" }, { color: "#ff0000", typ: "8" }, { color: "#ff0000", typ: "9" }, { color: "#ff0000", typ: "9" }, { color: "#ff0000", typ: "Reverse" }, { color: "#ff0000", typ: "Reverse" }, { color: "#ff0000", typ: "Plus 2" }, { color: "#ff0000", typ: "Plus 2" }, { color: "#ff0000", typ: "Skip" }, { color: "#ff0000", typ: "Skip" }, { color: "#ffff00", typ: "0" }, { color: "#ffff00", typ: "1" }, { color: "#ffff00", typ: "1" }, { color: "#ffff00", typ: "2" }, { color: "#ffff00", typ: "2" }, { color: "#ffff00", typ: "3" }, { color: "#ffff00", typ: "3" }, { color: "#ffff00", typ: "4" }, { color: "#ffff00", typ: "4" }, { color: "#ffff00", typ: "5" }, { color: "#ffff00", typ: "5" }, { color: "#ffff00", typ: "6" }, { color: "#ffff00", typ: "6" }, { color: "#ffff00", typ: "7" }, { color: "#ffff00", typ: "7" }, { color: "#ffff00", typ: "8" }, { color: "#ffff00", typ: "8" }, { color: "#ffff00", typ: "9" }, { color: "#ffff00", typ: "9" }, { color: "#ffff00", typ: "Reverse" }, { color: "#ffff00", typ: "Reverse" }, { color: "#ffff00", typ: "Plus 2" }, { color: "#ffff00", typ: "Plus 2" }, { color: "#ffff00", typ: "Skip" }, { color: "#ffff00", typ: "Skip" }, { color: "#00ff00", typ: "0" }, { color: "#00ff00", typ: "1" }, { color: "#00ff00", typ: "1" }, { color: "#00ff00", typ: "2" }, { color: "#00ff00", typ: "2" }, { color: "#00ff00", typ: "3" }, { color: "#00ff00", typ: "3" }, { color: "#00ff00", typ: "4" }, { color: "#00ff00", typ: "4" }, { color: "#00ff00", typ: "5" }, { color: "#00ff00", typ: "5" }, { color: "#00ff00", typ: "6" }, { color: "#00ff00", typ: "6" }, { color: "#00ff00", typ: "7" }, { color: "#00ff00", typ: "7" }, { color: "#00ff00", typ: "8" }, { color: "#00ff00", typ: "8" }, { color: "#00ff00", typ: "9" }, { color: "#00ff00", typ: "9" }, { color: "#00ff00", typ: "Reverse" }, { color: "#00ff00", typ: "Reverse" }, { color: "#00ff00", typ: "Plus 2" }, { color: "#00ff00", typ: "Plus 2" }, { color: "#00ff00", typ: "Skip" }, { color: "#00ff00", typ: "Skip" }, { color: "#000000", typ: "Plus 4" }, { color: "#000000", typ: "Plus 4" }, { color: "#000000", typ: "Plus 4" }, { color: "#000000", typ: "Plus 4" }, { color: "#000000", typ: "Color" }, { color: "#000000", typ: "Color" }, { color: "#000000", typ: "Color" }, { color: "#000000", typ: "Color" },]
    let handCards: Card[] = [];
    let pileCards: Card[] = [];

    //Hauptfunktion
    function uno() {

        //Eventlistener
        eventListenerSortCards();
        eventListenerAddCard();
        eventListenerDiscard();

        //Prompt
        let numberCards: number;
        let input: string = prompt("Anzahl der Karten auswaehlen");
        numberCards = Number(input);

        //Karten ausgeben
        for (let i: number = 0; i < numberCards; i++) {
            let randomNumber: number = createRandomNumber(allCards.length);
            placeDiv(allCards[randomNumber].color, allCards[randomNumber].typ, i);
            let card: Card = allCards.splice(randomNumber, 1)[0];
            handCards.push(card)
            continue;
        }

        //Zufällige Nummer generieren
        function createRandomNumber(x: number) {
            return Math.floor(Math.random() * Math.floor(x))
        }

        function eventListenerSortCards() {
            let button: HTMLButtonElement = <HTMLButtonElement>document.getElementById("button");
            button.addEventListener("click", sortCards)
        }

        function eventListenerAddCard() {
            let drawCard: HTMLDivElement = <HTMLDivElement>document.getElementById("Nachzieh");
            drawCard.addEventListener("click", addCard);
        }

        function eventListenerDiscard() {
            let discard: HTMLDivElement = <HTMLDivElement>document.getElementById("content");
            discard.addEventListener("click", removeCard);
        }

        //Ablegen
        function removeCard() {
            console.log(allCards);
        }
        //Sortieren
        function sortCards() {
            console.log(handCards);
            console.log(allCards);
            handCards.sort(function(card1, card2) {
                var textA = card1.color.toUpperCase();
                var textB = card2.color.toUpperCase();
                return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
            });
            deleteCards();
            for (let i: number = 0; i < handCards.length; i++) {
                placeDiv(handCards[i].color, handCards[i].typ, i)
            }
        }

        //add Card
        function addCard() {
            console.log(handCards);
            console.log(allCards);
            deleteCards();
            for (let i: number = 0; i < 1; i++) {
                let randomNumber: number = createRandomNumber(allCards.length);
                let card: Card = allCards.splice(randomNumber, 1)[0];
                handCards.push(card)
            }
            for (let i: number = 0; i < handCards.length; i++) {
                console.log(handCards);
                placeDiv(handCards[i].color, handCards[i].typ, i);
            }
        }

        //Delete Cards
        function deleteCards() {
            let node: HTMLElement = document.getElementById("content");
            if (node.parentNode) {
                node.parentNode.removeChild(node);
            }
            let main: HTMLElement = document.createElement("main");
            main.setAttribute("id", "content");
            document.getElementsByTagName("body")[0].appendChild(main);
        }

        //PlaceDiv
        function placeDiv(_color: string, _typ: string, _y: number) {
            let div: HTMLDivElement = document.createElement("div");
            document.getElementById("content").appendChild(div);
            div.setAttribute("id", "card" + _y);
            document.getElementById("card" + _y).innerHTML += _typ;
            let s: CSSStyleDeclaration = div.style;
            s.backgroundColor = _color;
            s.left = (_y + 0.2) * 110 + "px";
            if (_color == "#000000") {
                s.color = "white";
            }
            if (_color == "#0000ff") {
                s.color = "white";
            }
        }
    }
}