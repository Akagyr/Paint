function saveImage() {
    let data = canvas.toDataURL("image");
    let a = document.createElement("a");
    a.href = data;
    a.download = "sketch.png";
    a.click()
};

window.addEventListener("load", function onWindowLoad() {
    generatePalette(document.getElementById("palette"));

    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
 
    context.lineCap = "round";
    context.lineWidth = 1;
    document.getElementById("clear").onclick = function clear() {
      context.clearRect(0, 0, canvas.width, canvas.height);
    };
   
    canvas.onmousemove = function drawIfPressed (e) {
        var x = e.offsetX;
        var y = e.offsetY;
        var dx = e.movementX;
        var dy = e.movementY;

        if (e.buttons > 0) {
            context.beginPath();
            context.moveTo(x, y);
            context.lineTo(x - dx, y - dy);
            context.stroke();
            context.closePath();
        }
    };

    function generatePalette(palette) {
        for (var r = 0, max = 3; r <= max; r++) {
            for (var g = 0; g <= max; g++) {
                for (var b = 0; b <= max; b++) {
                    var paletteBlock = document.createElement('div');
                    paletteBlock.className = 'button';
                    paletteBlock.addEventListener('click', function changeColor(e) {
                    context.strokeStyle = e.target.style.backgroundColor;
                    });

                    paletteBlock.style.backgroundColor = (
                    'rgb(' + Math.round(r * 255 / max) + ", "
                    + Math.round(g * 255 / max) + ", "
                    + Math.round(b * 255 / max) + ")"
                    );

                    palette.appendChild(paletteBlock);
                }
            }
        }
    }

    function chengeWithPixels(x) {
        context.lineCap = "round";
        context.lineWidth = x;
    }

    document.getElementById("onePixel").addEventListener("click", function onOneClick() {
        chengeWithPixels(1);
    })

    document.getElementById("twoPixels").addEventListener("click", function onTwoClick() {
        chengeWithPixels(2);
    })

    document.getElementById("threePixels").addEventListener("click", function onThreeClick() {
        chengeWithPixels(3);
    })

    document.getElementById("fourPixels").addEventListener("click", function onFourClick() {
        chengeWithPixels(4);
    })

    document.getElementById("fivePixels").addEventListener("click", function onFiveClick() {
        chengeWithPixels(5);
    })
});
