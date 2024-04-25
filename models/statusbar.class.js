class Statusbar extends DrawableObject {
    IMAGES = [
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/0.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/20.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/40.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/60.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/80.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/100.png',
    ];
    percentage = 100;
    x = 10;
    y = -10;
    height = 60;
    width = 200;


    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.setPercentage(100);
    }


    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES[this.setHealthImage()];
        this.img = this.imageCache[path];
    }


    setHealthImage() {
        if (this.percentage == 0) {
            return 0;
        }
        if (this.percentage <= 20) {
            return 1;
        }
        if (this.percentage <= 40) {
            return 2;
        }
        if (this.percentage <= 60) {
            return 3;
        }
        if (this.percentage <= 80) {
            return 4;
        }
        if (this.percentage <= 100) {
            return 5;
        }
    }
}