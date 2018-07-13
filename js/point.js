define(function (require) {

    const config = require('./config');

    "use strict";
    function Point(x, y, ctx) {
        const r = config.pointDiameter / 2;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, 2 * Math.PI, false);
        ctx.lineWidth = 1;
        ctx.strokeStyle = config.pointColor;
        ctx.stroke();


        ctx.font = config.font;
        ctx.fillText(`x: ${x}`, x - 10, y + 20);
        ctx.fillText(`y: ${y}`, x - 10, y + 30);
    }

    return Point;
});