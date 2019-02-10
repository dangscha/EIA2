var end;
(function (end) {
    class Snowflake extends end.Movement {
        move() {
            this.y += this.dy;
            if (this.y > 600) {
                this.y = 0;
            }
            this.draw();
        }
        draw() {
            end.crc2.strokeStyle = "#FFFFFF";
            end.crc2.lineWidth = 3;
            end.crc2.beginPath();
            end.crc2.moveTo(this.x, this.y - 3);
            end.crc2.lineTo(this.x, this.y + 3);
            end.crc2.closePath();
            end.crc2.moveTo(this.x + 3, this.y);
            end.crc2.lineTo(this.x - 3, this.y);
            end.crc2.closePath();
            end.crc2.stroke();
        }
    }
    end.Snowflake = Snowflake;
})(end || (end = {}));
//# sourceMappingURL=Snowflake.js.map