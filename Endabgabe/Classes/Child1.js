var end;
(function (end) {
    class Child1 extends end.Movement {
        draw() {
            if (this.state == "down") {
                this.drawChild();
            }
            if (this.state == "hit") {
                this.drawHit();
            }
            if (this.state == "up") {
                this.childUp();
            }
        }
        childUp() {
            end.crc2.fillStyle = "black";
            end.crc2.strokeStyle = "black";
            end.crc2.lineWidth = 3;
            end.crc2.beginPath();
            end.crc2.arc((this.x), (this.y), 5, 0, 2 * Math.PI);
            end.crc2.closePath();
            end.crc2.stroke();
            end.crc2.fill();
            end.crc2.beginPath();
            end.crc2.moveTo(this.x, this.y);
            end.crc2.lineTo(this.x, this.y + 40);
            end.crc2.closePath();
            end.crc2.stroke();
            end.crc2.fill();
            end.crc2.beginPath();
            end.crc2.moveTo(this.x, this.y + 40);
            end.crc2.lineTo(this.x - 10, this.y + 60);
            end.crc2.closePath();
            end.crc2.stroke();
            end.crc2.fill();
            end.crc2.beginPath();
            end.crc2.moveTo(this.x, this.y + 40);
            end.crc2.lineTo(this.x + 10, this.y + 60);
            end.crc2.closePath();
            end.crc2.stroke();
            end.crc2.fill();
            end.crc2.beginPath();
            end.crc2.moveTo(this.x, this.y + 15);
            end.crc2.lineTo(this.x - 10, this.y + 20);
            end.crc2.closePath();
            end.crc2.stroke();
            end.crc2.strokeStyle = "red";
            end.crc2.beginPath();
            end.crc2.moveTo(this.x - 10, this.y + 20);
            ;
            end.crc2.lineTo(this.x - 25, this.y + 30);
            end.crc2.closePath();
            end.crc2.stroke();
            end.crc2.strokeStyle = "brown";
            end.crc2.beginPath();
            end.crc2.moveTo(this.x - 25, this.y + 30);
            ;
            end.crc2.lineTo(this.x - 50, this.y + 30);
            end.crc2.closePath();
            end.crc2.stroke();
            end.crc2.beginPath();
            end.crc2.moveTo(this.x - 50, this.y + 30);
            ;
            end.crc2.lineTo(this.x - 50, this.y + 45);
            end.crc2.closePath();
            end.crc2.stroke();
            end.crc2.beginPath();
            end.crc2.moveTo(this.x - 50, this.y + 45);
            end.crc2.lineTo(this.x - 30, this.y + 45);
            end.crc2.closePath();
            end.crc2.stroke();
            end.crc2.beginPath();
            end.crc2.moveTo(this.x - 30, this.y + 45);
            end.crc2.lineTo(this.x - 25, this.y + 30);
            end.crc2.closePath();
            end.crc2.stroke();
        }
        move() {
            if (this.state == "down") {
                if (this.y > end.crc2.canvas.height) {
                    this.state = "up";
                }
                else if (this.x < 0) {
                    this.state = "up";
                }
                else {
                    this.x += this.dx;
                    this.y += this.dy;
                }
            }
            if (this.state == "up") {
                if (this.x > end.crc2.canvas.width) {
                    this.state = "down";
                }
                else {
                    this.x -= this.dx;
                    this.y -= this.dy;
                }
            }
            if (this.state == "hit") {
                if (this.y > end.crc2.canvas.height) {
                    this.x = 360;
                    this.y = Math.random() * 330 + 400;
                    this.state = "down";
                }
                else if (this.x < 0) {
                    this.x = 360;
                    this.y = Math.random() * 330 + 400;
                    this.state = "down";
                }
                else {
                    this.x += this.dx;
                    this.y += this.dy;
                }
            }
        }
        drawHit() {
            end.crc2.strokeStyle = "black";
            end.crc2.fillStyle = "brown";
            end.crc2.beginPath();
            end.crc2.moveTo(this.x - 20, this.y + 35);
            end.crc2.lineTo(this.x - 20, this.y + 40);
            end.crc2.lineTo(this.x - 20, this.y + 50);
            end.crc2.lineTo(this.x + 10, this.y + 50);
            end.crc2.lineTo(this.x + 10, this.y + 30);
            end.crc2.closePath();
            end.crc2.stroke();
            end.crc2.fill();
        }
        drawChild() {
            end.crc2.fillStyle = "black";
            end.crc2.strokeStyle = "black";
            end.crc2.lineWidth = 3;
            end.crc2.beginPath();
            end.crc2.arc((this.x), (this.y), 5, 0, 2 * Math.PI);
            end.crc2.closePath();
            end.crc2.stroke();
            end.crc2.fill();
            end.crc2.beginPath();
            end.crc2.moveTo(this.x, this.y);
            end.crc2.lineTo(this.x, this.y + 30);
            end.crc2.closePath();
            end.crc2.stroke();
            end.crc2.beginPath();
            end.crc2.moveTo(this.x, this.y + 30);
            end.crc2.lineTo(this.x - 20, this.y + 35);
            end.crc2.closePath();
            end.crc2.stroke();
            end.crc2.beginPath();
            end.crc2.moveTo(this.x, this.y + 10);
            end.crc2.lineTo(this.x - 15, this.y + 13);
            end.crc2.closePath();
            end.crc2.stroke();
            end.crc2.strokeStyle = "black";
            end.crc2.fillStyle = "brown";
            end.crc2.beginPath();
            end.crc2.moveTo(this.x - 20, this.y + 35);
            end.crc2.lineTo(this.x - 20, this.y + 40);
            end.crc2.lineTo(this.x - 20, this.y + 50);
            end.crc2.lineTo(this.x + 10, this.y + 50);
            end.crc2.lineTo(this.x + 10, this.y + 30);
            end.crc2.closePath();
            end.crc2.stroke();
            end.crc2.fill();
        }
    }
    end.Child1 = Child1;
})(end || (end = {}));
//# sourceMappingURL=Child1.js.map