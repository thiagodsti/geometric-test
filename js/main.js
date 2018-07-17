"use strict";
define(function (require){
    const Board = require('./board');
    const Controls = require('./controls'); 
    
    let board = new Board(document.querySelector("canvas"));

    let controls = new Controls(board)
});
