var Aufgabe4;
(function (Aufgabe4) {
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
        for (var i = 0; i < Aufgabe4.tree.length; i++) {
            childNodeHTML += "<option value='" + i + Aufgabe4.tree[i].name + "'>" + Aufgabe4.tree[i].name + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        childNodeHTML += "<h3>Glasskugeln</h3>";
        childNodeHTML += "<select name='Select' id='christmasBalls'>";
        for (var i = 0; i < Aufgabe4.christmasBall.length; i++) {
            childNodeHTML += "<option value='" + i + Aufgabe4.christmasBall[i].name + "'>" + Aufgabe4.christmasBall[i].name + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        childNodeHTML += "<h3>Kerzen</h3>";
        childNodeHTML += "<select name='Select' id='candles'>";
        for (var i = 0; i < Aufgabe4.candle.length; i++) {
            childNodeHTML += "<option value='" + i + Aufgabe4.candle[i].name + "'>" + Aufgabe4.candle[i].name + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        childNodeHTML += "<h3>Lametta</h3>";
        childNodeHTML += "<select name='Select' id='lamettas'>";
        for (var i = 0; i < Aufgabe4.lametta.length; i++) {
            childNodeHTML += "<option value='" + i + Aufgabe4.lametta[i].name + "'>" + Aufgabe4.lametta[i].name + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        childNodeHTML += "<h3>Halterung</h3>";
        childNodeHTML += "<select name='Select' id='holder'>";
        for (var i = 0; i < Aufgabe4.holder.length; i++) {
            childNodeHTML += "<option value='" + i + Aufgabe4.holder[i].name + "'>" + Aufgabe4.holder[i].name + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        childNodeHTML += "<h3>Lieferant</h3>";
        childNodeHTML += "<select name='Select' id='shipment'>";
        for (var i = 0; i < Aufgabe4.shipment.length; i++) {
            childNodeHTML += "<option value='" + i + Aufgabe4.shipment[i].name + "'>" + Aufgabe4.shipment[i].name + "</option>";
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
        if (target.id == "tree") {
            var node_1 = document.getElementById("baum");
            var value = target.value;
            var priceIndex = parseInt(value.substr(0, 1));
            var childNodeHTML = void 0;
            treePrice = Aufgabe4.tree[priceIndex].price;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node_1.innerHTML = childNodeHTML;
            console.log(treePrice);
        }
        if (target.id == "christmasBalls") {
            var node_2 = document.getElementById("kugeln");
            var value = target.value;
            var priceIndex = parseInt(value.substr(0, 1));
            var childNodeHTML = void 0;
            ballPrice = Aufgabe4.christmasBall[priceIndex].price;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node_2.innerHTML = childNodeHTML;
            console.log(ballPrice);
        }
        if (target.id == "candles") {
            var node_3 = document.getElementById("kerzen");
            var value = target.value;
            var priceIndex = parseInt(value.substr(0, 1));
            var childNodeHTML = void 0;
            candlePrice = Aufgabe4.candle[priceIndex].price;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node_3.innerHTML = childNodeHTML;
            console.log(candlePrice);
        }
        if (target.id == "lamettas") {
            var node_4 = document.getElementById("lametta");
            var value = target.value;
            var priceIndex = parseInt(value.substr(0, 1));
            var childNodeHTML = void 0;
            lamettaPrice = Aufgabe4.lametta[priceIndex].price;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node_4.innerHTML = childNodeHTML;
            console.log(lamettaPrice);
        }
        if (target.id == "holder") {
            var node_5 = document.getElementById("halterung");
            var value = target.value;
            var priceIndex = parseInt(value.substr(0, 1));
            var childNodeHTML = void 0;
            holderPrice = Aufgabe4.holder[priceIndex].price;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node_5.innerHTML = childNodeHTML;
            console.log(holderPrice);
        }
        if (target.id == "shipment") {
            var node_6 = document.getElementById("lieferant");
            var value = target.value;
            var priceIndex = parseInt(value.substr(0, 1));
            var childNodeHTML = void 0;
            shipmentPrice = Aufgabe4.shipment[priceIndex].price;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node_6.innerHTML = childNodeHTML;
            console.log(shipmentPrice);
        }
        if (target.id == "strasse") {
            var node_7 = document.getElementById("strass");
            strass = target.value;
            var childNodeHTML = void 0;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + target.value;
            childNodeHTML += "</a>";
            node_7.innerHTML = childNodeHTML;
        }
        if (target.id == "hausnummer") {
            var node_8 = document.getElementById("nummer");
            nummer = target.value;
            var childNodeHTML = void 0;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + target.value;
            childNodeHTML += "</a>";
            node_8.innerHTML = childNodeHTML;
        }
        if (target.id == "plz") {
            var node_9 = document.getElementById("postleitzahl");
            postleitzahl = target.value;
            var childNodeHTML = void 0;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + target.value;
            childNodeHTML += "</a>";
            node_9.innerHTML = childNodeHTML;
        }
        if (target.id == "place") {
            var node_10 = document.getElementById("ort");
            ort = target.value;
            var childNodeHTML = void 0;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + target.value;
            childNodeHTML += "</a>";
            node_10.innerHTML = childNodeHTML;
        }
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
})(Aufgabe4 || (Aufgabe4 = {}));
//# sourceMappingURL=Aufgabe4.js.map