var A10_Animation;
(function (A10_Animation) {
    class Child1 {
        draw() {
            A10_Animation.crc2.lineWidth = 1;
            A10_Animation.crc2.fillStyle = "brown";
            A10_Animation.crc2.strokeStyle = "#000000";
            A10_Animation.crc2.beginPath();
            A10_Animation.crc2.moveTo(this.x - 10, this.y);
            A10_Animation.crc2.lineTo(this.x - 10, this.y + 40);
            A10_Animation.crc2.lineTo(this.x + 10, this.y + 40);
            A10_Animation.crc2.lineTo(this.x + 10, this.y);
            A10_Animation.crc2.closePath();
            A10_Animation.crc2.fill();
            A10_Animation.crc2.stroke();
            A10_Animation.crc2.fillStyle = "green";
            A10_Animation.crc2.strokeStyle = "#000000";
            A10_Animation.crc2.beginPath();
            A10_Animation.crc2.moveTo(this.x - 22.5, this.y);
            A10_Animation.crc2.lineTo(this.x, this.y - 40);
            A10_Animation.crc2.lineTo(this.x + 22.5, this.y);
            A10_Animation.crc2.fill();
            A10_Animation.crc2.stroke();
        }
    }
    A10_Animation.Child1 = Child1;
})(A10_Animation || (A10_Animation = {}));
//# sourceMappingURL=ChildUp.js.map