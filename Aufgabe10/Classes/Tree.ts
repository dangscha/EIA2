namespace A10_Animation {
    export class Tree {
        x: number;
        y: number;
        dy: number;
        dx: number;
        color: string;


        draw(): void {
            crc2.lineWidth = 1;
            crc2.fillStyle = "brown";
            crc2.strokeStyle = "#000000";

            crc2.beginPath();
            crc2.moveTo(this.x - 10, this.y);
            crc2.lineTo(this.x - 10, this.y + 40);
            crc2.lineTo(this.x + 10, this.y + 40);
            crc2.lineTo(this.x + 10, this.y);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.fillStyle = "green";
            crc2.strokeStyle = "#000000";

            crc2.beginPath();
            crc2.moveTo(this.x - 22.5, this.y);
            crc2.lineTo(this.x, this.y - 40);
            crc2.lineTo(this.x + 22.5, this.y);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
        }
    }
}