var A11_Inheritance;
(function (A11_Inheritance) {
    class Snowflake extends A11_Inheritance.Movement {
        move() {
            this.y += this.dy;
            if (this.y > 600) {
                this.y = 0;
            }
            this.draw();
        }
        draw() {
            A11_Inheritance.crc2.strokeStyle = "#FFFFFF";
            A11_Inheritance.crc2.lineWidth = 3;
            A11_Inheritance.crc2.beginPath();
            A11_Inheritance.crc2.moveTo(this.x, this.y - 3);
            A11_Inheritance.crc2.lineTo(this.x, this.y + 3);
            A11_Inheritance.crc2.closePath();
            A11_Inheritance.crc2.moveTo(this.x + 3, this.y);
            A11_Inheritance.crc2.lineTo(this.x - 3, this.y);
            A11_Inheritance.crc2.closePath();
            A11_Inheritance.crc2.stroke();
        }
    }
    A11_Inheritance.Snowflake = Snowflake;
})(A11_Inheritance || (A11_Inheritance = {}));
//# sourceMappingURL=Snowflake.js.map