let canvasEl = document.getElementById('canvasOne');

if (!canvasEl.getContext) {
    document.body.innerHTML = 'Canvas 2D Context not supported';
    throw new Error('Canvas 2D Context not supported');
}

let ctx = canvasEl.getContext('2d');

// ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
ctx.fillStyle = 'rgb(255, 255, 255)';
ctx.fillRect(0, 0, canvasEl.width, canvasEl.height);

ctx.fillStyle = 'rgb(255, 100, 50)';
ctx.fillRect(10, 10, 100, 100);

/*
zoomctx.imageSmoothingEnabled = false;
zoomctx.mozImageSmoothingEnabled = false;
zoomctx.webkitImageSmoothingEnabled = false;
zoomctx.msImageSmoothingEnabled = this.false;
*/