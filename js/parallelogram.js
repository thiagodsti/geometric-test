define(function (require) {

    const config = require('./config');
    let area;
    let centreOfMass;

    "use strict";
    function Parallelogram(points, ctx) {
        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);
        points.map(p => ctx.lineTo(p.x, p.y))
        ctx.closePath()
        ctx.strokeStyle = config.parallelogramColor;
        ctx.stroke();


        centreOfMass = calculateCentreOfMass(points);
        area = calculateArea(points);

        ctx.font = config.font;
        ctx.fillText(`x: ${centreOfMass.x}`, centreOfMass.x, centreOfMass.y + 10);
        ctx.fillText(`y: ${centreOfMass.y}`, centreOfMass.x, centreOfMass.y + 20);
        ctx.fillText(`area: ${area}`, centreOfMass.x, centreOfMass.y + 30);
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