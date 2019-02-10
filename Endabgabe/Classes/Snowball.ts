namespace end {
    export class Snowball extends Movement {
        radius: number = 50;


        move(): void {
            if( this.radius >5 ){
            this.radius-=1;}
           else{
                this.radius=0}
        }

        draw(): void {
            crc2.fillStyle = "white";
            crc2.strokeStyle = "black";
            crc2.beginPath();
            crc2.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
        }
    }

}