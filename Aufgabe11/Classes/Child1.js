var A11_Inheritance;
(function (A11_Inheritance) {
    class Child1 extends A11_Inheritance.Children {
        move() {
            this.y += this.dy;
            this.x += this.dx;
            if (this.x < 0 || this.y > 730) {
                this.x = 360;
                this.y = Math.random() * 330 + 400;
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
            A11_Inheritance.crc2.lineTo(this.x - 20, this.y + 35);
            A11_Inheritance.crc2.closePath();
            A11_Inheritance.crc2.stroke();
            A11_Inheritance.crc2.beginPath();
            A11_Inheritance.crc2.moveTo(this.x, this.y + 10);
            A11_Inheritance.crc2.lineTo(this.x - 15, this.y + 13);
            A11_Inheritance.crc2.closePath();
            A11_Inheritance.crc2.stroke();
            A11_Inheritance.crc2.strokeStyle = "black";
            A11_Inheritance.crc2.fillStyle = "brown";
            A11_Inheritance.crc2.beginPath();
            A11_Inheritance.crc2.moveTo(this.x - 20, this.y + 35);
            A11_Inheritance.crc2.lineTo(this.x - 20, this.y + 40);
            A11_Inheritance.crc2.lineTo(this.x - 20, this.y + 50);
            A11_Inheritance.crc2.lineTo(this.x + 10, this.y + 50);
            A11_Inheritance.crc2.lineTo(this.x + 10, this.y + 30);
            A11_Inheritance.crc2.closePath();
            A11_Inheritance.crc2.stroke();
            A11_Inheritance.crc2.fill();
        }
    }
    A11_Inheritance.Child1 = Child1;
})(A11_Inheritance || (A11_Inheritance = {}));
//# sourceMappingURL=Child1.js.map