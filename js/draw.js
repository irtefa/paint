var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

context.beginPath();
context.moveTo(100, 150);
context.lineTo(500, 50);
context.stroke();
