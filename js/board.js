define(function (require) {
    "use strict";
    const Point = require('./point');
    const Parallelogram = require('./parallelogram');
    const Circle = require('./circle');

    let points = [];
    let canvas = null;
    let context = null;
    let selected = null;

    function Board(elem) {
        canvas = elem;
        context = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        attachEvents();

    }

    function attachEvents() {
        canvas.addEventListener('mousedown', handleClick.bind(this), false);
        canvas.addEventListener('mouseup', mouseup.bind(this), false);
        canvas.addEventListener('mousemove', mousemove.bind(this), false);
    }

    function mousemove(e) {
        canvas.style.cursor = "default";
        if (points.length < 4) {
            return;
        }

        const x = e.clientX;
        const y = e.clientY;
        points.map(point => {
            if (x > point.x - 10 && x < point.x + 10
                && y > point.y - 10 && y < point.y + 10) {
                canvas.style.cursor = "move";
                if (point == points[3]) {
                    canvas.style.cursor = "no-drop";
                }
            }
        })

        if (selected) {
            selected.x += e.movementX;
            selected.y += e.movementY;
            redraw();
        }
    }


    function mouseup(e) {
        if (selected) {
            selected = null;
            redraw();
        }
    }

    function redraw() {
        points = points.slice(0, 3);
        points.map(point => new Point(point.x, point.y, context));
        const x4 = points[0].x - points[1].x + points[2].x;
        const y4 = points[0].y - points[1].y + points[2].y;
        addPoint({ x: x4, y: y4 })

        const parallelogram = drawParallelogram();
        drawCircle(parallelogram);
    }

    function handleClick(e) {
        const x = e.clientX;
        const y = e.clientY;

        if (points.length >= 3) {
            points.map(point => {
                if (x > point.x - 10 && x < point.x + 10
                    && y > point.y - 10 && y < point.y + 10) {
                    if (points == points[3]) {
                        return;
                    }
                    selected = point;
                }
            })
            return;
        }

        if (points.length < 2) {
            addPoint({ x, y });
            return;
        }
        addPoint({ x, y });

        const x4 = points[0].x - points[1].x + points[2].x;
        const y4 = points[0].y - points[1].y + points[2].y;
        addPoint({ x: x4, y: y4 })

        const parallelogram = drawParallelogram();
        drawCircle(parallelogram);
    }

    function addPoint({ x, y }) {
        points.push({ x, y });
        context.clearRect(0, 0, canvas.width, canvas.height);
        points.map(point => {
            new Point(
                point.x,
                point.y,
                context
            );
        })
    }

    function drawParallelogram() {
        return new Parallelogram(points, context);
    }

    function drawCircle(parallelogram) {
        new Circle(parallelogram.area, parallelogram.centreOfMass, context);
    }

    return Board;
});
