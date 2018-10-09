/**
Aufgabe: 0
Name: Jan Dangschat
Matrikel: 259522 
Datum: 04.10.2018
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
**/

namespace Aufgabe0 {


    function box() {
        var name = prompt("Wie ist dein Name");
        var node: HTMLElement = document.getElementById("content");
        node.innerHTML += "Hey ";
        node.innerHTML += name;
        node.innerHTML += " ,wie geht es dir";
        console.log("Hey", name, ",wie geht es dir")
    }

    document.addEventListener('DOMContentLoaded', box);
}
