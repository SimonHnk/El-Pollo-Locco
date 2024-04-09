class Cloud extends MovableObject {
    y = 20;
    x = Math.random() * 500;
    width = 450 + Math.random() * 500;
    height = 300 + Math.random() * 200;

    constructor() {
        super().loadImg('../img/5_background/layers/4_clouds/1.png');
        this.speed = 0.15 + Math.random() * 0.15;
        this.animate();
    }

    animate() {
        this.moveLeft();
    }
}