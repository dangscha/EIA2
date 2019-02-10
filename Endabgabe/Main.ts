namespace end {

    window.addEventListener("load", init);

    export let crc2: CanvasRenderingContext2D;
    let fps: number = 25;
    let imgData: ImageData;
    let snowflakes: Objects[] = [];
    let trees: Objects[] = [];
    let children1: Objects[] = [];
    let snowballs: Objects[] = [];


    function init(): void {
        document.getElementById("start").addEventListener("click", canvasDraw);

    }
    
    function mouseDown(_event: MouseEvent): void {
        let ball: Movement = new Snowball;
        ball.x = _event.clientX;
        ball.y = _event.clientY;
        snowballs.push(ball);
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        canvas.addEventListener("click", mouseDown);
    }

    function canvasDraw(_event: Event): void {
        let button: HTMLElement = document.getElementById("div");
        button.parentNode.removeChild(button);
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        canvas.addEventListener("click", mouseDown);
        crc2 = canvas.getContext("2d");
        createBackground();
        imgData = crc2.getImageData(0, 0, 360, 730);



        for (let i: number = 0; i < 100; i++) {
            let flake: Movement = new Snowflake();
            flake.x = Math.random() * crc2.canvas.width;
            flake.y = Math.random() * crc2.canvas.height;
            flake.dy = Math.random() * 4;
            snowflakes.push(flake);
        }

        for (let i: number = 0; i < 5; i++) {
            let child1: Movement = new Child1();
            crc2.beginPath();
            crc2.moveTo(0, 730);
            crc2.lineTo(360, 730);
            crc2.lineTo(360, 400);
            crc2.lineTo(0, 650);
            child1.x = 360;
            child1.y = Math.random() * 330 + 400;
            child1.dx = Math.random() * 3 - 5;
            child1.dy = - child1.dx;
            children1.push(child1);

        }

        for (let i: number = 0; i < 5; i++) {
            let tree: Objects = new Tree();
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
            let flake: Objects = snowflakes[i];
            flake.move();
            flake.draw();
        }

        for (let i: number = 0; i < 5; i++) {
            let child1: Objects = children1[i];
            child1.move();
            child1.draw();
        }

        for (let i: number = 0; i < 5; i++) {
            let tree: Tree = trees[i];
            tree.draw();
        }
         for (let i: number = 0; i < 20; i++) {
            let ball: Objects = snowballs[i];
            ball.move();
            ball.draw();
        }
    }

    function createBackground() {

        drawLine();
        drawSky();
        drawSun();
    }


    function drawSun() {

        crc2.fillStyle = "#FFFF00";
        crc2.strokeStyle = "black";
        crc2.beginPath();
        crc2.arc(250, 75, 50, 0, 2 * Math.PI);
        crc2.closePath();
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

}