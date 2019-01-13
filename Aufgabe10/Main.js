var A10_Animation;
(function (A10_Animation) {
    window.addEventListener("load", init);
    let crc3;
    let fps = 25;
    let imgData;
    let snowflakes = [];
    let trees = [];
    let children1 = [];
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        A10_Animation.crc2 = canvas.getContext("2d");
        drawLine();
        drawSky();
        drawSun();
        imgData = A10_Animation.crc2.getImageData(0, 0, 360, 730);
        for (let i = 0; i < 100; i++) {
            let flake = new A10_Animation.Snowflake();
            flake.x = Math.random() * A10_Animation.crc2.canvas.width;
            flake.y = Math.random() * A10_Animation.crc2.canvas.height;
            flake.dy = Math.random() * 4;
            flake.color = "#00ff00";
            snowflakes.push(flake);
        }
        for (let i = 0; i < 10; i++) {
            let child1 = new A10_Animation.Child1();
            child1.x = Math.random() * A10_Animation.crc2.canvas.width;
            child1.y = Math.random() * A10_Animation.crc2.canvas.height;
            child1.dx = Math.random() * 3 - 4;
            child1.dy = Math.random() * 4;
            A10_Animation.crc2.beginPath();
            A10_Animation.crc2.moveTo(0, 650);
            A10_Animation.crc2.lineTo(360, 730);
            A10_Animation.crc2.lineTo(360, 400);
            A10_Animation.crc2.lineTo(0, 650);
            A10_Animation.crc2.closePath();
            if (A10_Animation.crc2.isPointInPath(child1.x, child1.y)) {
                children1.push(child1);
            }
            else {
                i--;
            }
        }
        for (let i = 0; i < 5; i++) {
            let tree = new A10_Animation.Tree();
            tree.x = Math.random() * A10_Animation.crc2.canvas.width;
            tree.y = Math.random() * A10_Animation.crc2.canvas.height;
            A10_Animation.crc2.beginPath();
            A10_Animation.crc2.moveTo(0, 650);
            A10_Animation.crc2.lineTo(360, 730);
            A10_Animation.crc2.lineTo(360, 400);
            A10_Animation.crc2.lineTo(0, 650);
            A10_Animation.crc2.closePath();
            if (A10_Animation.crc2.isPointInPath(tree.x, tree.y)) {
                trees.push(tree);
            }
            else {
                i--;
            }
        }
        update();
    }
    function update() {
        window.setTimeout(update, 1000 / fps);
        A10_Animation.crc2.putImageData(imgData, 0, 0);
        for (let i = 0; i < 100; i++) {
            let flake = snowflakes[i];
            flake.move();
            flake.draw();
        }
        for (let i = 0; i < 10; i++) {
            let child1 = children1[i];
            child1.move();
            child1.draw();
        }
        for (let i = 0; i < 5; i++) {
            let tree = trees[i];
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
        A10_Animation.crc2.fillStyle = "#FFFF00";
        A10_Animation.crc2.strokeStyle = "black";
        A10_Animation.crc2.beginPath();
        A10_Animation.crc2.arc(250, 75, 50, 0, 2 * Math.PI);
        A10_Animation.crc2.closePath();
        A10_Animation.crc2.stroke();
        A10_Animation.crc2.fill();
    }
    function drawClouds() {
        A10_Animation.crc2.fillStyle = "white";
        A10_Animation.crc2.strokeStyle = "black";
        A10_Animation.crc2.lineWidth = 1;
        A10_Animation.crc2.beginPath();
        A10_Animation.crc2.moveTo(170, 80);
        A10_Animation.crc2.bezierCurveTo(130, 100, 130, 150, 230, 150);
        A10_Animation.crc2.bezierCurveTo(250, 180, 320, 180, 340, 150);
        A10_Animation.crc2.bezierCurveTo(420, 150, 420, 120, 390, 100);
        A10_Animation.crc2.bezierCurveTo(430, 40, 370, 30, 340, 50);
        A10_Animation.crc2.bezierCurveTo(320, 5, 250, 20, 250, 50);
        A10_Animation.crc2.bezierCurveTo(200, 5, 150, 20, 170, 80);
        A10_Animation.crc2.closePath();
        A10_Animation.crc2.stroke();
        A10_Animation.crc2.fill();
        A10_Animation.crc2.beginPath();
        A10_Animation.crc2.moveTo(70, 250);
        A10_Animation.crc2.bezierCurveTo(30, 300, 30, 350, 130, 350);
        A10_Animation.crc2.bezierCurveTo(150, 380, 220, 380, 240, 350);
        A10_Animation.crc2.bezierCurveTo(320, 350, 320, 320, 290, 300);
        A10_Animation.crc2.bezierCurveTo(330, 240, 270, 230, 240, 250);
        A10_Animation.crc2.bezierCurveTo(220, 205, 150, 220, 150, 250);
        A10_Animation.crc2.bezierCurveTo(100, 205, 50, 220, 70, 280);
        A10_Animation.crc2.closePath();
        A10_Animation.crc2.stroke();
        A10_Animation.crc2.fill();
    }
    function drawLine() {
        A10_Animation.crc2.fillStyle = "white";
        A10_Animation.crc2.strokeStyle = "black";
        A10_Animation.crc2.lineWidth = 3;
        A10_Animation.crc2.beginPath();
        A10_Animation.crc2.moveTo(0, 730);
        A10_Animation.crc2.lineTo(360, 730);
        A10_Animation.crc2.lineTo(360, 400);
        A10_Animation.crc2.lineTo(0, 650);
        A10_Animation.crc2.closePath();
        A10_Animation.crc2.fill();
        A10_Animation.crc2.stroke();
    }
    function drawSky() {
        A10_Animation.crc2.fillStyle = "#2ECCFA";
        A10_Animation.crc2.strokeStyle = "#000000";
        A10_Animation.crc2.lineWidth = 3;
        A10_Animation.crc2.beginPath();
        A10_Animation.crc2.moveTo(0, 650);
        A10_Animation.crc2.lineTo(0, 0);
        A10_Animation.crc2.lineTo(360, 0);
        A10_Animation.crc2.lineTo(360, 400);
        A10_Animation.crc2.closePath();
        A10_Animation.crc2.fill();
        A10_Animation.crc2.stroke();
    }
    function drawChild2() {
        function drawChild2(_x, _y) {
            A10_Animation.crc2.fillStyle = "black";
            A10_Animation.crc2.strokeStyle = "black";
            A10_Animation.crc2.lineWidth = 3;
            A10_Animation.crc2.beginPath();
            A10_Animation.crc2.arc((_x), (_y), 5, 0, 2 * Math.PI);
            A10_Animation.crc2.closePath();
            A10_Animation.crc2.stroke();
            A10_Animation.crc2.fill();
            A10_Animation.crc2.beginPath();
            A10_Animation.crc2.moveTo(_x, _y);
            A10_Animation.crc2.lineTo(_x, _y + 30);
            A10_Animation.crc2.closePath();
            A10_Animation.crc2.stroke();
            A10_Animation.crc2.beginPath();
            A10_Animation.crc2.moveTo(_x, _y + 30);
            A10_Animation.crc2.lineTo(_x - 20, _y + 35);
            A10_Animation.crc2.closePath();
            A10_Animation.crc2.stroke();
            A10_Animation.crc2.beginPath();
            A10_Animation.crc2.moveTo(_x, _y + 10);
            A10_Animation.crc2.lineTo(_x - 15, _y + 13);
            A10_Animation.crc2.closePath();
            A10_Animation.crc2.stroke();
            A10_Animation.crc2.strokeStyle = "black";
            A10_Animation.crc2.fillStyle = "brown";
            A10_Animation.crc2.beginPath();
            A10_Animation.crc2.moveTo(_x - 20, _y + 35);
            A10_Animation.crc2.lineTo(_x - 20, _y + 40);
            A10_Animation.crc2.lineTo(_x - 20, _y + 50);
            A10_Animation.crc2.lineTo(_x + 10, _y + 50);
            A10_Animation.crc2.lineTo(_x + 10, _y + 30);
            A10_Animation.crc2.closePath();
            A10_Animation.crc2.stroke();
            A10_Animation.crc2.fill();
        }
    }
    function drawChild1() {
        for (let i = 0; i < 2; i++) {
            let x = 80;
            let y = 60;
            A10_Animation.crc2.fillStyle = "black";
            A10_Animation.crc2.strokeStyle = "black";
            A10_Animation.crc2.lineWidth = 3;
            A10_Animation.crc2.beginPath();
            A10_Animation.crc2.arc((i * x + 200), (i * y + 600), 5, 0, 2 * Math.PI);
            A10_Animation.crc2.closePath();
            A10_Animation.crc2.stroke();
            A10_Animation.crc2.fill();
            A10_Animation.crc2.strokeStyle = "black";
            A10_Animation.crc2.lineWidth = 1;
            A10_Animation.crc2.beginPath();
            A10_Animation.crc2.moveTo(i * x + 200, i * y + 600);
            A10_Animation.crc2.lineTo(i * x + 200, i * y + 635);
            A10_Animation.crc2.closePath();
            A10_Animation.crc2.stroke();
            A10_Animation.crc2.beginPath();
            A10_Animation.crc2.moveTo(i * x + 200, i * y + 615);
            A10_Animation.crc2.lineTo(i * x + 210, i * y + 610);
            A10_Animation.crc2.closePath();
            A10_Animation.crc2.stroke();
            A10_Animation.crc2.beginPath();
            A10_Animation.crc2.moveTo(i * x + 200, i * y + 615);
            A10_Animation.crc2.lineTo(i * x + 190, i * y + 630);
            A10_Animation.crc2.closePath();
            A10_Animation.crc2.stroke();
            A10_Animation.crc2.beginPath();
            A10_Animation.crc2.moveTo(i * x + 200, i * y + 635);
            A10_Animation.crc2.lineTo(i * x + 210, i * y + 640);
            A10_Animation.crc2.closePath();
            A10_Animation.crc2.stroke();
            A10_Animation.crc2.beginPath();
            A10_Animation.crc2.moveTo(i * x + 200, i * y + 635);
            A10_Animation.crc2.lineTo(i * x + 190, i * y + 642);
            A10_Animation.crc2.closePath();
            A10_Animation.crc2.stroke();
            A10_Animation.crc2.strokeStyle = "red";
            A10_Animation.crc2.beginPath();
            A10_Animation.crc2.moveTo(i * x + 190, i * y + 630);
            ;
            A10_Animation.crc2.lineTo(i * x + 180, i * y + 640);
            A10_Animation.crc2.closePath();
            A10_Animation.crc2.stroke();
            A10_Animation.crc2.strokeStyle = "brown";
            A10_Animation.crc2.beginPath();
            A10_Animation.crc2.moveTo(i * x + 180, i * y + 640);
            ;
            A10_Animation.crc2.lineTo(i * x + 180, i * y + 650);
            A10_Animation.crc2.closePath();
            A10_Animation.crc2.stroke();
            A10_Animation.crc2.beginPath();
            A10_Animation.crc2.moveTo(i * x + 180, i * y + 650);
            ;
            A10_Animation.crc2.lineTo(i * x + 160, i * y + 650);
            A10_Animation.crc2.closePath();
            A10_Animation.crc2.stroke();
            A10_Animation.crc2.beginPath();
            A10_Animation.crc2.moveTo(i * x + 160, i * y + 650);
            A10_Animation.crc2.lineTo(i * x + 160, i * y + 640);
            A10_Animation.crc2.closePath();
            A10_Animation.crc2.stroke();
            A10_Animation.crc2.beginPath();
            A10_Animation.crc2.moveTo(i * x + 160, i * y + 640);
            A10_Animation.crc2.lineTo(i * x + 175, i * y + 640);
            A10_Animation.crc2.closePath();
            A10_Animation.crc2.stroke();
            A10_Animation.crc2.beginPath();
            A10_Animation.crc2.moveTo(i * x + 163, i * y + 640);
            A10_Animation.crc2.lineTo(i * x + 163, i * y + 650);
            A10_Animation.crc2.closePath();
            A10_Animation.crc2.stroke();
            A10_Animation.crc2.beginPath();
            A10_Animation.crc2.moveTo(i * x + 170, i * y + 640);
            A10_Animation.crc2.lineTo(i * x + 170, i * y + 650);
            A10_Animation.crc2.closePath();
            A10_Animation.crc2.stroke();
            continue;
        }
    }
})(A10_Animation || (A10_Animation = {}));
//# sourceMappingURL=Main.js.map