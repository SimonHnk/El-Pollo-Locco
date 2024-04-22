class DrawableObject {
    x = 100;
    y = 200;
    height = 250;
    width = 150;
    img;
    imageCache = [];
    currentImage = 0;


    loadImg(path) {
        this.img = new Image();
        this.img.src = path;
    }


    loadImages(arr) {
        arr.forEach(path => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }


    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
}