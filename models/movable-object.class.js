class MovableObject {
    x = 100;
    y = 200;
    img;
    height = 250;
    width = 150;
    imageCache = [];
    speed = 0.15;


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


    moveRight() {
        console.log('Moving Right');
    }


    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
        },1000 / 60);
    }
}