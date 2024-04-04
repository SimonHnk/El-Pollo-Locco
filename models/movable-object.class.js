class MovableObject {
    x;
    y;
    img;


    loadImg(path) {
        this.img = new Image();
        this.img.src = path;
    }


    moveRight() {
        console.log('Moving Right');
    }


    moveLeft() {
        console.log('Moving Left');
    }
}