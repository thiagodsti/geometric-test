define(function (require) {

    const config = require('./config');

    "use strict";
    function Point(x, y, context) {
        const r = config.pointDiameter / 2;
        context.beginPath();
        context.arc(x, y, r, 0, 2 * Math.PI, false);
        context.lineWidth = 1;
        context.strokeStyle = config.pointColor;
        context.stroke();
        context.font = config.font;
        context.fillText(`x: ${x}`, x - 10, y + 20);
        context.fillText(`y: ${y}`, x - 10, y + 30);
    }

    return Point;
});