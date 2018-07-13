define(function (require) {
    "use strict";
    const Point = require('./point');

    const points = [];
    let canvas = null;
    let ctx = null;

    function Board(elem) {
        canvas = elem;
        ctx = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        attachEvents();


        //this.canvas.height = window.innerHeight;

        //this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    }

    function attachEvents() {
        canvas.addEventListener('mousedown', handleClick.bind(this), false);
    }

    function handleClick(e) {
        const x = e.clientX;
        const y = e.clientY;

        if (points.length < 3) {
            addPoint({ x, y });
            return;
        }
    }

    function addPoint({ x, y }) {
        points.push({ x, y });
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        points.map(point => {
            new Point(
                point.x,
                point.y,
                ctx
            );
        })
    }

    return Board;
});
