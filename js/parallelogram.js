define(function (require) {

    const config = require('./config');
    let area;

    "use strict";
    function Parallelogram(points, ctx) {
        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);
        points.map(i => {
          ctx.lineTo(i.x, i.y);
        })
        ctx.closePath()
        ctx.strokeStyle = config.parallelogramColor;
        ctx.stroke();

        ctx.font = config.font;
        ctx.fillText(`x: ${this.centreOfMass.x}`, this.centreOfMass.x - 10, this.centreOfMass.y + 20);
        ctx.fillText(`y: ${this.centreOfMass.y}`, this.centreOfMass.x - 10, this.centreOfMass.y + 30);
        ctx.fillText(`area: ${this.area}`, this.centreOfMass.x - 10, this.centreOfMass.y + 40);
    }

    return Parallelogram;
});