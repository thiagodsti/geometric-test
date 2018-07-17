"use strict";
define(function (require) {

    const color = "blue";
    const font = "12px Nunito";

    function Parallelogram(points, context) {
        context.beginPath();
        context.moveTo(points[0].x, points[0].y);
        points.map(p => context.lineTo(p.x, p.y))
        context.closePath()
        context.strokeStyle = color
        context.stroke();


        this.centreOfMass = calculateCentreOfMass(points);
        this.area = calculateArea(points);

        context.font = font;
        context.fillText(`x: ${this.centreOfMass.x}`, this.centreOfMass.x, this.centreOfMass.y + 10);
        context.fillText(`y: ${this.centreOfMass.y}`, this.centreOfMass.x, this.centreOfMass.y + 20);
        context.fillText(`area: ${this.area}`, this.centreOfMass.x, this.centreOfMass.y + 30);
    }

    function calculateCentreOfMass(points) {
        const x = points.map(p => p.x).reduce((x, total) => total + x, 0) / 4;
        const y = points.map(p => p.y).reduce((y, total) => total + y, 0) / 4;

        return {x: Math.round(x), y: Math.round(y)}
    }
    
    function calculateArea(points) {
        const A = points[0];
        const B = points[1];
        const C = points[2];
        const AB = {x: B.x - A.x, y: B.y - A.y};
        const AC = {x: C.x - A.x, y: C.y - A.y};
        return Math.abs((AB.x*AC.y) - (AB.y*AC.x));
    }

    return Parallelogram;
});