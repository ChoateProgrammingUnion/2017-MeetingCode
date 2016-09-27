var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

function drawCircle(ox, oy, radius) {
	ctx.beginPath();
	ctx.arc(ox, oy, radius, 0, 2 * Math.PI, false);
	ctx.fill();
	ctx.stroke();
}
function drawRect(ox, oy, width, height) {
	ctx.beginPath();
	ctx.rect(ox, oy, width, height);
	ctx.fill();
	ctx.stroke();
}
function fillCanvas(color) {
	ctx.beginPath();
	var oldcolor = ctx.fillStyle;
	ctx.rect(0, 0, 800, 600);
	ctx.fillStyle = color;
	ctx.fill();
	ctx.fillStyle=oldcolor;
}

function init() {
	setup();
	window.requestAnimationFrame(draw);
}

function draw() {
	loop();
	window.setTimeout(window.requestAnimationFrame(draw), 1000 / 60);
}


init();