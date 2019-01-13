var A10_Animation;
(function (A10_Animation) {
    class Child2 {
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
            A10_Animation.crc2.fillStyle = "black";
            A10_Animation.crc2.strokeStyle = "black";
            A10_Animation.crc2.lineWidth = 3;
            A10_Animation.crc2.beginPath();
            A10_Animation.crc2.arc((this.x), (this.y), 5, 0, 2 * Math.PI);
            A10_Animation.crc2.closePath();
            A10_Animation.crc2.stroke();
            A10_Animation.crc2.fill();
            A10_Animation.crc2.beginPath();
            A10_Animation.crc2.moveTo(this.x, this.y);
            A10_Animation.crc2.lineTo(this.x, this.y + 30);
            A10_Animation.crc2.closePath();
            A10_Animation.crc2.stroke();
            A10_Animation.crc2.beginPath();
            A10_Animation.crc2.moveTo(this.x, this.y + 30);
            A10_Animation.crc2.lineTo(this.x + 10, this.y + 40);
            A10_Animation.crc2.closePath();
            A10_Animation.crc2.stroke();
            A10_Animation.crc2.beginPath();
            A10_Animation.crc2.moveTo(this.x, this.y + 30);
            A10_Animation.crc2.lineTo(this.x - 10, this.y + 40);
            A10_Animation.crc2.closePath();
            A10_Animation.crc2.stroke();
            A10_Animation.crc2.beginPath();
            A10_Animation.crc2.moveTo(this.x, this.y + 15);
            A10_Animation.crc2.lineTo(this.x + 10, this.y + 15);
            A10_Animation.crc2.closePath();
            A10_Animation.crc2.stroke();
            A10_Animation.crc2.beginPath();
            A10_Animation.crc2.moveTo(this.x, this.y + 15);
            A10_Animation.crc2.lineTo(this.x - 10, this.y + 20);
            A10_Animation.crc2.closePath();
            A10_Animation.crc2.stroke();
            A10_Animation.crc2.strokeStyle = "red";
            A10_Animation.crc2.beginPath();
            A10_Animation.crc2.moveTo(this.x - 10, this.y + 20);
            ;
            A10_Animation.crc2.lineTo(this.x - 25, this.y + 30);
            A10_Animation.crc2.closePath();
            A10_Animation.crc2.stroke();
            A10_Animation.crc2.strokeStyle = "brown";
            A10_Animation.crc2.beginPath();
            A10_Animation.crc2.moveTo(this.x - 25, this.y + 30);
            ;
            A10_Animation.crc2.lineTo(this.x - 50, this.y + 30);
            A10_Animation.crc2.closePath();
            A10_Animation.crc2.stroke();
            A10_Animation.crc2.beginPath();
            A10_Animation.crc2.moveTo(this.x - 50, this.y + 30);
            ;
            A10_Animation.crc2.lineTo(this.x - 50, this.y + 45);
            A10_Animation.crc2.closePath();
            A10_Animation.crc2.stroke();
            A10_Animation.crc2.beginPath();
            A10_Animation.crc2.moveTo(this.x - 50, this.y + 45);
            A10_Animation.crc2.lineTo(this.x - 30, this.y + 45);
            A10_Animation.crc2.closePath();
            A10_Animation.crc2.stroke();
            A10_Animation.crc2.beginPath();
            A10_Animation.crc2.moveTo(this.x - 30, this.y + 45);
            A10_Animation.crc2.lineTo(this.x - 25, this.y + 30);
            A10_Animation.crc2.closePath();
            A10_Animation.crc2.stroke();
        }
    }
    A10_Animation.Child2 = Child2;
})(A10_Animation || (A10_Animation = {}));
//# sourceMappingURL=Child2.js.map