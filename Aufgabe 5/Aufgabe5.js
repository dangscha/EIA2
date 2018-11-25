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
            childNodeHTML += " <input type='number' id='numberBalls" + i + "' name='Stepper' step='1' min='0' max='30' value='0' title='" + Aufgabe5.christmasBall[i].name + "' price='" + Aufgabe5.christmasBall[i].price + "'/>";
            childNodeHTML += "<br>";
            continue;
        }
        //Kerzen
        childNodeHTML += "<h3>Kerzen</h3>";
        for (var i = 0; i < Aufgabe5.candle.length; i++) {
            childNodeHTML += Aufgabe5.candle[i].name;
            childNodeHTML += " <input type='number' id='numberCandles" + i + "' name='Stepper' step='1' min='0' max='30' value='0' title='" + Aufgabe5.candle[i].name + "' price='" + Aufgabe5.candle[i].price + "' />";
            childNodeHTML += "<br>";
            continue;
        }
        childNodeHTML += "<h3>Lametta</h3>";
        for (var i = 0; i < Aufgabe5.lametta.length; i++) {
            childNodeHTML += Aufgabe5.lametta[i].name;
            childNodeHTML += " <input type='number' id='numberLametta" + i + "' name='Stepper' step='1' min='0' max='30' value='0' title='" + Aufgabe5.lametta[i].name + "' price=" + Aufgabe5.lametta[i].price + " />";
            childNodeHTML += "<br>";
            continue;
        }
        childNodeHTML += "<h3>Halterung</h3>";
        childNodeHTML += "<select name='Select' id='holder'>";
        for (var i = 0; i < Aufgabe5.holder.length; i++) {
            childNodeHTML += "<option value='" + i + Aufgabe5.holder[i].name + "'>" + Aufgabe5.holder[i].name + "</option>";
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
        console.log(target.id);
        var articles = document.getElementsByTagName("input");
        var node = document.getElementById("deko");
        node.innerHTML = "";
        for (var i = 0; i < articles.length; i++) {
            var article = articles[i];
            var value = parseInt(article.value);
            if (article.name == "Stepper") {
                var node_1 = document.getElementById("deko");
                var DOMValue = target.value;
                target.setAttribute("value", DOMValue);
                var value_1 = parseInt(article.getAttribute("value"));
                var name_1 = article.getAttribute("title");
                var price_1 = article.getAttribute("price");
                var childNodeHTML = void 0;
                if (value_1 > 0) {
                    childNodeHTML = "";
                    childNodeHTML += "<a price='" + (Number(price_1) * value_1) + "'>";
                    childNodeHTML += " " + value_1 + name_1 + " " + (Number(price_1) * value_1) + " Euro";
                    childNodeHTML += "</a>";
                    node_1.innerHTML += childNodeHTML;
                }
            }
        }
        if (target.id == "tree") {
            var node_2 = document.getElementById("baum");
            var value = target.value;
            var priceIndex = parseInt(value.substr(0, 1));
            var childNodeHTML = void 0;
            treePrice = Aufgabe5.tree[priceIndex].price;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node_2.innerHTML = childNodeHTML;
        }
        if (target.id == "holder") {
            var node_3 = document.getElementById("halterung");
            var value = target.value;
            var priceIndex = parseInt(value.substr(0, 1));
            var childNodeHTML = void 0;
            holderPrice = Aufgabe5.holder[priceIndex].price;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node_3.innerHTML = childNodeHTML;
        }
        if (target.id == "shipment") {
            var node_4 = document.getElementById("lieferant");
            var value = target.value;
            var priceIndex = parseInt(value.substr(0, 1));
            var childNodeHTML = void 0;
            shipmentPrice = Aufgabe5.shipment[priceIndex].price;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node_4.innerHTML = childNodeHTML;
        }
        if (target.id == "strasse") {
            var node_5 = document.getElementById("strass");
            strass = target.value;
            var childNodeHTML = void 0;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + target.value;
            childNodeHTML += "</a>";
            node_5.innerHTML = childNodeHTML;
        }
        if (target.id == "hausnummer") {
            var node_6 = document.getElementById("nummer");
            nummer = target.value;
            var childNodeHTML = void 0;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + target.value;
            childNodeHTML += "</a>";
            node_6.innerHTML = childNodeHTML;
        }
        if (target.id == "plz") {
            var node_7 = document.getElementById("postleitzahl");
            postleitzahl = target.value;
            var childNodeHTML = void 0;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + target.value;
            childNodeHTML += "</a>";
            node_7.innerHTML = childNodeHTML;
        }
        if (target.id == "place") {
            var node_8 = document.getElementById("ort");
            ort = target.value;
            var childNodeHTML = void 0;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + target.value;
            childNodeHTML += "</a>";
            node_8.innerHTML = childNodeHTML;
        }
        price();
    }
    function price() {
        var checkout = document.getElementById("deko");
        var price = 0;
        console.log(checkout.childNodes);
        for (var i = 0; i < checkout.childNodes.length; i++) {
            var articlePrice = Number(document.getElementsByTagName("a")[i].getAttribute("price"));
            price += articlePrice;
            console.log(articlePrice);
        }
        var HTML;
        var node = document.getElementById("preis");
        HTML = " ";
        HTML += (treePrice + holderPrice + shipmentPrice + price);
        HTML += " Euro";
        node.innerHTML = HTML;
    }
    function checkInputs() {
        if (treePrice == 0 || holderPrice == 0 || shipmentPrice == 0 || ort == "" || nummer == "" || postleitzahl == "" || strass == "") {
            document.getElementById("buttonCheck").innerHTML = "Fehlende Angaben!";
        }
        else {
            document.getElementById("buttonCheck").innerHTML = "";
        }
    }
})(Aufgabe5 || (Aufgabe5 = {}));
//# sourceMappingURL=Aufgabe5.js.map