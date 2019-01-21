var A11_Inheritance;
(function (A11_Inheritance) {
    class Tree extends A11_Inheritance.Objects {
        draw() {
            A11_Inheritance.crc2.lineWidth = 1;
            A11_Inheritance.crc2.fillStyle = "brown";
            A11_Inheritance.crc2.strokeStyle = "#000000";
            A11_Inheritance.crc2.beginPath();
            A11_Inheritance.crc2.moveTo(this.x - 10, this.y);
            A11_Inheritance.crc2.lineTo(this.x - 10, this.y + 40);
            A11_Inheritance.crc2.lineTo(this.x + 10, this.y + 40);
            A11_Inheritance.crc2.lineTo(this.x + 10, this.y);
            A11_Inheritance.crc2.closePath();
            A11_Inheritance.crc2.fill();
            A11_Inheritance.crc2.stroke();
            A11_Inheritance.crc2.fillStyle = "green";
            A11_Inheritance.crc2.strokeStyle = "#000000";
            A11_Inheritance.crc2.beginPath();
            A11_Inheritance.crc2.moveTo(this.x - 22.5, this.y);
            A11_Inheritance.crc2.lineTo(this.x, this.y - 40);
            A11_Inheritance.crc2.lineTo(this.x + 22.5, this.y);
            A11_Inheritance.crc2.closePath();
            A11_Inheritance.crc2.fill();
            A11_Inheritance.crc2.stroke();
        }
    }
    A11_Inheritance.Tree = Tree;
})(A11_Inheritance || (A11_Inheritance = {}));
//# sourceMappingURL=Tree.js.map