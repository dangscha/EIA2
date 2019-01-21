var A11_Inheritance;
(function (A11_Inheritance) {
    class Child2 extends A11_Inheritance.Movement {
        move() {
            this.y += this.dy;
            this.x += this.dx;
            if (this.x > 600) {
                this.x = 0;
                this.y = Math.random() * 360 + 520;
            }
            this.draw();
        }
        draw() {
            A11_Inheritance.crc2.fillStyle = "black";
            A11_Inheritance.crc2.strokeStyle = "black";
            A11_Inheritance.crc2.lineWidth = 3;
            A11_Inheritance.crc2.beginPath();
            A11_Inheritance.crc2.arc((this.x), (this.y), 5, 0, 2 * Math.PI);
            A11_Inheritance.crc2.closePath();
            A11_Inheritance.crc2.stroke();
            A11_Inheritance.crc2.fill();
            A11_Inheritance.crc2.beginPath();
            A11_Inheritance.crc2.moveTo(this.x, this.y);
            A11_Inheritance.crc2.lineTo(this.x, this.y + 30);
            A11_Inheritance.crc2.closePath();
            A11_Inheritance.crc2.stroke();
            A11_Inheritance.crc2.beginPath();
            A11_Inheritance.crc2.moveTo(this.x, this.y + 30);
            A11_Inheritance.crc2.lineTo(this.x + 10, this.y + 40);
            A11_Inheritance.crc2.closePath();
            A11_Inheritance.crc2.stroke();
            A11_Inheritance.crc2.beginPath();
            A11_Inheritance.crc2.moveTo(this.x, this.y + 30);
            A11_Inheritance.crc2.lineTo(this.x - 10, this.y + 40);
            A11_Inheritance.crc2.closePath();
            A11_Inheritance.crc2.stroke();
            A11_Inheritance.crc2.beginPath();
            A11_Inheritance.crc2.moveTo(this.x, this.y + 15);
            A11_Inheritance.crc2.lineTo(this.x + 10, this.y + 15);
            A11_Inheritance.crc2.closePath();
            A11_Inheritance.crc2.stroke();
            A11_Inheritance.crc2.beginPath();
            A11_Inheritance.crc2.moveTo(this.x, this.y + 15);
            A11_Inheritance.crc2.lineTo(this.x - 10, this.y + 20);
            A11_Inheritance.crc2.closePath();
            A11_Inheritance.crc2.stroke();
            A11_Inheritance.crc2.strokeStyle = "red";
            A11_Inheritance.crc2.beginPath();
            A11_Inheritance.crc2.moveTo(this.x - 10, this.y + 20);
            ;
            A11_Inheritance.crc2.lineTo(this.x - 25, this.y + 30);
            A11_Inheritance.crc2.closePath();
            A11_Inheritance.crc2.stroke();
            A11_Inheritance.crc2.strokeStyle = "brown";
            A11_Inheritance.crc2.beginPath();
            A11_Inheritance.crc2.moveTo(this.x - 25, this.y + 30);
            ;
            A11_Inheritance.crc2.lineTo(this.x - 50, this.y + 30);
            A11_Inheritance.crc2.closePath();
            A11_Inheritance.crc2.stroke();
            A11_Inheritance.crc2.beginPath();
            A11_Inheritance.crc2.moveTo(this.x - 50, this.y + 30);
            ;
            A11_Inheritance.crc2.lineTo(this.x - 50, this.y + 45);
            A11_Inheritance.crc2.closePath();
            A11_Inheritance.crc2.stroke();
            A11_Inheritance.crc2.beginPath();
            A11_Inheritance.crc2.moveTo(this.x - 50, this.y + 45);
            A11_Inheritance.crc2.lineTo(this.x - 30, this.y + 45);
            A11_Inheritance.crc2.closePath();
            A11_Inheritance.crc2.stroke();
            A11_Inheritance.crc2.beginPath();
            A11_Inheritance.crc2.moveTo(this.x - 30, this.y + 45);
            A11_Inheritance.crc2.lineTo(this.x - 25, this.y + 30);
            A11_Inheritance.crc2.closePath();
            A11_Inheritance.crc2.stroke();
        }
    }
    A11_Inheritance.Child2 = Child2;
})(A11_Inheritance || (A11_Inheritance = {}));
//# sourceMappingURL=Child2.js.map