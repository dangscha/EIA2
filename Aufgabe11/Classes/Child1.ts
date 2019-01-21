namespace A11_Inheritance {
    export class Child1 extends Children {

        move(): void {
            this.y += this.dy;
            this.x += this.dx;

            if (this.x < 0 || this.y > 730) {
                this.x = 360;
                this.y = Math.random() * 330 + 400
            }
            this.draw();
        }
        draw(): void {
            crc2.fillStyle = "black";
            crc2.strokeStyle = "black";
            crc2.lineWidth = 3;
            crc2.beginPath();
            crc2.arc((this.x), (this.y), 5, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();

            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x, this.y + 30);
            crc2.closePath();
            crc2.stroke();

            crc2.beginPath();
            crc2.moveTo(this.x, this.y + 30);
            crc2.lineTo(this.x - 20, this.y + 35);
            crc2.closePath();
            crc2.stroke();

            crc2.beginPath();
            crc2.moveTo(this.x, this.y + 10);
            crc2.lineTo(this.x - 15, this.y + 13);
            crc2.closePath();
            crc2.stroke();

            crc2.strokeStyle = "black";
            crc2.fillStyle = "brown";
            crc2.beginPath();
            crc2.moveTo(this.x - 20, this.y + 35);
            crc2.lineTo(this.x - 20, this.y + 40);

            crc2.lineTo(this.x - 20, this.y + 50);

            crc2.lineTo(this.x + 10, this.y + 50);
            crc2.lineTo(this.x + 10, this.y + 30);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
        }
    }
}