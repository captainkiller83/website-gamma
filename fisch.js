async function removeImageBackground(image) {
    const backgroundColor = { red: 255, green: 255, blue: 255 };
    const threshold = 10;

    const imageElement = new Image();
    imageElement.src = image;
    await new Promise(function(resolve) { imageElement.addEventListener('load', resolve); });

    var canvas = document.createElement('canvas');
    canvas.width = imageElement.naturalWidth;
    canvas.height = imageElement.naturalHeight;

    var ctx = canvas.getContext('2d');
    ctx.drawImage(imageElement, 0, 0);
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < imageData.data.length; i += 4) {
        const red = imageData.data[i];
        const green = imageData.data[i + 1];
        const blue = imageData.data[i + 2];
        if (Math.abs(red - backgroundColor.red) < threshold &&
            Math.abs(green - backgroundColor.green) < threshold &&
            Math.abs(blue - backgroundColor.blue) < threshold) {
            imageData.data[i + 3] = 0;
        }
    }

    ctx.putImageData(imageData, 0, 0);
    return canvas.toDataURL(`image/png`);
}
let image = document.querySelectorAll('img')[0];
removeImageBackground(image.src).then((data) => {
    image.src = data;
});