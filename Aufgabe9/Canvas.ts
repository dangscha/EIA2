namespace L09_Canvas {
    window.addEventListener("load", init);
    let crc2: CanvasRenderingContext2D;
    let crc3: CanvasRenderingContext2D;

    function init(_event: Event): void {
        console.log("Canvas started");
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
       
        
        drawLine();
        drawSky();
        drawSun();
        //drawChild1();
        drawChild1body();
        createFlakes();
        createTrees();
        
    }

    function drawChild1() {
        crc2.fillStyle = "black";
        crc2.lineWidth = 3;

        crc2.beginPath();
        crc2.arc(200, 600, 5, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.stroke();
        crc2.fill(); 

    }
    

    function drawTree(_x: number, _y: number) {

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

        crc2.fillStyle = "#FFFF00"
        crc2.beginPath();
        crc2.arc(250, 75, 50, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fill()
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

    function drawFlake(_x: number, _y: number) {
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
    
        function drawChild1body(){
        crc2.fillStyle = "yellow";
        crc2.strokeStyle = "black";
        crc2.lineWidth = 3;
        crc2.beginPath();
        crc2.moveTo(100,100)
        crc2.moveTo(200,200)
        crc2.moveTo(300,300)
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
        }

    function createFlakes() {
        for (let i: number = 0; i < 150; i++) {
            let x: number = Math.random() * crc2.canvas.width;
            let y: number = Math.random() * crc2.canvas.height;
            drawFlake(x, y)
        }
    }

    function createTrees(): void {
        for (let i: number = 0; i < 5; i++) {
            let x: number = Math.random() * crc2.canvas.width;
            let y: number = Math.random() * crc2.canvas.height;
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

}