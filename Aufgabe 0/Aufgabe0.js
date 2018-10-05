/**
Aufgabe: 0
Name: Jan Dangschat
Matrikel: 259522
Datum: 04.10.2018
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
**/
var Aufgabe0;
(function (Aufgabe0) {
    var name = "";
    function box() {
        var name = prompt("Wie ist dein Name");
        var node = document.getElementById("content");
        node.innerHTML += "Hey ";
        node.innerHTML += name;
        node.innerHTML += " ,wie geht es dir";
        console.log("Hey", name, ",wie geht es dir");
    }
    document.addEventListener('DOMContentLoaded', box);
})(Aufgabe0 || (Aufgabe0 = {}));
//# sourceMappingURL=Aufgabe0.js.map