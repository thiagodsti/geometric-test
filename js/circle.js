define(function (require) {

    const config = require('./config');

    "use strict";
    function Circle(area, centreOfMass, context) {
        const x = centreOfMass.x;
        const y = centreOfMass.y;

        const r = Math.round(Math.sqrt(area / Math.PI))
        context.beginPath();
        context.arc(x, y, r, 0, 2 * Math.PI, false);
        context.lineWidth = 1;
        context.strokeStyle = config.circleColor;
        context.stroke();
    }

    return Circle;
});