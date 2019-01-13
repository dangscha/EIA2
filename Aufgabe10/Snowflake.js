var A10_Animation;
(function (A10_Animation) {
    class Snowflake {
        move() {
            this.y += this.dy;
        }
        draw() {
            A10_Animation.crc2.strokeStyle = "#FFFFFF";
            A10_Animation.crc2.lineWidth = 3;
            A10_Animation.crc2.beginPath();
            A10_Animation.crc2.moveTo(this.x, this.y - 3);
            A10_Animation.crc2.lineTo(this.x, this.y + 3);
            A10_Animation.crc2.closePath();
            A10_Animation.crc2.moveTo(this.x + 3, this.y);
            A10_Animation.crc2.lineTo(this.x - 3, this.y);
            A10_Animation.crc2.closePath();
            A10_Animation.crc2.stroke();
        }
    }
    A10_Animation.Snowflake = Snowflake;
})(A10_Animation || (A10_Animation = {}));
//# sourceMappingURL=Snowflake.js.map