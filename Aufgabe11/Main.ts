namespace A11_Inheritance {

    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;
    let crc3: CanvasRenderingContext2D;
    let fps: number = 25;
    let imgData: ImageData;
    let snowflakes: Snowflake[] = [];
    let trees: Tree[] = [];
    let children1: Child1[] = []
    let children2: Child2[] = []

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

        for (let i: number = 0; i < 5; i++) {
            let child1: Child1 = new Child1();
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
            let child2: Child2 = new Child2();
            child2.x = Math.random() * crc2.canvas.width;
            child2.y = Math.random() * 360 + 400;
            child2.dx = Math.random() * 10;
            child2.dy = Math.random() * 0;

            crc2.beginPath();
            crc2.moveTo(0, 650);
            crc2.lineTo(360, 730);
            crc2.lineTo(360, 400);
            crc2.lineTo(0, 650);
            crc2.closePath();
            if (crc2.isPointInPath(child2.x, child2.y)) {
                children2.push(child2);
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

        for (let i: number = 0; i < 5; i++) {
            let child1: Child1 = children1[i];
            child1.move();
            child1.draw();
        }

        for (let i: number = 0; i < 5; i++) {
            let child2: Child2 = children2[i];
            child2.move();
            child2.draw();
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
        drawClouds();
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

}