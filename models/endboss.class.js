class Endboss extends MovableObject {
    IMAGES_WALK = [
        '../img/4_enemie_boss_chicken/2_alert/G5.png',
        '../img/4_enemie_boss_chicken/2_alert/G6.png',
        '../img/4_enemie_boss_chicken/2_alert/G7.png',
        '../img/4_enemie_boss_chicken/2_alert/G8.png',
        '../img/4_enemie_boss_chicken/2_alert/G9.png',
        '../img/4_enemie_boss_chicken/2_alert/G10.png',
        '../img/4_enemie_boss_chicken/2_alert/G11.png',
        '../img/4_enemie_boss_chicken/2_alert/G12.png'
    ];
    currentImage = 0;


    constructor() {
        super().loadImg(this.IMAGES_WALK[7]);
        this.loadImages(this.IMAGES_WALK);
        this.x = 700;
        this.animate();
    }


    animate() {   
        setInterval(() => {
            this.playAnimation(this.IMAGES_WALK);
        }, 200);
    }
}