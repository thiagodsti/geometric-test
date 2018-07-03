define(function (require){
    "use strict";
    let Point = require('./point');

    "use strict";
    function Board(elem) {
        this.canvas = elem;
        this.ctx = this.canvas.getContext("2d");
        console.log(document.body.clientWidth);
        console.log(window.innerHeight);
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
  
  
        //this.canvas.height = window.innerHeight;
        
        let p = new Point(50, 40, this.ctx);
        
        //this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    }
  
    
    return Board;
});
