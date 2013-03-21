// initialization
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var startedDrawing = false;

// add event listener to check when user is clicking
canvas.addEventListener("mousemove", getPosition, false);

function getPosition(event){
    var x = event.x;
    var y = event.y;
    var canvas = document.getElementById("canvas");

    x -= canvas.offsetLeft;
    y -= canvas.offsetTop;

    if(!startedDrawing){
        context.beginPath();
        context.moveTo(x, y);
        startedDrawing = true;
    }
    else{
        context.lineTo(x, y);
        context.strokeStyle = "#ff0000";
        context.stroke();
    }
}
