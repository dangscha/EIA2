var Aufgabe4;
(function (Aufgabe4) {
    document.addEventListener("DOMContentLoaded", writeHTML);
    document.addEventListener("DOMContentLoaded", init);
    let treePrice = 0;
    let ballPrice = 0;
    let candlePrice = 0;
    let lamettaPrice = 0;
    let holderPrice = 0;
    let shipmentPrice = 0;
    let ort = "";
    let strass = "";
    let nummer = "";
    let postleitzahl = "";
    function writeHTML() {
        let node = document.getElementById("fieldset");
        let childNodeHTML;
        childNodeHTML = "<h3>Baeume</h3>";
        childNodeHTML += "<select name='Select' id='tree'>";
        for (let i = 0; i < Aufgabe4.tree.length; i++) {
            childNodeHTML += "<option value='" + i + Aufgabe4.tree[i].name + "'>" + Aufgabe4.tree[i].name + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        childNodeHTML += "<h3>Glasskugeln</h3>";
        for (let i = 0; i < Aufgabe4.christmasBall.length; i++) {
            childNodeHTML += Aufgabe4.christmasBall[i].name;
            childNodeHTML += " <input type='number' id='numberBalls" + i + "' name='Stepper' step='1' min='0' max='30' value='0'/>";
            childNodeHTML += "<br>";
            continue;
        }
        //Kerzen
        childNodeHTML += "<h3>Kerzen</h3>";
        for (let i = 0; i < Aufgabe4.candle.length; i++) {
            childNodeHTML += Aufgabe4.candle[i].name;
            childNodeHTML += " <input type='number' id='numberCandles" + i + "' name='Stepper' step='1' min='0' max='30' value='0'/>";
            childNodeHTML += "<br>";
            continue;
        }
        childNodeHTML += "<h3>Lametta</h3>";
        for (let i = 0; i < Aufgabe4.lametta.length; i++) {
            childNodeHTML += Aufgabe4.lametta[i].name;
            childNodeHTML += " <input type='number' name='Stepper' id='numberLametta" + i + "' step='1' min='0' max='30' value='0'/>";
            childNodeHTML += "<br>";
            continue;
        }
        childNodeHTML += "<h3>Halterung</h3>";
        for (let i = 0; i < Aufgabe4.holder.length; i++) {
            childNodeHTML += " <input type='radio' name='Radiogroup' value='radio1' id='radio1' />";
            childNodeHTML += "<label for='radio1'>" + Aufgabe4.holder[i].name + "</label>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        childNodeHTML += "<h3>Lieferant</h3>";
        childNodeHTML += "<select name='Select' id='shipment'>";
        for (let i = 0; i < Aufgabe4.shipment.length; i++) {
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
        let fieldset = document.getElementById("fieldset");
        fieldset.addEventListener("change", handleChange);
        document.getElementById("check").addEventListener("click", checkInputs);
    }
    function handleChange(_event) {
        let target = _event.target;
        let ballsValue1 = document.getElementById("numberBalls1");
        let ballValue1 = ballsValue1.value;
        console.log(ballsValue1.value);
        if (target.id == "tree") {
            let node = document.getElementById("baum");
            let value = target.value;
            let priceIndex = parseInt(value.substr(0, 1));
            let childNodeHTML;
            treePrice = Aufgabe4.tree[priceIndex].price;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
            console.log(treePrice);
        }
        if (target.id == "christmasBalls") {
            let node = document.getElementById("kugeln");
            let value = target.value;
            let priceIndex = parseInt(value.substr(0, 1));
            let childNodeHTML;
            ballPrice = Aufgabe4.christmasBall[priceIndex].price * ballValue1;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        if (target.id == "candles") {
            let node = document.getElementById("kerzen");
            let value = target.value;
            let priceIndex = parseInt(value.substr(0, 1));
            let childNodeHTML;
            candlePrice = Aufgabe4.candle[priceIndex].price;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
            console.log(candlePrice);
        }
        if (target.id == "lamettas") {
            let node = document.getElementById("lametta");
            let value = target.value;
            let priceIndex = parseInt(value.substr(0, 1));
            let childNodeHTML;
            lamettaPrice = Aufgabe4.lametta[priceIndex].price;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
            console.log(lamettaPrice);
        }
        if (target.id == "holder") {
            let node = document.getElementById("halterung");
            let value = target.value;
            let priceIndex = parseInt(value.substr(0, 1));
            let childNodeHTML;
            holderPrice = Aufgabe4.holder[priceIndex].price;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
            console.log(holderPrice);
        }
        if (target.id == "shipment") {
            let node = document.getElementById("lieferant");
            let value = target.value;
            let priceIndex = parseInt(value.substr(0, 1));
            let childNodeHTML;
            shipmentPrice = Aufgabe4.shipment[priceIndex].price;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
            console.log(shipmentPrice);
        }
        if (target.id == "strasse") {
            let node = document.getElementById("strass");
            strass = target.value;
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + target.value;
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        if (target.id == "hausnummer") {
            let node = document.getElementById("nummer");
            nummer = target.value;
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + target.value;
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        if (target.id == "plz") {
            let node = document.getElementById("postleitzahl");
            postleitzahl = target.value;
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + target.value;
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        if (target.id == "place") {
            let node = document.getElementById("ort");
            ort = target.value;
            let childNodeHTML;
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
        let HTML;
        let node = document.getElementById("preis");
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