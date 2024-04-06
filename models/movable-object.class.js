class MovableObject {
    x = 100;
    y = 200;
    img;
    height = 250;
    width = 150;


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