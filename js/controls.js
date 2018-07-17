"use strict";
define(function (require) {

    let about;
    let reset;
    let board;
    let modal;
    let spanModalClose;
    function Controls(boardInstance) {
        about = document.getElementById("about");
        reset = document.getElementById("reset");
        modal = document.getElementById('myModal');
        spanModalClose = document.getElementsByClassName("close")[0];
        board = boardInstance;
        attachEvents();

    }

    function attachEvents() {
        about.addEventListener('click', handleAbout.bind(this), false);
        reset.addEventListener('click', handleReset.bind(this), false);
        spanModalClose.addEventListener('click', closeAbout.bind(this), false);
    }

    function closeAbout() {
        modal.style.display = "none";
    }
    
    function handleAbout() {
        modal.style.display = "block";
    }

    function handleReset() {
        board.reset();
    }


    return Controls;
});
