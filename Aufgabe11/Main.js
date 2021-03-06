var A11_Inheritance;
(function (A11_Inheritance) {
    window.addEventListener("load", init);
    let crc3;
    let fps = 25;
    let imgData;
    let snowflakes = [];
    let trees = [];
    let children1 = [];
    let children2 = [];
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        A11_Inheritance.crc2 = canvas.getContext("2d");
        drawLine();
        drawSky();
        drawSun();
        imgData = A11_Inheritance.crc2.getImageData(0, 0, 360, 730);
        for (let i = 0; i < 100; i++) {
            let flake = new A11_Inheritance.Snowflake();
            flake.x = Math.random() * A11_Inheritance.crc2.canvas.width;
            flake.y = Math.random() * A11_Inheritance.crc2.canvas.height;
            flake.dy = Math.random() * 4;
            snowflakes.push(flake);
        }
        for (let i = 0; i < 5; i++) {
            let child1 = new A11_Inheritance.Child1();
            A11_Inheritance.crc2.beginPath();
            A11_Inheritance.crc2.moveTo(0, 730);
            A11_Inheritance.crc2.lineTo(360, 730);
            A11_Inheritance.crc2.lineTo(360, 400);
            A11_Inheritance.crc2.lineTo(0, 650);
            child1.x = 360;
            child1.y = Math.random() * 330 + 400;
            child1.dx = Math.random() * 3 - 5;
            child1.dy = -child1.dx;
            children1.push(child1);
        }
        for (let i = 0; i < 5; i++) {
            let child2 = new A11_Inheritance.Child2();
            child2.x = Math.random() * A11_Inheritance.crc2.canvas.width;
            child2.y = Math.random() * 360 + 400;
            child2.dx = Math.random() * 10;
            child2.dy = Math.random() * 0;
            A11_Inheritance.crc2.beginPath();
            A11_Inheritance.crc2.moveTo(0, 650);
            A11_Inheritance.crc2.lineTo(360, 730);
            A11_Inheritance.crc2.lineTo(360, 400);
            A11_Inheritance.crc2.lineTo(0, 650);
            A11_Inheritance.crc2.closePath();
            if (A11_Inheritance.crc2.isPointInPath(child2.x, child2.y)) {
                children2.push(child2);
            }
            else {
                i--;
            }
        }
        for (let i = 0; i < 5; i++) {
            let tree = new A11_Inheritance.Tree();
            tree.x = Math.random() * A11_Inheritance.crc2.canvas.width;
            tree.y = Math.random() * A11_Inheritance.crc2.canvas.height;
            A11_Inheritance.crc2.beginPath();
            A11_Inheritance.crc2.moveTo(0, 650);
            A11_Inheritance.crc2.lineTo(360, 730);
            A11_Inheritance.crc2.lineTo(360, 400);
            A11_Inheritance.crc2.lineTo(0, 650);
            A11_Inheritance.crc2.closePath();
            if (A11_Inheritance.crc2.isPointInPath(tree.x, tree.y)) {
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
        A11_Inheritance.crc2.putImageData(imgData, 0, 0);
        for (let i = 0; i < 100; i++) {
            let flake = snowflakes[i];
            flake.move();
            flake.draw();
        }
        for (let i = 0; i < 5; i++) {
            let child1 = children1[i];
            child1.move();
            child1.draw();
        }
        for (let i = 0; i < 5; i++) {
            let child2 = children2[i];
            child2.move();
            child2.draw();
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
        drawClouds();
    }
    function drawSun() {
        A11_Inheritance.crc2.fillStyle = "#FFFF00";
        A11_Inheritance.crc2.strokeStyle = "black";
        A11_Inheritance.crc2.beginPath();
        A11_Inheritance.crc2.arc(250, 75, 50, 0, 2 * Math.PI);
        A11_Inheritance.crc2.closePath();
        A11_Inheritance.crc2.stroke();
        A11_Inheritance.crc2.fill();
    }
    function drawClouds() {
        A11_Inheritance.crc2.fillStyle = "white";
        A11_Inheritance.crc2.strokeStyle = "black";
        A11_Inheritance.crc2.lineWidth = 1;
        A11_Inheritance.crc2.beginPath();
        A11_Inheritance.crc2.moveTo(170, 80);
        A11_Inheritance.crc2.bezierCurveTo(130, 100, 130, 150, 230, 150);
        A11_Inheritance.crc2.bezierCurveTo(250, 180, 320, 180, 340, 150);
        A11_Inheritance.crc2.bezierCurveTo(420, 150, 420, 120, 390, 100);
        A11_Inheritance.crc2.bezierCurveTo(430, 40, 370, 30, 340, 50);
        A11_Inheritance.crc2.bezierCurveTo(320, 5, 250, 20, 250, 50);
        A11_Inheritance.crc2.bezierCurveTo(200, 5, 150, 20, 170, 80);
        A11_Inheritance.crc2.closePath();
        A11_Inheritance.crc2.stroke();
        A11_Inheritance.crc2.fill();
        A11_Inheritance.crc2.beginPath();
        A11_Inheritance.crc2.moveTo(70, 250);
        A11_Inheritance.crc2.bezierCurveTo(30, 300, 30, 350, 130, 350);
        A11_Inheritance.crc2.bezierCurveTo(150, 380, 220, 380, 240, 350);
        A11_Inheritance.crc2.bezierCurveTo(320, 350, 320, 320, 290, 300);
        A11_Inheritance.crc2.bezierCurveTo(330, 240, 270, 230, 240, 250);
        A11_Inheritance.crc2.bezierCurveTo(220, 205, 150, 220, 150, 250);
        A11_Inheritance.crc2.bezierCurveTo(100, 205, 50, 220, 70, 280);
        A11_Inheritance.crc2.closePath();
        A11_Inheritance.crc2.stroke();
        A11_Inheritance.crc2.fill();
    }
    function drawLine() {
        A11_Inheritance.crc2.fillStyle = "white";
        A11_Inheritance.crc2.strokeStyle = "black";
        A11_Inheritance.crc2.lineWidth = 3;
        A11_Inheritance.crc2.beginPath();
        A11_Inheritance.crc2.moveTo(0, 730);
        A11_Inheritance.crc2.lineTo(360, 730);
        A11_Inheritance.crc2.lineTo(360, 400);
        A11_Inheritance.crc2.lineTo(0, 650);
        A11_Inheritance.crc2.closePath();
        A11_Inheritance.crc2.fill();
        A11_Inheritance.crc2.stroke();
    }
    function drawSky() {
        A11_Inheritance.crc2.fillStyle = "#2ECCFA";
        A11_Inheritance.crc2.strokeStyle = "#000000";
        A11_Inheritance.crc2.lineWidth = 3;
        A11_Inheritance.crc2.beginPath();
        A11_Inheritance.crc2.moveTo(0, 650);
        A11_Inheritance.crc2.lineTo(0, 0);
        A11_Inheritance.crc2.lineTo(360, 0);
        A11_Inheritance.crc2.lineTo(360, 400);
        A11_Inheritance.crc2.closePath();
        A11_Inheritance.crc2.fill();
        A11_Inheritance.crc2.stroke();
    }
})(A11_Inheritance || (A11_Inheritance = {}));
//# sourceMappingURL=Main.js.map