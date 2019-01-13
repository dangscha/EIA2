namespace L09_Canvas {

    window.addEventListener("load", init);
    let crc2: CanvasRenderingContext2D;
    let crc3: CanvasRenderingContext2D;

    function init(_event: Event): void {
        console.log("Canvas started");
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        // canvas.width = window.innerWidth;
        // canvas.height = window.innerHeight;
        crc2 = canvas.getContext("2d");

        //createBackground();
        //createTrees();
        drawChild1(300, 200);
        // drawChild2(300, 200);
        // drawChild2(); 
        createFlakes();
    }

    function createBackground() {

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


        crc2.fillStyle = "#FFFF00"
        crc2.beginPath();
        crc2.arc(250, 75, 50, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fill()

        crc2.fillStyle = "white";
        crc2.strokeStyle = "black";
        crc2.lineWidth = 1;
        crc2.beginPath
        crc2.moveTo(170, 80);
        crc2.bezierCurveTo(130, 100, 130, 150, 230, 150);
        crc2.bezierCurveTo(250, 180, 320, 180, 340, 150);
        crc2.bezierCurveTo(420, 150, 420, 120, 390, 100);
        crc2.bezierCurveTo(430, 40, 370, 30, 340, 50);
        crc2.bezierCurveTo(320, 5, 250, 20, 250, 50);
        crc2.bezierCurveTo(200, 5, 150, 20, 170, 80);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();


        crc2.fillStyle = "white";
        crc2.strokeStyle = "black";
        crc2.beginPath
        crc2.moveTo(70, 250);
        crc2.bezierCurveTo(30, 300, 30, 350, 130, 350);
        crc2.bezierCurveTo(150, 380, 220, 380, 240, 350);
        crc2.bezierCurveTo(320, 350, 320, 320, 290, 300);
        crc2.bezierCurveTo(330, 240, 270, 230, 240, 250);
        crc2.bezierCurveTo(220, 205, 150, 220, 150, 250);
        crc2.bezierCurveTo(100, 205, 50, 220, 70, 280);
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

    /**  function drawClouds() {
          crc2.fillStyle = "white";
          crc2.strokeStyle = "black";
          crc2.lineWidth = 1;
          crc2.beginPath
        crc2.moveTo(170, 80);
        crc2.bezierCurveTo(130, 100, 130, 150, 230, 150);
        crc2.bezierCurveTo(250, 180, 320, 180, 340, 150);
        crc2.bezierCurveTo(420, 150, 420, 120, 390, 100);
        crc2.bezierCurveTo(430, 40, 370, 30, 340, 50);
        crc2.bezierCurveTo(320, 5, 250, 20, 250, 50);
        crc2.bezierCurveTo(200, 5, 150, 20, 170, 80);
        crc2.closePath();
          crc2.stroke();
          crc2.fill();
          
              crc2.beginPath
        crc2.moveTo(70, 250);
        crc2.bezierCurveTo(30, 300, 30, 350, 130, 350);
        crc2.bezierCurveTo(150, 380, 220, 380, 240, 350);
        crc2.bezierCurveTo(320, 350,320, 320, 290, 300);
        crc2.bezierCurveTo(330, 240, 270, 230, 240, 250);
        crc2.bezierCurveTo(220, 205, 150, 220, 150, 250);
        crc2.bezierCurveTo(100, 205, 50, 220, 70, 280);
        crc2.closePath();
          crc2.stroke();
          crc2.fill();
      }**/

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

    /** function drawSun() {
    
         crc2.fillStyle = "#FFFF00"
         crc2.beginPath();
         crc2.arc(250, 75, 50, 0, 2 * Math.PI);
         crc2.stroke();
         crc2.fill()
     }**/

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

    function drawChild2(_x: number, _y: number) {
        crc2.fillStyle = "black";
        crc2.strokeStyle = "black";
        crc2.lineWidth = 3;
        crc2.beginPath();
        crc2.arc((_x), (_y), 5, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();

        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x, _y + 30);
        crc2.closePath();
        crc2.stroke();

        crc2.beginPath();
        crc2.moveTo(_x, _y + 30);
        crc2.lineTo(_x - 20, _y + 35);
        crc2.closePath();
        crc2.stroke();

        crc2.beginPath();
        crc2.moveTo(_x, _y + 10);
        crc2.lineTo(_x - 15, _y + 13);
        crc2.closePath();
        crc2.stroke();

        crc2.strokeStyle = "black";
        crc2.fillStyle = "brown";
        crc2.beginPath();
        crc2.moveTo(_x - 20, _y + 35);
        crc2.lineTo(_x - 20, _y + 40);

        crc2.lineTo(_x - 20, _y + 50);

        crc2.lineTo(_x + 10, _y + 50);
        crc2.lineTo(_x + 10, _y + 30);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
        /**
                crc2.beginPath();
                crc2.moveTo(i * x + 210, i * y + 540);
                crc2.lineTo(i * x + 202, i * y + 530);
                crc2.closePath();
                crc2.stroke();
            **/
    }

    function drawChild1(_x: number, _y: number) {
        crc2.fillStyle = "black";
        crc2.strokeStyle = "black";
        crc2.lineWidth = 3;
        crc2.beginPath();
        crc2.arc((_x), (_y), 5, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();

        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x, _y + 30);
        crc2.closePath();
        crc2.stroke();

        crc2.beginPath();
        crc2.moveTo(_x, _y + 30);
        crc2.lineTo(_x + 10, _y + 40);
        crc2.closePath();
        crc2.stroke();

        crc2.beginPath();
        crc2.moveTo(_x, _y + 30);
        crc2.lineTo(_x - 10, _y + 40);
        crc2.closePath();
        crc2.stroke();

        crc2.beginPath();
        crc2.moveTo(_x , _y + 15);
        crc2.lineTo(_x + 10,  _y + 15);
        crc2.closePath();
        crc2.stroke();
     
  crc2.beginPath();
  crc2.moveTo(_x , _y + 15);
  crc2.lineTo(_x -10, _y + 20);
  crc2.closePath();
  crc2.stroke();
  
  crc2.strokeStyle = "red";
  crc2.beginPath();
  crc2.moveTo(_x -10, _y + 20);;
  crc2.lineTo(_x -25, _y + 30);
  crc2.closePath();
  crc2.stroke();

  crc2.strokeStyle = "brown";
  crc2.beginPath();
  crc2.moveTo(_x -25, _y + 30);;
  crc2.lineTo(_x -50,  _y + 30);
  crc2.closePath();
  crc2.stroke();

  crc2.beginPath();
  crc2.moveTo(_x -50, _y + 30);;
  crc2.lineTo(_x -50, _y + 45);
  crc2.closePath();
  crc2.stroke();

  crc2.beginPath();
  crc2.moveTo(_x -50, _y + 45);
  crc2.lineTo(_x -30, _y + 45);
  crc2.closePath();
  crc2.stroke();
        
  crc2.beginPath();
  crc2.moveTo(_x -30, _y + 45);
  crc2.lineTo(_x -25, _y + 30);
  crc2.closePath();

  crc2.stroke();
    }




}