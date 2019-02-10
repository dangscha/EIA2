var end;
(function (end) {
    class Snowball extends end.Movement {
        move() {
            this.y += this.dy;
            this.draw();
        }
        draw() {
            end.crc2.fillStyle = "white";
            end.crc2.strokeStyle = "black";
            end.crc2.beginPath();
            end.crc2.arc(150, 150, 30, 0, 2 * Math.PI);
            end.crc2.closePath();
            end.crc2.stroke();
            end.crc2.fill();
        }
    }
    end.Snowball = Snowball;
})(end || (end = {}));
//# sourceMappingURL=Snowball.js.map