namespace end {
    export class Snowball extends Movement {
        radius: number = 50;


        move(): void {
            this.radius -= 1;

        }

        draw(): void {
            if (this.radius > 0) {
                crc2.fillStyle = "white";
                crc2.strokeStyle = "black";
                crc2.beginPath();
                crc2.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
                crc2.closePath();
                crc2.stroke();
                crc2.fill();
            }
        }

        hitDetection(_x: number, _y: number): boolean {
            crc2.lineWidth = 30;
            crc2.beginPath();
            crc2.arc(_x, _y, 20, 0, 2 * Math.PI);
            crc2.moveTo(_x, _y);
            crc2.lineTo(_x, _y + 30);
            crc2.moveTo(_x, _y + 30);
            crc2.lineTo(_x, _y + 35);
            crc2.moveTo(_x, _y + 10);
            crc2.lineTo(_x - 15, _y + 13);
            crc2.moveTo(_x - 20, _y + 35);
            crc2.lineTo(_x - 20, _y + 40);
            crc2.lineTo(_x - 20, _y + 50);
            crc2.lineTo(_x + 10, _y + 50);
            crc2.lineTo(_x + 10, _y + 30);
            crc2.closePath();
            crc2.stroke();

            if (crc2.isPointInPath(this.x, this.y)) {
                return true;

            }
            else {
                return false;
            }
        }
    }
}
