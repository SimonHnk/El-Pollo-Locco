class Chicken extends MovableObject {
    height = 70;
    width = 60;
    y = 370;

    constructor() {
        super().loadImg('../img/3_enemies_chicken/chicken_normal/1_walk/2_w.png');
        this.x = 200 + Math.random() * 500;
    }
}