var Canvas = require('canvas'),
    fs = require('fs'),
    pad = require('pad'),
    canvas = new Canvas(100, 100),
    ctx = canvas.getContext('2d');

ctx.antialias = 'none';

function line(x) {
    ctx.globalCompositeOperation = 'source-over';
    ctx.beginPath();
    ctx.lineTo(x - 100, 0);
    ctx.lineTo(x, 100);

    ctx.strokeStyle = '#eee';
    ctx.lineWidth = 4;
    ctx.stroke();
}

var i = 0;
for (var x = -100; x < 0; x++) {
    canvas.width = 100;
    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, 100, 100);
    for (var z = x; z < 400; z += 20) {
        line(z);
    }
    fs.writeFileSync('frames/' + pad(15, (i++) + 'frame.png', '0'), canvas.toBuffer());
}
