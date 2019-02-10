var end;
(function (end) {
    class Tree extends end.Objects {
        draw() {
            end.crc2.lineWidth = 1;
            end.crc2.fillStyle = "brown";
            end.crc2.strokeStyle = "#000000";
            end.crc2.beginPath();
            end.crc2.moveTo(this.x - 10, this.y);
            end.crc2.lineTo(this.x - 10, this.y + 40);
            end.crc2.lineTo(this.x + 10, this.y + 40);
            end.crc2.lineTo(this.x + 10, this.y);
            end.crc2.closePath();
            end.crc2.fill();
            end.crc2.stroke();
            end.crc2.fillStyle = "green";
            end.crc2.strokeStyle = "#000000";
            end.crc2.beginPath();
            end.crc2.moveTo(this.x - 22.5, this.y);
            end.crc2.lineTo(this.x, this.y - 40);
            end.crc2.lineTo(this.x + 22.5, this.y);
            end.crc2.closePath();
            end.crc2.fill();
            end.crc2.stroke();
        }
    }
    end.Tree = Tree;
})(end || (end = {}));
//# sourceMappingURL=Tree.js.map