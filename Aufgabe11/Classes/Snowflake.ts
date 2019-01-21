namespace A11_Inheritance {
    
    export class Snowflake extends Objects {
        dy: number;
        color:string

        move(): void {
            this.y += this.dy;
            
            if (this.y > 600) {
                this.y = 0;
            }
            this.draw();
        }

        draw(): void {
            crc2.strokeStyle = "#FFFFFF";
            crc2.lineWidth = 3;

            crc2.beginPath();
            crc2.moveTo(this.x, this.y - 3);
            crc2.lineTo(this.x, this.y + 3);
            crc2.closePath();
            crc2.moveTo(this.x + 3, this.y);
            crc2.lineTo(this.x - 3, this.y);
            crc2.closePath();
            crc2.stroke();
        }
    }
}