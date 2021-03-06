namespace end {

    window.addEventListener("load", init);

    export let crc2: any;
    let fps: number = 25;
    let imgData: ImageData;
    let child1: Movement;
    let snowflakes: Objects[] = [];
    let trees: Objects[] = [];
    let children1: Child1[] = [];
    let snowballs: Snowball[] = [];
    let score: number = 0;


    function init(): void {
        document.getElementById("start").addEventListener("click", canvasDraw);
        document.getElementById("EndScreen").style.display = "none";
        document.getElementById("Highscores").addEventListener("click", highScores);
    }

    function highScores(): void {
        document.getElementById("div").style.display = "none";
        document.getElementById("EndScreen").style.display = "initial";
        document.getElementById("h3").style.display = "none";
        document.getElementById("restart").style.display = "none";
        document.getElementById("input").style.display = "none";
    }

    function startCountdown(_seconds: number) {
        var counter: number = _seconds;
        var interval = setInterval(() => {
            counter--;
            document.getElementById("timer").innerHTML = "Timer: " + counter.toString() + "</br>";
            if (counter < 0) {
                clearInterval(interval);
                end()
                counter--;
            };
        }, 1000);
    };

    function mouseDown(_event: MouseEvent): void {
        let ball: Snowball = new Snowball;
        ball.x = _event.clientX;
        ball.y = _event.clientY;
        snowballs.push(ball);
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        canvas.addEventListener("click", mouseDown);
    }

    function canvasDraw(_event: Event): void {
        let seconds: number = 60;
        startCountdown(seconds);

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

        for (let i: number = 0; i < 7; i++) {
            let child1: Child1 = new Child1();
            child1.state = "down"
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

        let ballCount: number = snowballs.length;
        document.getElementById("Baelle").innerHTML = "Geworfene Baelle:" + ballCount.toString() + "";

        window.setTimeout(update, 1000 / fps);
        crc2.putImageData(imgData, 0, 0);
        document.getElementById("score").innerHTML = "Score:" + score.toString() + "</br>";


        for (let i: number = 0; i < 100; i++) {
            let flake: Objects = snowflakes[i];
            flake.move();
            flake.draw();
        }

        for (let i: number = 0; i < 7; i++) {
            let child1: Objects = children1[i];
            child1.move();
            child1.draw();
        }

        for (let i: number = 0; i < 5; i++) {
            let tree: Tree = trees[i];
            tree.draw();
        }
        for (let i: number = 0; i < snowballs.length; i++) {
            if (snowballs[i].radius > 0) {
                snowballs[i].move();
                snowballs[i].draw();
            }
            else {
                if (snowballs[i].radius == 0) {
                    snowballs[i].move();
                    snowballs[i].draw();
                    for (let i2: number = 0; i2 < children1.length; i2++) {
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


    function end(): void {
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

    function refresh(): void {
        window.location.reload();
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