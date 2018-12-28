var L09_Canvas;
(function (L09_Canvas) {
    window.addEventListener("load", init);
    let crc2;
    let crc3;
    function init(_event) {
        console.log("Canvas started");
        let canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        drawLine();
        drawSky();
        drawSun();
        drawChild1();
        createFlakes();
        // createTrees(); 
    }
    function drawChild1() {
        for (let i = 0; i < 2; i++) {
            let a = 80;
            let b = 50;
            crc2.fillStyle = "black";
            crc2.strokeStyle = "black";
            crc2.lineWidth = 3;
            crc2.beginPath();
            crc2.arc((i * a + 200), (i * b + 600), 5, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
            crc2.strokeStyle = "black";
            crc2.lineWidth = 1;
            crc2.beginPath();
            crc2.moveTo(i * a + 200, i * b + 600);
            crc2.lineTo(i * a + 200, i * b + 635);
            crc2.closePath();
            crc2.stroke();
            crc2.beginPath();
            crc2.moveTo(i * a + 200, i * b + 615);
            crc2.lineTo(i * a + 210, i * b + 610);
            crc2.closePath();
            crc2.stroke();
            crc2.beginPath();
            crc2.moveTo(i * a + 200, i * b + 615);
            crc2.lineTo(i * a + 190, i * b + 630);
            crc2.closePath();
            crc2.stroke();
            crc2.beginPath();
            crc2.moveTo(i * a + 200, i * b + 635);
            crc2.lineTo(i * a + 210, i * b + 640);
            crc2.closePath();
            crc2.stroke();
            crc2.beginPath();
            crc2.moveTo(i * a + 200, i * b + 635);
            crc2.lineTo(i * a + 190, i * b + 642);
            crc2.closePath();
            crc2.stroke();
            crc2.strokeStyle = "brown";
            crc2.beginPath();
            crc2.moveTo(i * a + 190, i * b + 630);
            ;
            crc2.lineTo(i * a + 180, i * b + 640);
            crc2.closePath();
            crc2.stroke();
            continue;
        }
    }
    function drawTree(_x, _y) {
        crc2.lineWidth = 1;
        crc2.fillStyle = "brown";
        crc2.strokeStyle = "#000000";
        crc2.beginPath();
        crc2.moveTo(_x - 10, _y);
        crc2.lineTo(_x - 10, _y + 40);
        crc2.lineTo(_x + 10, _y + 40);
        crc2.lineTo(_x + 10, _y);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        crc2.fillStyle = "green";
        crc2.strokeStyle = "#000000";
        crc2.beginPath();
        crc2.moveTo(_x - 22.5, _y);
        crc2.lineTo(_x, _y - 40);
        crc2.lineTo(_x + 22.5, _y);
        crc2.fill();
        crc2.stroke();
    }
    function drawSun() {
        crc2.fillStyle = "#FFFF00";
        crc2.beginPath();
        crc2.arc(250, 75, 50, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fill();
    }
    function drawLine() {
        crc2.fillStyle = "white";
        crc2.strokeStyle = "black";
        crc2.lineWidth = 3;
        crc2.beginPath();
        crc2.moveTo(0, 730);
        crc2.lineTo(360, 730);
        crc2.lineTo(360, 400);
        crc2.lineTo(0, 650);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }
    function drawSky() {
        crc2.fillStyle = "#2ECCFA";
        crc2.strokeStyle = "#000000";
        crc2.lineWidth = 3;
        crc2.beginPath();
        crc2.moveTo(0, 650);
        crc2.lineTo(0, 0);
        crc2.lineTo(360, 0);
        crc2.lineTo(360, 400);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }
    function drawFlake(_x, _y) {
        crc2.strokeStyle = "#FFFFFF";
        crc2.lineWidth = 3;
        crc2.beginPath();
        crc2.moveTo(_x, _y - 3);
        crc2.lineTo(_x, _y + 3);
        crc2.closePath();
        crc2.moveTo(_x + 3, _y);
        crc2.lineTo(_x - 3, _y);
        crc2.closePath();
        crc2.stroke();
    }
    function createFlakes() {
        for (let i = 0; i < 150; i++) {
            let x = Math.random() * crc2.canvas.width;
            let y = Math.random() * crc2.canvas.height;
            drawFlake(x, y);
        }
    }
    function createTrees() {
        for (let i = 0; i < 5; i++) {
            let x = Math.random() * crc2.canvas.width;
            let y = Math.random() * crc2.canvas.height;
            crc2.beginPath;
            crc2.moveTo(0, 650);
            crc2.lineTo(360, 730);
            crc2.lineTo(360, 400);
            crc2.lineTo(0, 650);
            if (crc2.isPointInPath(x, y)) {
                drawTree(x, y);
            }
            else {
                i--;
            }
        }
    }
})(L09_Canvas || (L09_Canvas = {}));
//# sourceMappingURL=Canvas.js.map