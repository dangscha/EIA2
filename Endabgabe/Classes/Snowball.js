var end;
(function (end) {
    class Snowball extends end.Movement {
        constructor(...args) {
            super(...args);
            this.radius = 50;
        }
        move() {
            this.radius -= 1;
        }
        draw() {
            if (this.radius > 0) {
                end.crc2.fillStyle = "white";
                end.crc2.strokeStyle = "black";
                end.crc2.beginPath();
                end.crc2.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
                end.crc2.closePath();
                end.crc2.stroke();
                end.crc2.fill();
            }
        }
        hitDetection(_x, _y) {
            end.crc2.lineWidth = 30;
            end.crc2.beginPath();
            end.crc2.arc((_x), (_y), 20, 0, 2 * Math.PI);
            end.crc2.moveTo(_x, _y);
            end.crc2.lineTo(_x, _y + 30);
            end.crc2.moveTo(_x, _y + 30);
            end.crc2.lineTo(_x, _y + 35);
            end.crc2.moveTo(_x, _y + 10);
            end.crc2.lineTo(_x - 15, _y + 13);
            end.crc2.moveTo(_x - 20, _y + 35);
            end.crc2.lineTo(_x - 20, _y + 40);
            end.crc2.lineTo(_x - 20, _y + 50);
            end.crc2.lineTo(_x + 10, _y + 50);
            end.crc2.lineTo(_x + 10, _y + 30);
            end.crc2.closePath();
            if (end.crc2.isPointInPath(this.x, this.y)) {
                return true;
            }
            else {
                return false;
            }
        }
    }
    end.Snowball = Snowball;
})(end || (end = {}));
//# sourceMappingURL=Snowball.js.map