class ThrowableObject extends MovableObject {
    height = 90;
    width = 80;
    
    constructor(x, y) {
        super().loadImg('../img/6_salsa_bottle/1_salsa_bottle_on_ground.png');
        this.throw(x, y);
    }


    throw(x, y) {
        this.x = x;
        this.y = y;
        this.speedY = 30;
        this.applyGravity();
        setInterval(() => {
            if (this.isAboveGround()) {
                this.x += 10;
            }
        }, 30);
    }
}