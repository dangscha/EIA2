import * as Http from "http"; //Er importiert die Node.ts-Datei, mit HTTP from "http" wird auf die HTTP Objekte aus Node.d.ts zugegriffen

namespace L06_SendData {
    console.log("Starting server");
    let port: number = process.env.PORT; // Die Variable Port wird als Number deklariert, welchen den Wert des Ports des Heroku-Server hat
    if (port == undefined) //Wenn der Port nicht definiert ist...
        port = 8100;   //wird dieser auf 8100 gesetzt (führt zu EIA2 im Heroku)

    let server: Http.Server = Http.createServer(); //Die Variable Server wird als Http.Server definiert und benutzt die Method Http.createrServer() um einen lokalen Server auf dem Computer zu erstellen
    server.addListener("request", handleRequest); //Ein Listener wird dem Server hinzugefügt. Wenn der Server nun einen "Request" erhält, also einen Anruf, wird die Funktion handleRequest ausgeführt
    server.addListener("listening", handleListen); //Ein weiterer Listener wird hinzugefügt. Solange der Nutzer drauf zugreift, wird die handleListen Funktion ausgeführt
    server.listen(port); //Der Server hört auf den vorher deklarierten Port

    function handleListen(): void {
        console.log("Listening"); //die Funktion gibt in der Konsole "Listening" aus
    }

    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void { //Die Funktion erhält die Parameter _request:Http.IncomingMessage (Welches dem Event request entspricht) und  _response: Http.ServerResponse
        console.log("I hear voices!"); //Konsole gibt "I hear voices!" aus

        _response.setHeader("content-type", "text/html; charset=utf-8"); //die Variable _response setzt in den Header der HTML-Datei "content-type","text/html:charset=utf-8"
        _response.setHeader("Access-Control-Allow-Origin", "*"); //Access-Control-Allow-Origin wird ebenso im Header gesetzt. Es dient dazu, die Antwort des Servers mit dem abgerufenen Code der Quelle zu teilen

        _response.write(_request.url); //mit_response.write wird auf die _request.url zugegriffen
        
        _response.end(); //response wird beendet
    }
}