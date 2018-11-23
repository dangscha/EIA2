namespace Aufgabe5 {
    document.addEventListener("DOMContentLoaded", writeHTML);
    document.addEventListener("DOMContentLoaded", init);

    let treePrice: number = 0;
    let ballPrice: number = 0;
    let candlePrice: number = 0;
    let lamettaPrice: number = 0;
    let holderPrice: number = 0;
    let shipmentPrice: number = 0;
    let ort: string = "";
    let strass: string = "";
    let nummer: string = "";
    let postleitzahl: string = "";


    function writeHTML() {

        let node: HTMLElement = document.getElementById("fieldset");
        let childNodeHTML: string;

        childNodeHTML = "<h3>Baeume</h3>";
        childNodeHTML += "<select name='Select' id='tree'>";
        for (let i: number = 0; i < tree.length; i++) {
            childNodeHTML += "<option value='" + i + tree[i].name + "'>" + tree[i].name + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";

        childNodeHTML += "<h3>Glasskugeln</h3>";

        for (let i: number = 0; i < christmasBall.length; i++) {

            childNodeHTML += christmasBall[i].name;
            childNodeHTML += " <input type='number' id='numberBalls" + i + "' name='Stepper' step='1' min='0' max='30' value='0'/>";
            childNodeHTML += "<br>";
            continue
        }

        //Kerzen
        childNodeHTML += "<h3>Kerzen</h3>";
        for (let i: number = 0; i < candle.length; i++) {
            childNodeHTML += candle[i].name;
            childNodeHTML += " <input type='number' id='numberCandles" + i + "' name='Stepper' step='1' min='0' max='30' value='0'/>";
            childNodeHTML += "<br>";
            continue
        }


        childNodeHTML += "<h3>Lametta</h3>";
        for (let i: number = 0; i < lametta.length; i++) {
            childNodeHTML += lametta[i].name;
            childNodeHTML += " <input type='number' name='Stepper' id='numberLametta" + i + "' step='1' min='0' max='30' value='0'/>";
            childNodeHTML += "<br>";
            continue
        }



        childNodeHTML += "<h3>Halterung</h3>";
        for (let i: number = 0; i < holder.length; i++) {
            childNodeHTML += " <input type='radio' name='Radiogroup' value='radio1' id='radio1' />";
            childNodeHTML += "<label for='radio1'>" + holder[i].name + "</label>";

        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";

        childNodeHTML += "<h3>Lieferant</h3>";
        childNodeHTML += "<select name='Select' id='shipment'>";
        for (let i: number = 0; i < shipment.length; i++) {
            childNodeHTML += "<option value='" + i + shipment[i].name + "'>" + shipment[i].name + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";

        childNodeHTML += "<h3>Adresse</h3>";
        childNodeHTML += "<input id='strasse' type='text' name='Text' placeholder='Strasse' required/>"
        childNodeHTML += "<input id='hausnummer' type='text' name='Text' placeholder='Hausnummer' required/>"
        childNodeHTML += "<br>";
        childNodeHTML += "<input id='plz' type='text' name='Pattern' pattern='[0-9]{5}' placeholder='PLZ' required/>"
        childNodeHTML += "<input id='place' type='text' name='Text' placeholder='Ort' required/>"
        childNodeHTML += "<br>";
        node.innerHTML += childNodeHTML



    }

    function init(_event: Event) {
        let fieldset: HTMLElement = document.getElementById("fieldset")
        fieldset.addEventListener("change", handleChange);
        document.getElementById("check").addEventListener("click", checkInputs);
    }

    function handleChange(_event: Event) {

        let target: HTMLInputElement = <HTMLInputElement>_event.target
        let articles: NodeListOf<HTMLInputElement> = document.getElementsByTagName("input")
        let node: HTMLElement = document.getElementById("kugeln");
        node.innerHTML = ""
        for (let i: number = 0; i < articles.length; i++) {
            let article: HTMLInputElement = articles[i];
            let value: number = parseInt(article.value)
            if (target.id == "numberBalls" + i) {

                let node: HTMLElement = document.getElementById("kugeln");
                let DOMValue: string = target.value;
                target.setAttribute("value", DOMValue)
                let value: number= parseInt(article.getAttribute("value"))
                console.log(value)
                //let value: number = parseInt(article.value)
                let childNodeHTML: string;
                ballPrice = value * christmasBall[i].price
                childNodeHTML = "";
                childNodeHTML += "<a>";
                childNodeHTML += " " + value + christmasBall[i].name
                childNodeHTML += "</a>";
                node.innerHTML += childNodeHTML;


            }

        }
        /**
        let ballsValue1: HTMLInputElement = <HTMLInputElement>document.getElementById("numberBalls1");
        let ballValue1: any = ballsValue1.value;
        console.log(ballsValue1.value);**/
        if (target.id == "tree") {
            let node: HTMLElement = document.getElementById("baum");
            let value: string = target.value;
            let priceIndex: number = parseInt(value.substr(0, 1));
            let childNodeHTML: string;
            treePrice = tree[priceIndex].price;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
            console.log(treePrice)

        }
        /*if (target.id == "christmasBalls") {

            let node: HTMLElement = document.getElementById("kugeln");
            let value: string = target.value;
            let priceIndex: number = parseInt(value.substr(0, 1));
            let childNodeHTML: string;
            ballPrice = christmasBall[priceIndex].price
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;


        }*/
        if (target.id == "candles") {
            let node: HTMLElement = document.getElementById("kerzen");
            let value: string = target.value;
            let priceIndex: number = parseInt(value.substr(0, 1));
            let childNodeHTML: string;
            candlePrice = candle[priceIndex].price;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
            console.log(candlePrice)

        }
        if (target.id == "lamettas") {
            let node: HTMLElement = document.getElementById("lametta");
            let value: string = target.value;
            let priceIndex: number = parseInt(value.substr(0, 1));
            let childNodeHTML: string;
            lamettaPrice = lametta[priceIndex].price;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
            console.log(lamettaPrice)

        }
        if (target.id == "holder") {
            let node: HTMLElement = document.getElementById("halterung");
            let value: string = target.value;
            let priceIndex: number = parseInt(value.substr(0, 1));
            let childNodeHTML: string;
            holderPrice = holder[priceIndex].price;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
            console.log(holderPrice)
        }
        if (target.id == "shipment") {
            let node: HTMLElement = document.getElementById("lieferant");
            let value: string = target.value;
            let priceIndex: number = parseInt(value.substr(0, 1));
            let childNodeHTML: string;
            shipmentPrice = shipment[priceIndex].price;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
            console.log(shipmentPrice)
        }

        if (target.id == "strasse") {
            let node: HTMLElement = document.getElementById("strass");
            strass = target.value;
            let childNodeHTML: string;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + target.value;
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;

        }

        if (target.id == "hausnummer") {
            let node: HTMLElement = document.getElementById("nummer");
            nummer = target.value;
            let childNodeHTML: string;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + target.value;
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;

        }

        if (target.id == "plz") {
            let node: HTMLElement = document.getElementById("postleitzahl");
            postleitzahl = target.value;
            let childNodeHTML: string;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + target.value;
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;

        }

        if (target.id == "place") {
            let node: HTMLElement = document.getElementById("ort");
            ort = target.value;
            let childNodeHTML: string;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + target.value;
            childNodeHTML += "</a>";


            node.innerHTML = childNodeHTML;
        }
        price()
    }
    function price() {
        let HTML: string;
        let node: HTMLElement = document.getElementById("preis");
        HTML = " ";
        HTML += (treePrice + ballPrice + candlePrice + lamettaPrice + holderPrice + shipmentPrice);
        HTML += " Euro";
        node.innerHTML = HTML
    }
    function checkInputs() {
        console.log("lul");
        if (treePrice == 0 || ballPrice == 0 || candlePrice == 0 || lamettaPrice == 0 || holderPrice == 0 || shipmentPrice == 0 || ort == "" || nummer == "" || postleitzahl == "" || strass == "")
        { document.getElementById("buttonCheck").innerHTML = "Fehlende Angaben!"; }
        else {
            document.getElementById("buttonCheck").innerHTML = "";
        }
    }
}