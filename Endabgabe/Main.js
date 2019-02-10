var end;
(function (end) {
    window.addEventListener("load", init);
    let fps = 25;
    let imgData;
    let snowflakes = [];
    let trees = [];
    let children1 = [];
    let snowballs = [];
    function init() {
        document.getElementById("start").addEventListener("click", canvasDraw);
    }
    function mouseDown(_event) {
        let ball = new end.Snowball;
        ball.x = _event.clientX;
        ball.y = _event.clientY;
        snowballs.push(ball);
        let canvas = document.getElementsByTagName("canvas")[0];
        canvas.addEventListener("click", mouseDown);
    }
    function canvasDraw(_event) {
        let button = document.getElementById("div");
        button.parentNode.removeChild(button);
        let canvas = document.getElementsByTagName("canvas")[0];
        canvas.addEventListener("click", mouseDown);
        end.crc2 = canvas.getContext("2d");
        createBackground();
        imgData = end.crc2.getImageData(0, 0, 360, 730);
        for (let i = 0; i < 100; i++) {
            let flake = new end.Snowflake();
            flake.x = Math.random() * end.crc2.canvas.width;
            flake.y = Math.random() * end.crc2.canvas.height;
            flake.dy = Math.random() * 4;
            snowflakes.push(flake);
        }
        for (let i = 0; i < 5; i++) {
            let child1 = new end.Child1();
            end.crc2.beginPath();
            end.crc2.moveTo(0, 730);
            end.crc2.lineTo(360, 730);
            end.crc2.lineTo(360, 400);
            end.crc2.lineTo(0, 650);
            child1.x = 360;
            child1.y = Math.random() * 330 + 400;
            child1.dx = Math.random() * 3 - 5;
            child1.dy = -child1.dx;
            children1.push(child1);
        }
        for (let i = 0; i < 5; i++) {
            let tree = new end.Tree();
            tree.x = Math.random() * end.crc2.canvas.width;
            tree.y = Math.random() * end.crc2.canvas.height;
            end.crc2.beginPath();
            end.crc2.moveTo(0, 650);
            end.crc2.lineTo(360, 730);
            end.crc2.lineTo(360, 400);
            end.crc2.lineTo(0, 650);
            end.crc2.closePath();
            if (end.crc2.isPointInPath(tree.x, tree.y)) {
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
        end.crc2.putImageData(imgData, 0, 0);
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
            let tree = trees[i];
            tree.draw();
        }
        for (let i = 0; i < 20; i++) {
            let ball = snowballs[i];
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
        end.crc2.fillStyle = "#FFFF00";
        end.crc2.strokeStyle = "black";
        end.crc2.beginPath();
        end.crc2.arc(250, 75, 50, 0, 2 * Math.PI);
        end.crc2.closePath();
        end.crc2.stroke();
        end.crc2.fill();
    }
    function drawLine() {
        end.crc2.fillStyle = "white";
        end.crc2.strokeStyle = "black";
        end.crc2.lineWidth = 3;
        end.crc2.beginPath();
        end.crc2.moveTo(0, 730);
        end.crc2.lineTo(360, 730);
        end.crc2.lineTo(360, 400);
        end.crc2.lineTo(0, 650);
        end.crc2.closePath();
        end.crc2.fill();
        end.crc2.stroke();
    }
    function drawSky() {
        end.crc2.fillStyle = "#2ECCFA";
        end.crc2.strokeStyle = "#000000";
        end.crc2.lineWidth = 3;
        end.crc2.beginPath();
        end.crc2.moveTo(0, 650);
        end.crc2.lineTo(0, 0);
        end.crc2.lineTo(360, 0);
        end.crc2.lineTo(360, 400);
        end.crc2.closePath();
        end.crc2.fill();
        end.crc2.stroke();
    }
})(end || (end = {}));
//# sourceMappingURL=Main.js.map