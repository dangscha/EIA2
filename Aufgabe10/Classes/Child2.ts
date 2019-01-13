namespace A10_Animation {
    export class Child2 {
        x: number;
        y: number;
        dx: number;
        dy: number;
        
        move(): void {
            this.y += this.dy;
             this.x += this.dx;
            
            if (this.x > 600) {
                this.x = 0;
                this.y= Math.random()*360 + 520
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
            crc2.lineTo(this.x + 10, this.y + 40);
            crc2.closePath();
            crc2.stroke();

            crc2.beginPath();
            crc2.moveTo(this.x, this.y + 30);
            crc2.lineTo(this.x - 10, this.y + 40);
            crc2.closePath();
            crc2.stroke();

            crc2.beginPath();
            crc2.moveTo(this.x, this.y + 15);
            crc2.lineTo(this.x + 10, this.y + 15);
            crc2.closePath();
            crc2.stroke();

            crc2.beginPath();
            crc2.moveTo(this.x, this.y + 15);
            crc2.lineTo(this.x - 10, this.y + 20);
            crc2.closePath();
            crc2.stroke();

            crc2.strokeStyle = "red";
            crc2.beginPath();
            crc2.moveTo(this.x - 10, this.y + 20);;
            crc2.lineTo(this.x - 25, this.y + 30);
            crc2.closePath();
            crc2.stroke();

            crc2.strokeStyle = "brown";
            crc2.beginPath();
            crc2.moveTo(this.x - 25, this.y + 30);;
            crc2.lineTo(this.x - 50, this.y + 30);
            crc2.closePath();
            crc2.stroke();

            crc2.beginPath();
            crc2.moveTo(this.x - 50, this.y + 30);;
            crc2.lineTo(this.x - 50, this.y + 45);
            crc2.closePath();
            crc2.stroke();

            crc2.beginPath();
            crc2.moveTo(this.x - 50, this.y + 45);
            crc2.lineTo(this.x - 30, this.y + 45);
            crc2.closePath();
            crc2.stroke();

            crc2.beginPath();
            crc2.moveTo(this.x - 30, this.y + 45);
            crc2.lineTo(this.x - 25, this.y + 30);
            crc2.closePath();

            crc2.stroke();
        }
    }
}