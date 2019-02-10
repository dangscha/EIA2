var end;
(function (end) {
    class Snowball extends end.Movement {
        constructor(...args) {
            super(...args);
            this.radius = 50;
        }
        move() {
            if (this.radius > 5) {
                this.radius -= 1;
            }
            else {
                this.radius = 0;
            }
        }
        draw() {
            end.crc2.fillStyle = "white";
            end.crc2.strokeStyle = "black";
            end.crc2.beginPath();
            end.crc2.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            end.crc2.closePath();
            end.crc2.stroke();
            end.crc2.fill();
        }
    }
    end.Snowball = Snowball;
})(end || (end = {}));
//# sourceMappingURL=Snowball.js.map