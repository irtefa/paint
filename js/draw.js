// global variable that holds what color it is
window.color = "red";
// initialization
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var startedDrawing = false;

// add event listener to check when user is clicking
canvas.addEventListener("mousedown", drawcanvas, false);
canvas.addEventListener("mousemove", drawcanvas, false);
canvas.addEventListener("mouseup", drawcanvas, false);

function drawcanvas(event){
    var x = event.x;
    var y = event.y;
    var canvas = document.getElementById("canvas");

    x -= canvas.offsetLeft;
    y -= canvas.offsetTop;

    // this is called when you start holding down the mouse button
    if(event.type === "mousedown"){
        context.beginPath();
        context.moveTo(x, y);
        startedDrawing = true;
    }
    // this function is called when you move the mouse if you already held the mouse button
    else if(event.type === "mousemove" && startedDrawing === true){
        context.lineTo(x, y);
        context.strokeStyle = window.color;
        context.stroke();
    }
    // this is called when you release the mouse button
    else if(event.type === "mouseup" && startedDrawing === true){
        startedDrawing = false;
    }

}
