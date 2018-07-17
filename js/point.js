define(function (require) {

    const color = "red";
    const font = "12px Nunito";
    const diameter = 11;

    "use strict";
    function Point(x, y, context) {
        const r = diameter / 2;
        context.beginPath();
        context.arc(x, y, r, 0, 2 * Math.PI, false);
        context.lineWidth = 1;
        context.strokeStyle = color;
        context.stroke();
        context.font = font;
        context.fillText(`x: ${x}`, x - 10, y + 20);
        context.fillText(`y: ${y}`, x - 10, y + 30);
    }

    return Point;
});