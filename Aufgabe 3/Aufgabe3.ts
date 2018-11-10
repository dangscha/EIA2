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

    let AllCards: Card[] = [{ color: "#0000ff", typ: "0" }, { color: "#0000ff", typ: "1" }, { color: "#0000ff", typ: "1" }, { color: "#0000ff", typ: "2" }, { color: "#0000ff", typ: "2" }, { color: "#0000ff", typ: "3" }, { color: "#0000ff", typ: "3" }, { color: "#0000ff", typ: "4" }, { color: "#0000ff", typ: "4" }, { color: "#0000ff", typ: "5" }, { color: "#0000ff", typ: "5" }, { color: "#0000ff", typ: "6" }, { color: "#0000ff", typ: "6" }, { color: "#0000ff", typ: "7" }, { color: "#0000ff", typ: "7" }, { color: "#0000ff", typ: "8" }, { color: "#0000ff", typ: "8" }, { color: "#0000ff", typ: "9" }, { color: "#0000ff", typ: "9" }, { color: "#0000ff", typ: "Reverse" }, { color: "#0000ff", typ: "Reverse" }, { color: "#0000ff", typ: "Plus 2" }, { color: "#0000ff", typ: "Plus 2" }, { color: "#0000ff", typ: "Skip" }, { color: "#0000ff", typ: "Skip" }, { color: "#ff0000", typ: "0" }, { color: "#ff0000", typ: "1" }, { color: "#ff0000", typ: "1" }, { color: "#ff0000", typ: "2" }, { color: "#ff0000", typ: "2" }, { color: "#ff0000", typ: "3" }, { color: "#ff0000", typ: "3" }, { color: "#ff0000", typ: "4" }, { color: "#ff0000", typ: "4" }, { color: "#ff0000", typ: "5" }, { color: "#ff0000", typ: "5" }, { color: "#ff0000", typ: "6" }, { color: "#ff0000", typ: "6" }, { color: "#ff0000", typ: "7" }, { color: "#ff0000", typ: "7" }, { color: "#ff0000", typ: "8" }, { color: "#ff0000", typ: "8" }, { color: "#ff0000", typ: "9" }, { color: "#ff0000", typ: "9" }, { color: "#ff0000", typ: "Reverse" }, { color: "#ff0000", typ: "Reverse" }, { color: "#ff0000", typ: "Plus 2" }, { color: "#ff0000", typ: "Plus 2" }, { color: "#ff0000", typ: "Skip" }, { color: "#ff0000", typ: "Skip" }, { color: "#ffff00", typ: "0" }, { color: "#ffff00", typ: "1" }, { color: "#ffff00", typ: "1" }, { color: "#ffff00", typ: "2" }, { color: "#ffff00", typ: "2" }, { color: "#ffff00", typ: "3" }, { color: "#ffff00", typ: "3" }, { color: "#ffff00", typ: "4" }, { color: "#ffff00", typ: "4" }, { color: "#ffff00", typ: "5" }, { color: "#ffff00", typ: "5" }, { color: "#ffff00", typ: "6" }, { color: "#ffff00", typ: "6" }, { color: "#ffff00", typ: "7" }, { color: "#ffff00", typ: "7" }, { color: "#ffff00", typ: "8" }, { color: "#ffff00", typ: "8" }, { color: "#ffff00", typ: "9" }, { color: "#ffff00", typ: "9" }, { color: "#ffff00", typ: "Reverse" }, { color: "#ffff00", typ: "Reverse" }, { color: "#ffff00", typ: "Plus 2" }, { color: "#ffff00", typ: "Plus 2" }, { color: "#ffff00", typ: "Skip" }, { color: "#ffff00", typ: "Skip" }, { color: "#00ff00", typ: "0" }, { color: "#00ff00", typ: "1" }, { color: "#00ff00", typ: "1" }, { color: "#00ff00", typ: "2" }, { color: "#00ff00", typ: "2" }, { color: "#00ff00", typ: "3" }, { color: "#00ff00", typ: "3" }, { color: "#00ff00", typ: "4" }, { color: "#00ff00", typ: "4" }, { color: "#00ff00", typ: "5" }, { color: "#00ff00", typ: "5" }, { color: "#00ff00", typ: "6" }, { color: "#00ff00", typ: "6" }, { color: "#00ff00", typ: "7" }, { color: "#00ff00", typ: "7" }, { color: "#00ff00", typ: "8" }, { color: "#00ff00", typ: "8" }, { color: "#00ff00", typ: "9" }, { color: "#00ff00", typ: "9" }, { color: "#00ff00", typ: "Reverse" }, { color: "#00ff00", typ: "Reverse" }, { color: "#00ff00", typ: "Plus 2" }, { color: "#00ff00", typ: "Plus 2" }, { color: "#00ff00", typ: "Skip" }, { color: "#00ff00", typ: "Skip" }, { color: "#000000", typ: "Plus 4" }, { color: "#000000", typ: "Plus 4" }, { color: "#000000", typ: "Plus 4" }, { color: "#000000", typ: "Plus 4" }, { color: "#000000", typ: "Color" }, { color: "#000000", typ: "Color" }, { color: "#000000", typ: "Color" }, { color: "#000000", typ: "Color" },]
    let HandCards: Card[] = [];
    let pileCards: Card[] = [];

    function CreateRandomNumber(x: number) {
        return Math.floor(Math.random() * Math.floor(x))
    }
    //Hauptfunktion
    function uno() {
        //Eventlistener

        function EventListenerSortCards() {
            let button: HTMLButtonElement = <HTMLButtonElement>document.getElementById("button");
            button.addEventListener("click", sortCards)
        }
        EventListenerSortCards();

        function EventListenerAddCard() {
            let drawcard: HTMLDivElement = <HTMLDivElement>document.getElementById("Nachzieh");
            drawcard.addEventListener("click", addCard);
        }
        EventListenerAddCard();
        
        function EventListenerDiscard() {
            let discard: HTMLDivElement = <HTMLDivElement>document.getElementById("content");
            discard.addEventListener("click", RemoveCard);}
        EventListenerDiscard();
         
        //Ablegen
        function RemoveCard(){
                        console.log(AllCards);

            }
        //Sortieren
        function sortCards() {
            console.log(HandCards);
            console.log(AllCards);
            HandCards.sort(function(card1, card2) {
                var textA = card1.color.toUpperCase();
                var textB = card2.color.toUpperCase();
                return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
            });
            deleteCards();

            for (let i: number = 0; i < HandCards.length; i++) {

                placeDiv(HandCards[i].color, HandCards[i].typ, i)
            }
        }
        
        //add Card
        function addCard() {
            console.log(HandCards);
            console.log(AllCards);
            deleteCards();
            for (let i: number = 0; i < 1; i++) {
                let randomnumber: number = CreateRandomNumber(AllCards.length);
                let card: Card = AllCards.splice(randomnumber, 1)[0];
                HandCards.push(card)
            }
            for (let i: number = 0; i < HandCards.length; i++) {
                console.log(HandCards);
                placeDiv(HandCards[i].color, HandCards[i].typ, i);

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

        //Prompt
        let numbercards: number;
        let input: string = prompt("Anzahl der Karten auswaehlen");
        numbercards = Number(input);


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
        //Karten ausgeben
        for (let i: number = 0; i < numbercards; i++) {
            let randomnumber: number = CreateRandomNumber(AllCards.length);
            placeDiv(AllCards[randomnumber].color, AllCards[randomnumber].typ, i);
            let card: Card = AllCards.splice(randomnumber, 1)[0];
            HandCards.push(card)
            continue;
        }
        console.log(HandCards);
        console.log(AllCards)
    }
}