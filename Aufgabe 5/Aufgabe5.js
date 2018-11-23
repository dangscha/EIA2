var Aufgabe5;
(function (Aufgabe5) {
    document.addEventListener("DOMContentLoaded", writeHTML);
    document.addEventListener("DOMContentLoaded", init);
    var treePrice = 0;
    var ballPrice = 0;
    var candlePrice = 0;
    var lamettaPrice = 0;
    var holderPrice = 0;
    var shipmentPrice = 0;
    var ort = "";
    var strass = "";
    var nummer = "";
    var postleitzahl = "";
    function writeHTML() {
        var node = document.getElementById("fieldset");
        var childNodeHTML;
        childNodeHTML = "<h3>Baeume</h3>";
        childNodeHTML += "<select name='Select' id='tree'>";
        for (var i = 0; i < Aufgabe5.tree.length; i++) {
            childNodeHTML += "<option value='" + i + Aufgabe5.tree[i].name + "'>" + Aufgabe5.tree[i].name + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        childNodeHTML += "<h3>Glasskugeln</h3>";
        for (var i = 0; i < Aufgabe5.christmasBall.length; i++) {
            childNodeHTML += Aufgabe5.christmasBall[i].name;
            childNodeHTML += " <input type='number' id='numberBalls" + i + "' name='Stepper' step='1' min='0' max='30' value='0'/>";
            childNodeHTML += "<br>";
            continue;
        }
        //Kerzen
        childNodeHTML += "<h3>Kerzen</h3>";
        for (var i = 0; i < Aufgabe5.candle.length; i++) {
            childNodeHTML += Aufgabe5.candle[i].name;
            childNodeHTML += " <input type='number' id='numberCandles" + i + "' name='Stepper' step='1' min='0' max='30' value='0'/>";
            childNodeHTML += "<br>";
            continue;
        }
        childNodeHTML += "<h3>Lametta</h3>";
        for (var i = 0; i < Aufgabe5.lametta.length; i++) {
            childNodeHTML += Aufgabe5.lametta[i].name;
            childNodeHTML += " <input type='number' name='Stepper' id='numberLametta" + i + "' step='1' min='0' max='30' value='0'/>";
            childNodeHTML += "<br>";
            continue;
        }
        childNodeHTML += "<h3>Halterung</h3>";
        for (var i = 0; i < Aufgabe5.holder.length; i++) {
            childNodeHTML += " <input type='radio' name='Radiogroup' value='radio1' id='radio1' />";
            childNodeHTML += "<label for='radio1'>" + Aufgabe5.holder[i].name + "</label>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        childNodeHTML += "<h3>Lieferant</h3>";
        childNodeHTML += "<select name='Select' id='shipment'>";
        for (var i = 0; i < Aufgabe5.shipment.length; i++) {
            childNodeHTML += "<option value='" + i + Aufgabe5.shipment[i].name + "'>" + Aufgabe5.shipment[i].name + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        childNodeHTML += "<h3>Adresse</h3>";
        childNodeHTML += "<input id='strasse' type='text' name='Text' placeholder='Strasse' required/>";
        childNodeHTML += "<input id='hausnummer' type='text' name='Text' placeholder='Hausnummer' required/>";
        childNodeHTML += "<br>";
        childNodeHTML += "<input id='plz' type='text' name='Pattern' pattern='[0-9]{5}' placeholder='PLZ' required/>";
        childNodeHTML += "<input id='place' type='text' name='Text' placeholder='Ort' required/>";
        childNodeHTML += "<br>";
        node.innerHTML += childNodeHTML;
    }
    function init(_event) {
        var fieldset = document.getElementById("fieldset");
        fieldset.addEventListener("change", handleChange);
        document.getElementById("check").addEventListener("click", checkInputs);
    }
    function handleChange(_event) {
        var target = _event.target;
        var ballsValue1 = document.getElementById("numberBalls1");
        var ballValue1 = ballsValue1.value;
        console.log(ballsValue1.value);
        if (target.id == "tree") {
            var node = document.getElementById("baum");
            var value = target.value;
            var priceIndex = parseInt(value.substr(0, 1));
            var childNodeHTML = void 0;
            treePrice = Aufgabe5.tree[priceIndex].price;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
            console.log(treePrice);
        }
        if (target.id == "christmasBalls") {
            var node = document.getElementById("kugeln");
            var value = target.value;
            var priceIndex = parseInt(value.substr(0, 1));
            var childNodeHTML = void 0;
            ballPrice = Aufgabe5.christmasBall[priceIndex].price * ballValue1;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        if (target.id == "candles") {
            var node = document.getElementById("kerzen");
            var value = target.value;
            var priceIndex = parseInt(value.substr(0, 1));
            var childNodeHTML = void 0;
            candlePrice = Aufgabe5.candle[priceIndex].price;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
            console.log(candlePrice);
        }
        if (target.id == "lamettas") {
            var node = document.getElementById("lametta");
            var value = target.value;
            var priceIndex = parseInt(value.substr(0, 1));
            var childNodeHTML = void 0;
            lamettaPrice = Aufgabe5.lametta[priceIndex].price;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
            console.log(lamettaPrice);
        }
        if (target.id == "holder") {
            var node = document.getElementById("halterung");
            var value = target.value;
            var priceIndex = parseInt(value.substr(0, 1));
            var childNodeHTML = void 0;
            holderPrice = Aufgabe5.holder[priceIndex].price;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
            console.log(holderPrice);
        }
        if (target.id == "shipment") {
            var node = document.getElementById("lieferant");
            var value = target.value;
            var priceIndex = parseInt(value.substr(0, 1));
            var childNodeHTML = void 0;
            shipmentPrice = Aufgabe5.shipment[priceIndex].price;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
            console.log(shipmentPrice);
        }
        if (target.id == "strasse") {
            var node = document.getElementById("strass");
            strass = target.value;
            var childNodeHTML = void 0;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + target.value;
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        if (target.id == "hausnummer") {
            var node = document.getElementById("nummer");
            nummer = target.value;
            var childNodeHTML = void 0;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + target.value;
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        if (target.id == "plz") {
            var node = document.getElementById("postleitzahl");
            postleitzahl = target.value;
            var childNodeHTML = void 0;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + target.value;
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        if (target.id == "place") {
            var node = document.getElementById("ort");
            ort = target.value;
            var childNodeHTML = void 0;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + target.value;
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        price();
        console.log(ballPrice);
    }
    function price() {
        var HTML;
        var node = document.getElementById("preis");
        HTML = " ";
        HTML += (treePrice + ballPrice + candlePrice + lamettaPrice + holderPrice + shipmentPrice);
        HTML += " Euro";
        node.innerHTML = HTML;
    }
    function checkInputs() {
        console.log("lul");
        if (treePrice == 0 || ballPrice == 0 || candlePrice == 0 || lamettaPrice == 0 || holderPrice == 0 || shipmentPrice == 0 || ort == "" || nummer == "" || postleitzahl == "" || strass == "") {
            document.getElementById("buttonCheck").innerHTML = "Fehlende Angaben!";
        }
        else {
            document.getElementById("buttonCheck").innerHTML = "";
        }
    }
})(Aufgabe5 || (Aufgabe5 = {}));
//# sourceMappingURL=Aufgabe5.js.map