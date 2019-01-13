namespace A10_Animation {

    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;
    let crc3: CanvasRenderingContext2D;
    let fps: number = 25;
    let imgData: ImageData;
    let snowflakes: Snowflake[] = [];
    let trees: Tree[] = [];
    let children1: Child1[]=[]

    function init(_event: Event): void {

        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        drawLine();
        drawSky();
        drawSun();
        imgData = crc2.getImageData(0, 0, 360, 730);

        for (let i: number = 0; i < 100; i++) {
            let flake: Snowflake = new Snowflake();
            flake.x = Math.random() * crc2.canvas.width;
            flake.y = Math.random() * crc2.canvas.height;
            flake.dy = Math.random() * 4;
            flake.color = "#00ff00";

            snowflakes.push(flake);
        }
        
         for (let i: number = 0; i < 10; i++) {
            let child1: Child1 = new Child1();
             
            child1.x = Math.random() * crc2.canvas.width;
            child1.y = Math.random() * crc2.canvas.height;
            child1.dx = Math.random() * 3-4;
            child1.dy = Math.random() * 4;

             crc2.beginPath();
            crc2.moveTo(0, 650);
            crc2.lineTo(360, 730);
            crc2.lineTo(360, 400);
            crc2.lineTo(0, 650);
            crc2.closePath();
             if (crc2.isPointInPath(child1.x, child1.y)) {
                children1.push(child1);
            }
            else {
                i--;
            }
        }


        for (let i: number = 0; i < 5; i++) {
            let tree: Tree = new Tree();
            tree.x = Math.random() * crc2.canvas.width;
            tree.y = Math.random() * crc2.canvas.height;

            crc2.beginPath();
            crc2.moveTo(0, 650);
            crc2.lineTo(360, 730);
            crc2.lineTo(360, 400);
            crc2.lineTo(0, 650);
            crc2.closePath()

            if (crc2.isPointInPath(tree.x, tree.y)) {
                trees.push(tree);
            }
            else {
                i--;
            }

        }
        update();

    }

    function update(): void {
        window.setTimeout(update, 1000 / fps);
        crc2.putImageData(imgData, 0, 0);

        for (let i: number = 0; i < 100; i++) {
            let flake: Snowflake = snowflakes[i];
            flake.move();
            flake.draw();
        }
        
        for (let i: number = 0; i < 10; i++) {
            let child1: Child1 = children1[i];
            child1.move();
            child1.draw();
        }

        for (let i: number = 0; i < 5; i++) {
            let tree: Tree = trees[i];
            tree.draw();
        }
    }

    function createBackground() {
        drawLine();
        drawSky();
        drawSun();
        //drawClouds();
    }


    function drawSun() {

        crc2.fillStyle = "#FFFF00"
        crc2.strokeStyle = "black";
        crc2.beginPath();
        crc2.arc(250, 75, 50, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.stroke();
        crc2.fill()
    }


    function drawClouds() {
        crc2.fillStyle = "white";
        crc2.strokeStyle = "black";
        crc2.lineWidth = 1;
        crc2.beginPath();
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

        crc2.beginPath();
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



    function drawChild2() {
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
        }
    }

    function drawChild1() {
        for (let i: number = 0; i < 2; i++) {
            let x: number = 80;
            let y: number = 60;
            crc2.fillStyle = "black";
            crc2.strokeStyle = "black";
            crc2.lineWidth = 3;
            crc2.beginPath();
            crc2.arc((i * x + 200), (i * y + 600), 5, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();

            crc2.strokeStyle = "black";
            crc2.lineWidth = 1;
            crc2.beginPath();
            crc2.moveTo(i * x + 200, i * y + 600);
            crc2.lineTo(i * x + 200, i * y + 635);
            crc2.closePath();
            crc2.stroke();
            crc2.beginPath();
            crc2.moveTo(i * x + 200, i * y + 615);
            crc2.lineTo(i * x + 210, i * y + 610);
            crc2.closePath();
            crc2.stroke();
            crc2.beginPath();
            crc2.moveTo(i * x + 200, i * y + 615);
            crc2.lineTo(i * x + 190, i * y + 630);
            crc2.closePath();
            crc2.stroke();
            crc2.beginPath();
            crc2.moveTo(i * x + 200, i * y + 635);
            crc2.lineTo(i * x + 210, i * y + 640);
            crc2.closePath();
            crc2.stroke();
            crc2.beginPath();
            crc2.moveTo(i * x + 200, i * y + 635);
            crc2.lineTo(i * x + 190, i * y + 642);
            crc2.closePath();
            crc2.stroke();

            crc2.strokeStyle = "red";
            crc2.beginPath();
            crc2.moveTo(i * x + 190, i * y + 630);;
            crc2.lineTo(i * x + 180, i * y + 640);
            crc2.closePath();
            crc2.stroke();

            crc2.strokeStyle = "brown";
            crc2.beginPath();
            crc2.moveTo(i * x + 180, i * y + 640);;
            crc2.lineTo(i * x + 180, i * y + 650);
            crc2.closePath();
            crc2.stroke();

            crc2.beginPath();
            crc2.moveTo(i * x + 180, i * y + 650);;
            crc2.lineTo(i * x + 160, i * y + 650);
            crc2.closePath();
            crc2.stroke();

            crc2.beginPath();
            crc2.moveTo(i * x + 160, i * y + 650);
            crc2.lineTo(i * x + 160, i * y + 640);
            crc2.closePath();

            crc2.stroke();

            crc2.beginPath();
            crc2.moveTo(i * x + 160, i * y + 640);
            crc2.lineTo(i * x + 175, i * y + 640);
            crc2.closePath();

            crc2.stroke();

            crc2.beginPath();
            crc2.moveTo(i * x + 163, i * y + 640);
            crc2.lineTo(i * x + 163, i * y + 650);
            crc2.closePath();

            crc2.stroke();

            crc2.beginPath();
            crc2.moveTo(i * x + 170, i * y + 640);
            crc2.lineTo(i * x + 170, i * y + 650);
            crc2.closePath();

            crc2.stroke();
            continue
        }

    }


}