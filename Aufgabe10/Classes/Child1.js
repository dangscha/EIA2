var A10_Animation;
(function (A10_Animation) {
    class Child1 {
        move() {
            this.y += this.dy;
            this.x += this.dx;
            if (this.x > 400) {
                this.x = 0;
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
            A10_Animation.crc2.lineTo(this.x - 20, this.y + 35);
            A10_Animation.crc2.closePath();
            A10_Animation.crc2.stroke();
            A10_Animation.crc2.beginPath();
            A10_Animation.crc2.moveTo(this.x, this.y + 10);
            A10_Animation.crc2.lineTo(this.x - 15, this.y + 13);
            A10_Animation.crc2.closePath();
            A10_Animation.crc2.stroke();
            A10_Animation.crc2.strokeStyle = "black";
            A10_Animation.crc2.fillStyle = "brown";
            A10_Animation.crc2.beginPath();
            A10_Animation.crc2.moveTo(this.x - 20, this.y + 35);
            A10_Animation.crc2.lineTo(this.x - 20, this.y + 40);
            A10_Animation.crc2.lineTo(this.x - 20, this.y + 50);
            A10_Animation.crc2.lineTo(this.x + 10, this.y + 50);
            A10_Animation.crc2.lineTo(this.x + 10, this.y + 30);
            A10_Animation.crc2.closePath();
            A10_Animation.crc2.stroke();
            A10_Animation.crc2.fill();
        }
    }
    A10_Animation.Child1 = Child1;
})(A10_Animation || (A10_Animation = {}));
//# sourceMappingURL=Child1.js.map