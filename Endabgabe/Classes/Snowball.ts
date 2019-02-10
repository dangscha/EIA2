namespace end {

    export class Snowball extends Movement {
        move(): void {
            this.y += this.dy;

            this.draw();
        }

        draw(): void {
            crc2.fillStyle = "white";
            crc2.strokeStyle = "black";
            crc2.beginPath();
            crc2.arc(150, 150, 30, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
        }
    }

}