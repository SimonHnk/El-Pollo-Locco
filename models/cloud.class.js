class Cloud extends MovableObject {
    y = 20;
    x = Math.random() * 500;
    width = 450;
    height = 300;

    constructor() {
        super().loadImg('../img/5_background/layers/4_clouds/1.png');
    }
}