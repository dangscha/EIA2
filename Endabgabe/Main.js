var end;
(function (end_1) {
    window.addEventListener("load", init);
    let fps = 25;
    let imgData;
    let child1;
    let snowflakes = [];
    let trees = [];
    let children1 = [];
    let snowballs = [];
    let score = 0;
    function init() {
        document.getElementById("start").addEventListener("click", canvasDraw);
        document.getElementById("EndScreen").style.display = "none";
        document.getElementById("Highscores").addEventListener("click", highScores);
    }
    function highScores() {
        document.getElementById("div").style.display = "none";
        document.getElementById("EndScreen").style.display = "initial";
        document.getElementById("h3").style.display = "none";
        document.getElementById("restart").style.display = "none";
        document.getElementById("input").style.display = "none";
    }
    function startCountdown(_seconds) {
        var counter = _seconds;
        var interval = setInterval(() => {
            counter--;
            document.getElementById("timer").innerHTML = "Timer: " + counter.toString() + "</br>";
            if (counter < 0) {
                clearInterval(interval);
                end();
                counter--;
            }
            ;
        }, 1000);
    }
    ;
    function mouseDown(_event) {
        let ball = new end_1.Snowball;
        ball.x = _event.clientX;
        ball.y = _event.clientY;
        snowballs.push(ball);
        let canvas = document.getElementsByTagName("canvas")[0];
        canvas.addEventListener("click", mouseDown);
    }
    function canvasDraw(_event) {
        let seconds = 60;
        startCountdown(seconds);
        let button = document.getElementById("div");
        button.parentNode.removeChild(button);
        let canvas = document.getElementsByTagName("canvas")[0];
        canvas.addEventListener("click", mouseDown);
        end_1.crc2 = canvas.getContext("2d");
        createBackground();
        imgData = end_1.crc2.getImageData(0, 0, 360, 730);
        for (let i = 0; i < 100; i++) {
            let flake = new end_1.Snowflake();
            flake.x = Math.random() * end_1.crc2.canvas.width;
            flake.y = Math.random() * end_1.crc2.canvas.height;
            flake.dy = Math.random() * 4;
            snowflakes.push(flake);
        }
        for (let i = 0; i < 7; i++) {
            let child1 = new end_1.Child1();
            child1.state = "down";
            child1.x = 360;
            child1.y = Math.random() * 330 + 400;
            child1.dx = Math.random() * 3 - 5;
            child1.dy = -child1.dx;
            children1.push(child1);
        }
        for (let i = 0; i < 5; i++) {
            let tree = new end_1.Tree();
            tree.x = Math.random() * end_1.crc2.canvas.width;
            tree.y = Math.random() * end_1.crc2.canvas.height;
            end_1.crc2.beginPath();
            end_1.crc2.moveTo(0, 650);
            end_1.crc2.lineTo(360, 730);
            end_1.crc2.lineTo(360, 400);
            end_1.crc2.lineTo(0, 650);
            end_1.crc2.closePath();
            if (end_1.crc2.isPointInPath(tree.x, tree.y)) {
                trees.push(tree);
            }
            else {
                i--;
            }
        }
        update();
    }
    function update() {
        let ballCount = snowballs.length;
        document.getElementById("Baelle").innerHTML = "Geworfene Baelle:" + ballCount.toString() + "";
        window.setTimeout(update, 1000 / fps);
        end_1.crc2.putImageData(imgData, 0, 0);
        document.getElementById("score").innerHTML = "Score:" + score.toString() + "</br>";
        for (let i = 0; i < 100; i++) {
            let flake = snowflakes[i];
            flake.move();
            flake.draw();
        }
        for (let i = 0; i < 7; i++) {
            let child1 = children1[i];
            child1.move();
            child1.draw();
        }
        for (let i = 0; i < 5; i++) {
            let tree = trees[i];
            tree.draw();
        }
        for (let i = 0; i < snowballs.length; i++) {
            if (snowballs[i].radius > 0) {
                snowballs[i].move();
                snowballs[i].draw();
            }
            else {
                if (snowballs[i].radius == 0) {
                    snowballs[i].move();
                    snowballs[i].draw();
                    for (let i2 = 0; i2 < children1.length; i2++) {
                        //console.log("snowX:" + snowballs[i].x + "snowY:" + snowballs[i].y + "childX:" + children1[i2].x + "childY:" + children1[i2].y);
                        //console.log(snowballs[i].hitDetection(children1[i2].x, children1[i2].y), children1[i2].state);
                        if (snowballs[i].hitDetection(children1[i2].x, children1[i2].y) == true && children1[i2].state == "down") {
                            children1[i2].state = "hit";
                            score += (children1[i2].dx * children1[i2].dy) * -10;
                            score = Math.floor(score);
                            console.log("score:" + score);
                        }
                        else if (snowballs[i].hitDetection2(children1[i2].x, children1[i2].y) == true && children1[i2].state == "up") {
                            children1[i2].state = "hit";
                            score += (children1[i2].dx * children1[i2].dy) * -10;
                            score = Math.floor(score);
                        }
                        else {
                            console.log("else");
                        }
                    }
                }
            }
        }
        if (snowballs.length < 20) {
            document.getElementById("Baelle").innerHTML = "Geworfene Baelle:" + ballCount.toString() + "";
        }
        if (snowballs.length > 20) {
            end();
        }
    }
    function end() {
        document.getElementById("canvas").style.display = "none";
        document.getElementById("timer").style.display = "none";
        document.getElementById("Baelle").style.display = "none";
        document.getElementById("score").style.display = "none";
        document.getElementById("EndScreen").style.display = "initial";
        document.getElementById("endScore").innerHTML = "Score:" + score.toString();
        document.getElementById("endScore").setAttribute("value", score.toString());
        document.getElementById("restart").addEventListener("click", refresh);
        return;
    }
    function refresh() {
        window.location.reload();
    }
    function createBackground() {
        drawLine();
        drawSky();
        drawSun();
    }
    function drawSun() {
        end_1.crc2.fillStyle = "#FFFF00";
        end_1.crc2.strokeStyle = "black";
        end_1.crc2.beginPath();
        end_1.crc2.arc(250, 75, 50, 0, 2 * Math.PI);
        end_1.crc2.closePath();
        end_1.crc2.stroke();
        end_1.crc2.fill();
    }
    function drawLine() {
        end_1.crc2.fillStyle = "white";
        end_1.crc2.strokeStyle = "black";
        end_1.crc2.lineWidth = 3;
        end_1.crc2.beginPath();
        end_1.crc2.moveTo(0, 730);
        end_1.crc2.lineTo(360, 730);
        end_1.crc2.lineTo(360, 400);
        end_1.crc2.lineTo(0, 650);
        end_1.crc2.closePath();
        end_1.crc2.fill();
        end_1.crc2.stroke();
    }
    function drawSky() {
        end_1.crc2.fillStyle = "#2ECCFA";
        end_1.crc2.strokeStyle = "#000000";
        end_1.crc2.lineWidth = 3;
        end_1.crc2.beginPath();
        end_1.crc2.moveTo(0, 650);
        end_1.crc2.lineTo(0, 0);
        end_1.crc2.lineTo(360, 0);
        end_1.crc2.lineTo(360, 400);
        end_1.crc2.closePath();
        end_1.crc2.fill();
        end_1.crc2.stroke();
    }
})(end || (end = {}));
//# sourceMappingURL=Main.js.map